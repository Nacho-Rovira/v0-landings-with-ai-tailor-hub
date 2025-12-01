"use client"

import React, { useState, useEffect, useMemo } from "react"
import "./MenuSidebar.css"

export interface MenuSidebarItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** The menu item content */
  children: React.ReactNode
  /** Whether the menu item is currently active/selected */
  isActive?: boolean
  /** Whether the menu item is disabled */
  isDisabled?: boolean
  /** The href for the menu item link */
  href?: string
  /** The number to display before the content (e.g., 1 for "01.", 2 for "02.") */
  number?: number
}

export interface MenuSidebarProps extends React.HTMLAttributes<HTMLElement> {
  /** The menu sidebar content (typically MenuSidebarItem components) */
  children: React.ReactNode
  /** Enable automatic active state based on scroll position */
  autoDetectActive?: boolean
}

export const MenuSidebarItem = React.forwardRef<HTMLAnchorElement, MenuSidebarItemProps>(
  ({ children, isActive = false, isDisabled = false, href = "#", number, className = "", onClick, ...props }, ref) => {
    const classes = [
      "menu-sidebar__item",
      isActive ? "menu-sidebar__item--active" : "",
      isDisabled ? "menu-sidebar__item--disabled" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ")

    const formattedNumber = number !== undefined ? String(number).padStart(2, "0") : null

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (isDisabled) return

      e.preventDefault()
      const targetId = href.replace("#", "")
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const offset = 140 // Account for sticky header/spacing
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }

      onClick?.(e)
    }

    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        onClick={handleClick}
        aria-disabled={isDisabled}
        aria-current={isActive ? "location" : undefined}
        {...(isDisabled ? { tabIndex: -1, "aria-disabled": true } : {})}
        {...props}
      >
        {formattedNumber && <span className="menu-sidebar__number">{formattedNumber}.</span>}
        <span className="menu-sidebar__label">{children}</span>
      </a>
    )
  },
)

MenuSidebarItem.displayName = "MenuSidebarItem"

export const MenuSidebar = React.forwardRef<HTMLElement, MenuSidebarProps>(
  ({ children, className = "", autoDetectActive = false, ...props }, ref) => {
    const classes = ["menu-sidebar", className].filter(Boolean).join(" ")
    const [activeSection, setActiveSection] = useState<string>("")

    const sectionIds = useMemo(() => {
      const ids: string[] = []
      const extractIds = (childrenToProcess: React.ReactNode) => {
        React.Children.forEach(childrenToProcess, (child) => {
          if (React.isValidElement(child)) {
            // Check if child has href prop (works regardless of component type detection)
            const childProps = child.props as { href?: string; children?: React.ReactNode }
            if (childProps.href && childProps.href.startsWith("#")) {
              const href = childProps.href.replace("#", "")
              if (href) ids.push(href)
            }
            // Also check nested children
            if (childProps.children) {
              extractIds(childProps.children)
            }
          }
        })
      }
      extractIds(children)
      console.log("[v0] MenuSidebar sectionIds extracted:", ids)
      return ids
    }, [children])

    useEffect(() => {
      if (!autoDetectActive || sectionIds.length === 0) {
        console.log("[v0] autoDetectActive disabled or no sections found")
        return
      }

      const handleScroll = () => {
        const topThreshold = 150
        let currentSection = ""

        for (const id of sectionIds) {
          const section = document.getElementById(id)
          if (!section) {
            console.log("[v0] Section not found:", id)
            continue
          }

          const rect = section.getBoundingClientRect()

          if (rect.top <= topThreshold) {
            currentSection = id
          } else {
            break
          }
        }

        if (!currentSection && sectionIds.length > 0) {
          currentSection = sectionIds[0]
        }

        if (activeSection !== currentSection) {
          console.log("[v0] Active section changed to:", currentSection)
        }
        setActiveSection(currentSection)
      }

      window.addEventListener("scroll", handleScroll)
      handleScroll()

      return () => window.removeEventListener("scroll", handleScroll)
    }, [autoDetectActive, sectionIds, activeSection])

    const enhancedChildren = autoDetectActive
      ? React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            const childProps = child.props as { href?: string; isActive?: boolean }
            if (childProps.href && childProps.href.startsWith("#")) {
              const href = childProps.href.replace("#", "")
              const isActive = href === activeSection || childProps.isActive
              return React.cloneElement(child, {
                ...child.props,
                isActive,
              } as MenuSidebarItemProps)
            }
          }
          return child
        })
      : children

    return (
      <aside ref={ref} className={classes} {...props}>
        {enhancedChildren}
      </aside>
    )
  },
)

MenuSidebar.displayName = "MenuSidebar"
