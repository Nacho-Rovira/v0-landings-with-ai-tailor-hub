"use client"

import { type ReactNode, useState, useEffect } from "react"
import { Header } from "@/components/Header/Header"
import { Footer } from "@/components/Footer/Footer"
import "./LandingLayout.css"

interface LandingLayoutProps {
  children: ReactNode
  /** Concept items to display below fixed header on mobile (scrolls with content) */
  concepts?: string[]
}

const renderConcept = (concept: string) => {
  const parts = concept.split("<span>")
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && <br />}
    </span>
  ))
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
      return "120px"
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
        <Header variant={headerVariant} />
      </div>

      {/* Main Content Container */}
      <main
        className="landing-layout__main"
        style={{
          paddingTop: getPaddingTop(),
        }}
      >
        {isMobile && concepts && concepts.length > 0 && (
          <div className="landing-layout__mobile-concepts">
            {concepts.map((concept, index) => (
              <span key={index} className="landing-layout__concept-item">
                {renderConcept(concept)}
              </span>
            ))}
          </div>
        )}
        <div className="landing-layout__container">{children}</div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
