"use client"

import React, { useState, useEffect } from "react"
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

    useEffect(() => {
      if (!autoDetectActive) return

      const handleScroll = () => {
        // Get all section IDs from menu items
        const sections = Array.from(
          document.querySelectorAll(
            '[id^="challenge"], [id^="objectives"], [id^="approach"], [id^="services"], [id^="technology"], [id^="roadmap"], [id^="budget"], [id^="support"]',
          ),
        )

        // Use a small offset from the top of the viewport
        const topThreshold = 150

        let currentSection = ""

        for (let i = 0; i < sections.length; i++) {
          const section = sections[i] as HTMLElement
          const rect = section.getBoundingClientRect()

          // If this section's top is above or at the threshold, it's the current section
          // Keep checking until we find a section that's below the threshold
          if (rect.top <= topThreshold) {
            currentSection = section.id
          } else {
            // This section hasn't reached the top yet, so previous section is still active
            break
          }
        }

        // If no section found (at very top), default to first section
        if (!currentSection && sections.length > 0) {
          currentSection = sections[0].id
        }

        setActiveSection(currentSection)
      }

      window.addEventListener("scroll", handleScroll)
      handleScroll() // Initial check

      return () => window.removeEventListener("scroll", handleScroll)
    }, [autoDetectActive])

    const enhancedChildren = autoDetectActive
      ? React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === MenuSidebarItem) {
            const href = child.props.href?.replace("#", "")
            return React.cloneElement(child, {
              ...child.props,
              isActive: href === activeSection || child.props.isActive,
            } as MenuSidebarItemProps)
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
