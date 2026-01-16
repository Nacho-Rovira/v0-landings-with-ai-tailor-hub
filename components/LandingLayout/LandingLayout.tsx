"use client"

import { type ReactNode, useState, useEffect } from "react"
import { Header } from "@/components/Header/Header"
import { Footer } from "@/components/Footer/Footer"
import "./LandingLayout.css"

interface LandingLayoutProps {
  children: ReactNode
  /** Concept items to display in header on mobile */
  concepts?: string[]
}

export function LandingLayout({ children, concepts }: LandingLayoutProps) {
  const [headerVariant, setHeaderVariant] = useState<"starter" | "scrolling" | "mobile">("starter")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      if (mobile) {
        setHeaderVariant("mobile")
      } else {
        setHeaderVariant(window.scrollY > 100 ? "scrolling" : "starter")
      }
    }

    const handleScroll = () => {
      if (!isMobile) {
        setHeaderVariant(window.scrollY > 100 ? "scrolling" : "starter")
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isMobile])

  const getPaddingTop = () => {
    if (headerVariant === "mobile") {
      // Mobile header height: logo bar (~97px) + concepts row (~60px) + extra spacing
      const hasConceptsOnMobile = concepts && concepts.length > 0
      return hasConceptsOnMobile ? "180px" : "120px"
    }
    if (headerVariant === "starter") {
      return "201px"
    }
    return "var(--spacing-xxl)"
  }

  return (
    <div className="landing-layout">
      {/* Fixed Header */}
      <div className="landing-layout__header">
        <Header variant={headerVariant} concepts={concepts} />
      </div>

      {/* Main Content Container */}
      <main
        className="landing-layout__main"
        style={{
          paddingTop: getPaddingTop(),
        }}
      >
        <div className="landing-layout__container">{children}</div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
