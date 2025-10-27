"use client"

import React from "react"
import { Menu } from "../Menu/Menu"
import { MenuItem } from "../MenuItem/MenuItem"
import { TailorHubLogo } from "../Logo/TailorHubLogo"
import "./Header.css"

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Header variant - starter is transparent, scrolling has menu background */
  variant?: "starter" | "scrolling" | "mobile"
  /** Custom menu items */
  menuItems?: Array<{
    label: string
    href: string
    isSelected?: boolean
  }>
}

const defaultMenuItems = [
  { label: "services", href: "/services" },
  { label: "projects", href: "/projects" },
  { label: "about", href: "/about" },
  { label: "contact", href: "https://tally.so/r/wopD8P" },
]

export const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ variant = "starter", menuItems = defaultMenuItems, className = "", ...props }, ref) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const isScrolling = variant === "scrolling"
    const isMobile = variant === "mobile"

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const handleMenuItemClick = () => {
      if (isMobile) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobile) {
      return (
        <header ref={ref} className={`header header--mobile ${className}`} {...props}>
          {/* Mobile header bar */}
          <div className="header__mobile-bar">
            <div className="header__mobile-logo">
              <TailorHubLogo size="small" aria-label="Tailor Hub" />
            </div>
            <button
              className="header__mobile-toggle"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? "CLOSE" : "MENU"}
            </button>
          </div>

          {/* Mobile menu overlay */}
          {isMobileMenuOpen && (
            <div className="header__mobile-menu">
              <nav className="header__mobile-nav">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`header__mobile-link`}
                onClick={handleMenuItemClick}
              >
                {item.label.toUpperCase()}
              </a>
            ))}
              </nav>
            </div>
          )}
        </header>
      )
    }

    return (
      <header ref={ref} className={`header header--${variant} ${className}`} {...props}>
        {/* Menu positioned in top-right */}
        <div className="header__menu">
          <Menu variant={isScrolling ? "scrolling" : "starter"}>
            {menuItems.map((item, index) => (
              <MenuItem key={index} href={item.href}>
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </div>

        {/* Main content with logo and info */}
        <div className="header__content">
          <div className="header__logo">
            <TailorHubLogo size={isScrolling ? "small" : "large"} aria-label="Tailor Hub" />
          </div>

          {/* Info blocks - hidden in scrolling variant */}
          {!isScrolling && (
            <div className="header__info">
              <div className="header__info-item">
                <p>AN ELITE TEAM OF SOFTWARE</p>
                <p>ENGINEERS</p>
              </div>
              <div className="header__info-item">
                <p>DEVELOPMENT</p>
                <p>LABS</p>
              </div>
              <div className="header__info-item">
                <p>ARTIFICIAL</p>
                <p>INTELLIGENCE & DEV</p>
              </div>
            </div>
          )}
        </div>
      </header>
    )
  },
)

Header.displayName = "Header"
