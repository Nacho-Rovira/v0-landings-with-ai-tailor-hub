import React from "react"
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
}

export const MenuSidebarItem = React.forwardRef<HTMLAnchorElement, MenuSidebarItemProps>(
  ({ children, isActive = false, isDisabled = false, href = "#", number, className = "", ...props }, ref) => {
    const classes = [
      "menu-sidebar__item",
      isActive ? "menu-sidebar__item--active" : "",
      isDisabled ? "menu-sidebar__item--disabled" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ")

    const formattedNumber = number !== undefined ? String(number).padStart(2, "0") : null

    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        aria-disabled={isDisabled}
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
  ({ children, className = "", ...props }, ref) => {
    const classes = ["menu-sidebar", className].filter(Boolean).join(" ")

    return (
      <aside ref={ref} className={classes} {...props}>
        {children}
      </aside>
    )
  },
)

MenuSidebar.displayName = "MenuSidebar"

