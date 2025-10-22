import Image from "next/image"
import { Button } from "@/components/Button/Button"
import { Menu } from "@/components/Menu/Menu"
import { MenuItem } from "@/components/MenuItem/MenuItem"
import TailorHubLogo from "@/assets/logos/tailor-hub-logo.jpg"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Menu */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={TailorHubLogo || "/placeholder.svg"}
                alt="Tailor Hub"
                width={45}
                height={40}
                className="object-contain"
              />
              <h1 className="text-xl font-semibold">Tailor Hub</h1>
            </div>

            <Menu variant="starter">
              <MenuItem href="#" isSelected>
                Home
              </MenuItem>
              <MenuItem href="#components">Components</MenuItem>
              <MenuItem href="#tokens">Tokens</MenuItem>
              <MenuItem href="#docs">Docs</MenuItem>
            </Menu>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-5xl font-bold text-balance">Design System for Modern Applications</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            A comprehensive design system built with design tokens, reusable components, and best practices for building
            consistent user interfaces.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button>Get Started</Button>
            <Button>View Components</Button>
          </div>
        </div>

        {/* Components Showcase */}
        <section id="components" className="mt-24 space-y-12">
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-bold">Components</h3>
            <p className="text-muted-foreground">Built with design tokens for consistency and flexibility</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Button Showcase */}
            <div className="border border-border rounded-lg p-6 space-y-4">
              <h4 className="text-xl font-semibold">Button</h4>
              <p className="text-sm text-muted-foreground">Primary action button with consistent styling</p>
              <div className="flex gap-3 flex-wrap">
                <Button>Primary Button</Button>
                <Button disabled>Disabled</Button>
              </div>
            </div>

            {/* Menu Showcase */}
            <div className="border border-border rounded-lg p-6 space-y-4">
              <h4 className="text-xl font-semibold">Menu</h4>
              <p className="text-sm text-muted-foreground">Navigation menu with starter and scrolling variants</p>
              <Menu variant="starter">
                <MenuItem href="#" isSelected>
                  Active
                </MenuItem>
                <MenuItem href="#">Link</MenuItem>
                <MenuItem href="#">Link</MenuItem>
              </Menu>
            </div>
          </div>
        </section>

        {/* Design Tokens */}
        <section id="tokens" className="mt-24 space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-bold">Design Tokens</h3>
            <p className="text-muted-foreground">Primitives, semantics, and component tokens for consistent design</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="border border-border rounded-lg p-6 space-y-2">
              <h4 className="font-semibold">Primitives</h4>
              <p className="text-sm text-muted-foreground">Base colors, spacing, and typography values</p>
            </div>
            <div className="border border-border rounded-lg p-6 space-y-2">
              <h4 className="font-semibold">Semantics</h4>
              <p className="text-sm text-muted-foreground">Contextual tokens for backgrounds, text, and borders</p>
            </div>
            <div className="border border-border rounded-lg p-6 space-y-2">
              <h4 className="font-semibold">Components</h4>
              <p className="text-sm text-muted-foreground">Component-specific tokens for buttons, menus, and more</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-24">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>Tailor Hub Design System © 2025</p>
        </div>
      </footer>
    </div>
  )
}
