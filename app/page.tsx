'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/Button/Button"
import { Menu } from "@/components/Menu/Menu"
import { MenuItem } from "@/components/MenuItem/MenuItem"
import { TailorHubLogo, TailorHubLogoWithName } from "@/assets/logos"

export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Menu - Sticky with scroll detection */}
      <header className="sticky top-0 z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <TailorHubLogo size="small" aria-label="Tailor Hub" />
              <h1 className="text-xl font-semibold" style={{ fontFamily: 'var(--font-tech)' }}>Tailor Hub</h1>
            </div>

            <Menu variant={isScrolled ? 'scrolling' : 'starter'}>
              <MenuItem href="#hero" isSelected>
                Home
              </MenuItem>
              <MenuItem href="#components">Components</MenuItem>
              <MenuItem href="#tokens">Tokens</MenuItem>
              <MenuItem href="#logos">Logos</MenuItem>
            </Menu>
          </div>
        </div>
      </header>

      {/* Hero Section with Large Logo */}
      <section id="hero" className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center">
            <TailorHubLogo size="large" aria-label="Tailor Hub" />
          </div>
          <h2 className="text-5xl font-bold">Design System for Modern Applications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive design system built with design tokens, reusable components, and best practices for building
            consistent user interfaces.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button variant="primary">Get Started</Button>
            <Button variant="primary">View Components</Button>
          </div>
        </div>
      </section>

      {/* Components Showcase */}
      <section id="components" className="container mx-auto px-4 py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-2">
            <h3 className="text-4xl font-bold">Components</h3>
            <p className="text-lg text-muted-foreground">Built with design tokens for consistency and flexibility</p>
          </div>

          {/* Button Component Showcase */}
          <div className="space-y-6">
            <div className="border border-border rounded-lg bg-card p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-semibold mb-2">Button</h4>
                  <p className="text-muted-foreground">Primary action button with hover and disabled states</p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-3" style={{ fontFamily: 'var(--font-tech)' }}>States:</p>
                    <div className="flex gap-4 flex-wrap items-center">
                      <div className="space-y-2">
                        <Button variant="primary">Default</Button>
                        <p className="text-xs text-muted-foreground">Default state</p>
                      </div>
                      <div className="space-y-2">
                        <Button variant="primary" disabled>Disabled</Button>
                        <p className="text-xs text-muted-foreground">Disabled state</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-tech)' }}>Design Tokens:</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="font-mono">padding: var(--spacing-xs, 8px)</div>
                      <div className="font-mono">gap: var(--spacing-xsm, 10px)</div>
                      <div className="font-mono">border-radius: var(--radius-xs, 8px)</div>
                      <div className="font-mono">font: var(--font-tech)</div>
                      <div className="font-mono">bg: var(--color-neutral-100)</div>
                      <div className="font-mono">text: var(--color-neutral-600)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Menu & MenuItem Components Showcase */}
          <div className="space-y-6">
            <div className="border border-border rounded-lg bg-card p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-semibold mb-2">Menu & MenuItem</h4>
                  <p className="text-muted-foreground">Navigation menu with variants and item states</p>
                </div>

                <div className="space-y-6">
                  {/* Menu Variants */}
                  <div className="space-y-4">
                    <p className="text-sm font-medium" style={{ fontFamily: 'var(--font-tech)' }}>Menu Variants:</p>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-background rounded">
                        <p className="text-xs mb-3 text-muted-foreground">Starter (Transparent)</p>
                        <Menu variant="starter">
                          <MenuItem href="#" isSelected>Home</MenuItem>
                          <MenuItem href="#">About</MenuItem>
                          <MenuItem href="#">Contact</MenuItem>
                        </Menu>
                      </div>

                      <div className="p-4 bg-background rounded">
                        <p className="text-xs mb-3 text-muted-foreground">Scrolling (With Background)</p>
                        <Menu variant="scrolling">
                          <MenuItem href="#" isSelected>Home</MenuItem>
                          <MenuItem href="#">About</MenuItem>
                          <MenuItem href="#">Contact</MenuItem>
                        </Menu>
                      </div>
                    </div>
                  </div>

                  {/* MenuItem States */}
                  <div className="space-y-4 pt-4 border-t border-border">
                    <p className="text-sm font-medium" style={{ fontFamily: 'var(--font-tech)' }}>MenuItem States:</p>
                    <div className="flex gap-6 flex-wrap">
                      <div className="space-y-2">
                        <MenuItem href="#">Default</MenuItem>
                        <p className="text-xs text-muted-foreground">color: #362C2C</p>
                      </div>
                      <div className="space-y-2">
                        <MenuItem href="#" style={{ color: 'var(--color-text-hover)' }}>Hover</MenuItem>
                        <p className="text-xs text-muted-foreground">color: #D4D4D4</p>
                      </div>
                      <div className="space-y-2">
                        <MenuItem href="#" isSelected>Selected</MenuItem>
                        <p className="text-xs text-muted-foreground">color: #2C54FF</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-tech)' }}>Design Tokens:</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="font-mono">padding: var(--spacing-m, 16px)</div>
                      <div className="font-mono">gap: var(--spacing-xl, 32px)</div>
                      <div className="font-mono">border-radius: var(--radius-s, 16px)</div>
                      <div className="font-mono">font: var(--font-tech)</div>
                      <div className="font-mono">text: var(--menu-color-text)</div>
                      <div className="font-mono">selected: var(--color-text-accent)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Showcase */}
      <section id="logos" className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h3 className="text-4xl font-bold">Logo Components</h3>
            <p className="text-lg text-muted-foreground">Scalable logo components with consistent styling</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* TailorHubLogo */}
            <div className="border border-border rounded-lg bg-card p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-semibold mb-2">TailorHubLogo</h4>
                  <p className="text-muted-foreground">Logo mark (icon only)</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-end gap-8 p-6 bg-background rounded justify-center">
                    <div className="text-center space-y-2">
                      <TailorHubLogo size="small" />
                      <p className="text-xs text-muted-foreground">Small (49px)</p>
                    </div>
                    <div className="text-center space-y-2">
                      <TailorHubLogo size="large" />
                      <p className="text-xs text-muted-foreground">Large (201px)</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-tech)' }}>Design Tokens:</p>
                    <div className="space-y-1 text-xs">
                      <div className="font-mono">size.small: var(--logo-size-small, 49px)</div>
                      <div className="font-mono">size.large: var(--logo-size-large, 201px)</div>
                      <div className="font-mono">color: var(--logo-color-primary)</div>
                      <div className="font-mono text-muted-foreground">  → var(--menu-color-text)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TailorHubLogoWithName */}
            <div className="border border-border rounded-lg bg-card p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-semibold mb-2">TailorHubLogoWithName</h4>
                  <p className="text-muted-foreground">Logo with company name</p>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-col items-center gap-8 p-6 bg-background rounded">
                    <div className="text-center space-y-2">
                      <TailorHubLogoWithName size="small" />
                      <p className="text-xs text-muted-foreground">Small (49px)</p>
                    </div>
                    <div className="text-center space-y-2">
                      <TailorHubLogoWithName size="large" />
                      <p className="text-xs text-muted-foreground">Large (201px)</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2" style={{ fontFamily: 'var(--font-tech)' }}>Usage in Menu:</p>
                    <div className="p-4 bg-background rounded">
                      <div className="flex items-center gap-4">
                        <TailorHubLogoWithName size="small" />
                        <Menu variant="scrolling">
                          <MenuItem href="#">Home</MenuItem>
                          <MenuItem href="#">About</MenuItem>
                        </Menu>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Tokens Overview */}
      <section id="tokens" className="container mx-auto px-4 py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h3 className="text-4xl font-bold">Design Tokens</h3>
            <p className="text-lg text-muted-foreground">Three-tier token structure for consistent design</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-border rounded-lg bg-card p-6 space-y-4">
              <h4 className="text-xl font-semibold">Primitives</h4>
              <p className="text-sm text-muted-foreground">Base design values</p>
              <ul className="space-y-2 text-sm font-mono">
                <li>• Colors (neutral, blue)</li>
                <li>• Spacing (xs to 8xl)</li>
                <li>• Typography (sizes, fonts)</li>
                <li>• Border radius (xs, s)</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg bg-card p-6 space-y-4">
              <h4 className="text-xl font-semibold">Semantics</h4>
              <p className="text-sm text-muted-foreground">Contextual token mappings</p>
              <ul className="space-y-2 text-sm font-mono">
                <li>• color.text.primary</li>
                <li>• color.text.secondary</li>
                <li>• color.text.accent</li>
                <li>• color.background.*</li>
              </ul>
            </div>

            <div className="border border-border rounded-lg bg-card p-6 space-y-4">
              <h4 className="text-xl font-semibold">Components</h4>
              <p className="text-sm text-muted-foreground">Component-specific tokens</p>
              <ul className="space-y-2 text-sm font-mono">
                <li>• component.button.*</li>
                <li>• component.menu.*</li>
                <li>• component.logo.*</li>
              </ul>
            </div>
          </div>

          <div className="border border-border rounded-lg bg-card p-8 space-y-4">
            <h4 className="text-xl font-semibold">Token Chain Example</h4>
            <div className="font-mono text-sm space-y-2 text-muted-foreground">
              <p className="text-foreground">component.logo.color.primary</p>
              <p className="pl-4">→ component.menu.color.text</p>
              <p className="pl-8">→ color.text.primary</p>
              <p className="pl-12">→ color.neutral.900</p>
              <p className="pl-16">→ #362C2C</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <TailorHubLogo size="small" />
              <span className="text-sm text-muted-foreground">Tailor Hub Design System</span>
            </div>
            <div className="flex gap-6">
              <a href="#components" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Components
              </a>
              <a href="#tokens" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Tokens
              </a>
              <a href="#logos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Logos
              </a>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 Tailor Hub</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
