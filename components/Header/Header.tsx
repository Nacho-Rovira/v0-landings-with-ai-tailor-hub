import React from "react"
import { Menu } from "../Menu/Menu"
import { MenuItem } from "../MenuItem/MenuItem"
import { TailorHubLogo } from "../Logo/TailorHubLogo"
import "./Header.css"

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Header variant - starter is transparent, scrolling has menu background */
  variant?: "starter" | "scrolling"
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
    const isScrolling = variant === "scrolling"

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
