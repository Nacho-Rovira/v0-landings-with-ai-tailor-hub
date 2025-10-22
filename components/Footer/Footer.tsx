import React from "react"
import { TailorHubLogoWithName } from "../Logo/TailorHubLogoWithName"
import "./Footer.css"

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Footer variant */
  variant?: "default" | "mobile"
  /** Custom contact information */
  contactInfo?: {
    email?: string
    phone?: string
    address?: {
      line1: string
      line2: string
    }
  }
  /** Custom social links */
  socialLinks?: Array<{
    label: string
    href: string
  }>
  /** Custom legal links */
  legalLinks?: Array<{
    label: string
    href: string
  }>
}

const defaultContactInfo = {
  email: "SALES@TAILOR-HUB.COM",
  phone: "+34 682 270 526",
  address: {
    line1: "CALLE HERMANOS ÁLVAREZ QUINTERO, 2,",
    line2: "SEMISÓTANO A, 28004 MADRID"
  }
}

const defaultSocialLinks = [
  { label: "LINKEDIN", href: "https://linkedin.com/company/tailor-hub" },
  { label: "SPOTIFY", href: "https://spotify.com" },
  { label: "INSTAGRAM", href: "https://instagram.com/tailor_hub" }
]

const defaultLegalLinks = [
  { label: "POLICY & LEGAL", href: "/legal" },
  { label: "COLLABORATION LINES", href: "/collaboration" }
]

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ 
    variant = "default", 
    contactInfo = defaultContactInfo,
    socialLinks = defaultSocialLinks,
    legalLinks = defaultLegalLinks,
    className = "", 
    ...props 
  }, ref) => {
    const isMobile = variant === "mobile"
    
    if (isMobile) {
      return (
        <footer ref={ref} className={`footer footer--mobile ${className}`} {...props}>
          {/* Contact Section */}
          <div className="footer__section">
            <div className="footer__header">
              <div className="footer__section-title">
                <span>/</span>
                <span>CONTACT</span>
              </div>
              <div className="footer__info-title">
                PROUDLY PART OF MODULOS STUDIO GROUP
              </div>
            </div>
            
            <div className="footer__contact footer__contact--mobile">
              <div className="footer__contact-line footer__contact-line--mobile">
                <p>{contactInfo.email}</p>
                <p>{contactInfo.phone}</p>
              </div>
              <div className="footer__address">
                <p>{contactInfo.address.line1}</p>
                <p>{contactInfo.address.line2}</p>
              </div>
            </div>
          </div>

          {/* Logo Section - Mobile */}
          <div className="footer__logo footer__logo--mobile">
            <TailorHubLogoWithName size="small" />
          </div>

          {/* Social and Legal Sections - Mobile */}
          <div className="footer__links footer__links--mobile">
            {/* Social Section */}
            <div className="footer__link-row">
              <div className="footer__section-title">
                <span>/</span>
                <span>SOCIAL</span>
              </div>
              <div className="footer__link-group footer__link-group--mobile">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.href} className="footer__link">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Legal Section */}
            <div className="footer__link-row">
              <div className="footer__section-title">
                <span>/</span>
                <span>LEGAL</span>
              </div>
              <div className="footer__link-group footer__link-group--mobile">
                {legalLinks.map((link, index) => (
                  <a key={index} href={link.href} className="footer__link">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      )
    }

    return (
      <footer ref={ref} className={`footer footer--${variant} ${className}`} {...props}>
        {/* Contact Section */}
        <div className="footer__section">
          <div className="footer__header">
            <div className="footer__section-title">
              <span>/</span>
              <span>CONTACT</span>
            </div>
            <div className="footer__info-title">
              PROUDLY PART OF MODULOS STUDIO GROUP
            </div>
          </div>
          
          <div className="footer__contact">
            <div className="footer__contact-line">
              <span>{contactInfo.email}</span>
              <span>{contactInfo.phone}</span>
            </div>
            <div className="footer__address">
              <p>{contactInfo.address.line1}</p>
              <p>{contactInfo.address.line2}</p>
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className="footer__logo">
          <TailorHubLogoWithName size="large" />
        </div>

        {/* Social and Legal Sections */}
        <div className="footer__links">
          {/* Social Section */}
          <div className="footer__link-row">
            <div className="footer__section-title">
              <span>/</span>
              <span>SOCIAL</span>
            </div>
            <div className="footer__link-group">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} className="footer__link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal Section */}
          <div className="footer__link-row">
            <div className="footer__section-title">
              <span>/</span>
              <span>LEGAL</span>
            </div>
            <div className="footer__link-group">
              {legalLinks.map((link, index) => (
                <a key={index} href={link.href} className="footer__link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    )
  }
)

Footer.displayName = "Footer"
