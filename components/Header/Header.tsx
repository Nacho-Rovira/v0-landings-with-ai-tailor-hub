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
  /** Concept items to display alongside logo on mobile */
  concepts?: string[]
}

const defaultMenuItems = [
  { label: "services", href: "/services" },
  { label: "projects", href: "/projects" },
  { label: "about", href: "/about" },
  { label: "contact", href: "https://tally.so/r/wopD8P" },
]

export const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ variant = "starter", menuItems = defaultMenuItems, concepts, className = "", ...props }, ref) => {
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

    const renderConcept = (concept: string) => {
      const parts = concept.split("<span>")
      return parts.map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i < parts.length - 1 && <br />}
        </React.Fragment>
      ))
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

          {concepts && concepts.length > 0 && (
            <div className="header__concepts">
              {concepts.map((concept, index) => (
                <span key={index} className="header__concept-item">
                  {renderConcept(concept)}
                </span>
              ))}
            </div>
          )}

          {/* Mobile menu overlay */}
          {isMobileMenuOpen && (
            <div className="header__mobile-menu">
              <nav className="header__mobile-nav">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`header__mobile-link ${item.isSelected ? "header__mobile-link--selected" : ""}`}
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
              <MenuItem key={index} href={item.href} isSelected={item.isSelected}>
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </div>

        {/* Main content with logo */}
        <div className="header__content mt-10">
          <div className="header__logo">
            <TailorHubLogo size={isScrolling ? "small" : "large"} aria-label="Tailor Hub" />
          </div>
        </div>
      </header>
    )
  },
)

Header.displayName = "Header"
