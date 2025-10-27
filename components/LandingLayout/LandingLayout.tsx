"use client"

import { type ReactNode, useState, useEffect } from "react"
import { Header } from "@/components/Header/Header"
import { Footer } from "@/components/Footer/Footer"
import "./LandingLayout.css"

interface LandingLayoutProps {
  children: ReactNode
}

export function LandingLayout({ children }: LandingLayoutProps) {
  const [headerVariant, setHeaderVariant] = useState<"starter" | "scrolling">("starter")

  useEffect(() => {
    const handleScroll = () => {
      setHeaderVariant(window.scrollY > 100 ? "scrolling" : "starter")
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="landing-layout">
      {/* Fixed Header */}
      <div className="landing-layout__header">
        <Header variant={headerVariant} />
      </div>

      {/* Main Content Container */}
      <main
        className="landing-layout__main"
        style={{
          paddingTop: headerVariant === "starter" ? "201px" : "var(--spacing-xxl)",
        }}
      >
        <div className="landing-layout__container">{children}</div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
