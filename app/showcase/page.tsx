"use client"

import { useState } from "react"
import { Button } from "@/components/Button"
import { Menu } from "@/components/Menu"
import { MenuItem } from "@/components/MenuItem"
import { TailorHubLogo, TailorHubLogoWithName } from "@/components/Logo"
import "@/tokens/tokens.css"

export default function ShowcasePage() {
  const [selectedMenuItem, setSelectedMenuItem] = useState("components")

  return (
    <div
      style={{
        backgroundColor: "var(--color-background-default)",
        minHeight: "100vh",
        fontFamily: "var(--font-default)",
      }}
    >
      {/* Header with Logo and Menu */}
      <header
        style={{
          padding: "var(--spacing-xl) var(--spacing-xxxl)",
          borderBottom: "1px solid var(--color-background-hover)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <TailorHubLogoWithName size="small" />

          <Menu variant="starter">
            <MenuItem
              href="#components"
              isSelected={selectedMenuItem === "components"}
              onClick={(e) => {
                e.preventDefault()
                setSelectedMenuItem("components")
              }}
            >
              Components
            </MenuItem>
            <MenuItem
              href="#tokens"
              isSelected={selectedMenuItem === "tokens"}
              onClick={(e) => {
                e.preventDefault()
                setSelectedMenuItem("tokens")
              }}
            >
              Tokens
            </MenuItem>
            <MenuItem
              href="#about"
              isSelected={selectedMenuItem === "about"}
              onClick={(e) => {
                e.preventDefault()
                setSelectedMenuItem("about")
              }}
            >
              About
            </MenuItem>
          </Menu>
        </div>
      </header>

      {/* Main Content */}
      <main
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "var(--spacing-8xl) var(--spacing-xxxl)",
        }}
      >
        {/* Hero Section */}
        <section
          style={{
            marginBottom: "var(--spacing-8xl)",
          }}
        >
          <h1
            className="font-sans"
            style={{
              fontSize: "var(--text-size-4xlarge)",
              lineHeight: "var(--text-line-4xlarge)",
              color: "var(--color-text-primary)",
              marginBottom: "var(--spacing-l)",
              fontWeight: 400,
            }}
          >
            Design System Showcase
          </h1>
          <p
            className="font-mono"
            style={{
              fontSize: "var(--text-size-small)",
              lineHeight: "var(--text-line-small)",
              color: "var(--color-text-secondary)",
              maxWidth: "600px",
            }}
          >
            A comprehensive showcase of the Tailor Hub design system components, built entirely with design tokens and
            no external dependencies.
          </p>
        </section>

        {/* Logo Components Section */}
        <section
          style={{
            marginBottom: "var(--spacing-8xl)",
          }}
        >
          <h2
            className="font-sans"
            style={{
              fontSize: "var(--text-size-large)",
              lineHeight: "var(--text-line-large)",
              color: "var(--color-text-primary)",
              marginBottom: "var(--spacing-xl)",
              fontWeight: 400,
            }}
          >
            Logo Components
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-xxxl)",
              padding: "var(--spacing-xl)",
              backgroundColor: "var(--color-background-surface)",
              borderRadius: "var(--radius-s)",
            }}
          >
            {/* Logo Icon Only */}
            <div>
              <h3
                className="font-mono"
                style={{
                  fontSize: "var(--text-size-xsmall)",
                  color: "var(--color-text-secondary)",
                  marginBottom: "var(--spacing-m)",
                }}
              >
                TailorHubLogo - Small
              </h3>
              <TailorHubLogo size="small" />
            </div>

            <div>
              <h3
                className="font-mono"
                style={{
                  fontSize: "var(--text-size-xsmall)",
                  color: "var(--color-text-secondary)",
                  marginBottom: "var(--spacing-m)",
                }}
              >
                TailorHubLogo - Large
              </h3>
              <TailorHubLogo size="large" />
            </div>

            {/* Logo with Name */}
            <div>
              <h3
                className="font-mono"
                style={{
                  fontSize: "var(--text-size-xsmall)",
                  color: "var(--color-text-secondary)",
                  marginBottom: "var(--spacing-m)",
                }}
              >
                TailorHubLogoWithName - Small
              </h3>
              <TailorHubLogoWithName size="small" />
            </div>

            <div>
              <h3
                className="font-mono"
                style={{
                  fontSize: "var(--text-size-xsmall)",
                  color: "var(--color-text-secondary)",
                  marginBottom: "var(--spacing-m)",
                }}
              >
                TailorHubLogoWithName - Large
              </h3>
              <TailorHubLogoWithName size="large" />
            </div>
          </div>
        </section>

        {/* Button Component Section */}
        <section
          style={{
            marginBottom: "var(--spacing-8xl)",
          }}
        >
          <h2
            className="font-sans"
            style={{
              fontSize: "var(--text-size-large)",
              lineHeight: "var(--text-line-large)",
              color: "var(--color-text-primary)",
              marginBottom: "var(--spacing-xl)",
              fontWeight: 400,
            }}
          >
            Button Component
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-l)",
              padding: "var(--spacing-xl)",
              backgroundColor: "var(--color-background-surface)",
              borderRadius: "var(--radius-s)",
            }}
          >
            <div>
              <h3
                className="font-mono"
                style={{
                  fontSize: "var(--text-size-xsmall)",
                  color: "var(--color-text-secondary)",
                  marginBottom: "var(--spacing-m)",
                }}
              >
                Primary Button - Default State
              </h3>
              <Button variant="primary">Click me</Button>
            </div>

            <div>
              <h3
                className="font-mono"
                style={{
                  fontSize: "var(--text-size-xsmall)",
                  color: "var(--color-text-secondary)",
                  marginBottom: "var(--spacing-m)",
                }}
              >
                Primary Button - Disabled State
              </h3>
              <Button variant="primary" disabled>
                Disabled Button
              </Button>
            </div>
          </div>
        </section>

        {/* Menu Component Section */}
        <section
          style={{
            marginBottom: "var(--spacing-8xl)",
          }}
        >
          <h2
            className="font-sans"
            style={{
              fontSize: "var(--text-size-large)",
              lineHeight: "var(--text-line-large)",
              color: "var(--color-text-primary)",
              marginBottom: "var(--spacing-xl)",
              fontWeight: 400,
            }}
          >
            Menu Component
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-xxxl)",
              padding: "var(--spacing-xl)",
              backgroundColor: "var(--color-background-surface)",
              borderRadius: "var(--radius-s)",
            }}
          >
            <div>
              <h3
                className="font-mono"
                style={{
                  fontSize: "var(--text-size-xsmall)",
                  color: "var(--color-text-secondary)",
                  marginBottom: "var(--spacing-m)",
                }}
              >
                Menu - Starter Variant
              </h3>
              <Menu variant="starter">
                <MenuItem href="#home">Home</MenuItem>
                <MenuItem href="#about" isSelected>
                  About
                </MenuItem>
                <MenuItem href="#contact">Contact</MenuItem>
              </Menu>
            </div>

            <div>
              <h3
                className="font-mono"
                style={{
                  fontSize: "var(--text-size-xsmall)",
                  color: "var(--color-text-secondary)",
                  marginBottom: "var(--spacing-m)",
                }}
              >
                Menu - Scrolling Variant
              </h3>
              <Menu variant="scrolling">
                <MenuItem href="#home">Home</MenuItem>
                <MenuItem href="#about">About</MenuItem>
                <MenuItem href="#contact" isSelected>
                  Contact
                </MenuItem>
              </Menu>
            </div>
          </div>
        </section>

        {/* Design Tokens Section */}
        <section
          style={{
            marginBottom: "var(--spacing-8xl)",
          }}
        >
          <h2
            className="font-sans"
            style={{
              fontSize: "var(--text-size-large)",
              lineHeight: "var(--text-line-large)",
              color: "var(--color-text-primary)",
              marginBottom: "var(--spacing-xl)",
              fontWeight: 400,
            }}
          >
            Design Tokens
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "var(--spacing-l)",
            }}
          >
            {/* Colors */}
            <div
              style={{
                padding: "var(--spacing-xl)",
                backgroundColor: "var(--color-background-surface)",
                borderRadius: "var(--radius-s)",
              }}
            >
              <h3
                className="font-mono"
                style={{
                  fontSize: "var(--text-size-small)",
                  color: "var(--color-text-primary)",
                  marginBottom: "var(--spacing-m)",
                }}
              >
                Colors
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-xs)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-xs)" }}>
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "var(--color-text-primary)",
                      borderRadius: "var(--radius-xs)",
                    }}
                  />
                  <span
                    className="font-mono"
                    style={{ fontSize: "var(--text-size-xsmall)", color: "var(--color-text-secondary)" }}
                  >
                    Primary Text
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-xs)" }}>
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "var(--color-text-accent)",
                      borderRadius: "var(--radius-xs)",
                    }}
                  />
                  <span
                    className="font-mono"
                    style={{ fontSize: "var(--text-size-xsmall)", color: "var(--color-text-secondary)" }}
                  >
                    Accent
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--spacing-xs)" }}>
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: "var(--color-background-surface)",
                      border: "1px solid var(--color-background-hover)",
                      borderRadius: "var(--radius-xs)",
                    }}
                  />
                  <span
                    className="font-mono"
                    style={{ fontSize: "var(--text-size-xsmall)", color: "var(--color-text-secondary)" }}
                  >
                    Surface
                  </span>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div
              style={{
                padding: "var(--spacing-xl)",
                backgroundColor: "var(--color-background-surface)",
                borderRadius: "var(--radius-s)",
              }}
            >
              <h3
                className="font-mono"
                style={{
                  fontSize: "var(--text-size-small)",
                  color: "var(--color-text-primary)",
                  marginBottom: "var(--spacing-m)",
                }}
              >
                Typography
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-xs)" }}>
                <p
                  className="font-sans"
                  style={{
                    fontSize: "var(--text-size-large)",
                    lineHeight: "var(--text-line-large)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  Large
                </p>
                <p
                  className="font-sans"
                  style={{
                    fontSize: "var(--text-size-small)",
                    lineHeight: "var(--text-line-small)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  Small
                </p>
                <p
                  className="font-mono"
                  style={{
                    fontSize: "var(--text-size-xsmall)",
                    lineHeight: "var(--text-line-xsmall)",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  XSmall Mono
                </p>
              </div>
            </div>

            {/* Spacing */}
            <div
              style={{
                padding: "var(--spacing-xl)",
                backgroundColor: "var(--color-background-surface)",
                borderRadius: "var(--radius-s)",
              }}
            >
              <h3
                className="font-mono"
                style={{
                  fontSize: "var(--text-size-small)",
                  color: "var(--color-text-primary)",
                  marginBottom: "var(--spacing-m)",
                }}
              >
                Spacing Scale
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-xs)" }}>
                {["xxs", "xs", "s", "m", "l", "xl"].map((size) => (
                  <div key={size} style={{ display: "flex", alignItems: "center", gap: "var(--spacing-xs)" }}>
                    <div
                      style={{
                        width: `var(--spacing-${size})`,
                        height: "16px",
                        backgroundColor: "var(--color-text-accent)",
                        borderRadius: "var(--radius-xs)",
                      }}
                    />
                    <span
                      className="font-mono"
                      style={{ fontSize: "var(--text-size-xsmall)", color: "var(--color-text-secondary)" }}
                    >
                      {size}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: "var(--spacing-xl) var(--spacing-xxxl)",
          borderTop: "1px solid var(--color-background-hover)",
          textAlign: "center",
        }}
      >
        <p
          className="font-mono"
          style={{
            fontSize: "var(--text-size-xsmall)",
            color: "var(--color-text-secondary)",
          }}
        >
          Built with design tokens only • No external libraries • No hardcoded colors
        </p>
      </footer>
    </div>
  )
}
