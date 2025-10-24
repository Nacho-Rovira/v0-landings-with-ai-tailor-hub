"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/Header/Header"
import { Footer } from "@/components/Footer/Footer"
import { TitleSection } from "@/components/TitleSection/TitleSection"
import { BodyText } from "@/components/BodyText/BodyText"
import { Card } from "@/components/Card/Card"
import { HighlightSection } from "@/components/HighlightSection/HighlightSection"
import { Button } from "@/components/Button/Button"

export default function TailorHubOverview() {
  const [headerVariant, setHeaderVariant] = useState<"starter" | "scrolling">("starter")

  useEffect(() => {
    const handleScroll = () => {
      setHeaderVariant(window.scrollY > 100 ? "scrolling" : "starter")
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Fixed Header */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.3s ease",
        }}
      >
        <Header variant={headerVariant} />
      </div>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          paddingTop: headerVariant === "starter" ? "201px" : "49px",
          transition: "padding-top 0.3s ease",
        }}
      >
        {/* Hero Section */}
        <section
          style={{
            padding: "var(--spacing-8xl) var(--spacing-6xl)",
            backgroundColor: "var(--color-background-default)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--spacing-xxxl)",
          }}
        >
          <TitleSection
            overheader="COMPANY OVERVIEW"
            title="TAILOR HUB"
            subtitle="Elite Software Engineering & AI Development"
          />

          <BodyText
            sections={[
              {
                title: "WHO WE ARE",
                paragraphs: [
                  "Tailor Hub is a Madrid-based global company specializing in cutting-edge software engineering and artificial intelligence development. As a proud member of the Modulos Studio Group, we bring together an elite team of software engineers dedicated to delivering exceptional digital solutions.",
                  "Our expertise spans across development labs, AI integration, and creating sophisticated landing pages with intelligent automation. We combine technical excellence with creative innovation to help businesses transform their digital presence.",
                ],
              },
            ]}
          />

          <div style={{ marginTop: "var(--spacing-xl)" }}>
            <Button onClick={() => window.open("https://tally.so/r/wopD8P", "_blank")}>GET IN TOUCH</Button>
          </div>
        </section>

        {/* Services Section */}
        <section
          style={{
            padding: "var(--spacing-8xl) var(--spacing-6xl)",
            backgroundColor: "var(--color-background-surface)",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-6xl)",
            }}
          >
            <TitleSection overheader="WHAT WE DO" title="OUR SERVICES" />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "var(--spacing-xl)",
              }}
            >
              <Card
                title="DEVELOPMENT LABS"
                description="Custom software development with cutting-edge technologies. We build scalable, maintainable solutions tailored to your business needs."
                imageSrc="/software-development-workspace.png"
              />

              <Card
                title="ARTIFICIAL INTELLIGENCE"
                description="AI-powered solutions that transform how businesses operate. From machine learning to intelligent automation, we bring AI to life."
                imageSrc="/ai-neural-network.png"
              />

              <Card
                title="DESIGN SYSTEMS"
                description="Comprehensive design systems with reusable components and design tokens. Build consistent, accessible interfaces at scale."
                imageSrc="/design-system-components.png"
              />
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section
          style={{
            padding: "var(--spacing-8xl) var(--spacing-6xl)",
            backgroundColor: "var(--color-background-default)",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <HighlightSection
              title="TECHNOLOGY STACK"
              description="We leverage modern technologies to build robust, scalable solutions. Our tech stack includes React, TypeScript, Next.js, and advanced AI frameworks, all integrated with comprehensive design systems and best practices."
            />

            <BodyText
              sections={[
                {
                  title: "CORE TECHNOLOGIES",
                  paragraphs: [
                    "React 18+ for building dynamic user interfaces with the latest features and performance optimizations.",
                    "TypeScript for type-safe development, reducing bugs and improving code maintainability.",
                    "Next.js for server-side rendering, static site generation, and optimal performance.",
                    "Design Tokens following W3C DTCG format for consistent, scalable design systems.",
                  ],
                },
                {
                  title: "AI & AUTOMATION",
                  paragraphs: [
                    "Integration with V0 for AI-powered landing page generation and intelligent design assistance.",
                    "Custom AI models for business-specific automation and intelligent decision-making.",
                    "Machine learning pipelines for data analysis and predictive modeling.",
                  ],
                },
              ]}
            />
          </div>
        </section>

        {/* Contact Section */}
        <section
          style={{
            padding: "var(--spacing-8xl) var(--spacing-6xl)",
            backgroundColor: "var(--color-background-surface)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-xxxl)",
            }}
          >
            <TitleSection
              overheader="GET IN TOUCH"
              title="LET'S BUILD SOMETHING AMAZING"
              subtitle="Contact us to discuss your project"
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-l)",
                fontFamily: "var(--font-default)",
                fontSize: "var(--text-size-medium)",
                color: "var(--color-text-primary)",
              }}
            >
              <div>
                <strong>EMAIL:</strong> SALES@TAILOR-HUB.COM
              </div>
              <div>
                <strong>PHONE:</strong> +34 682 270 526
              </div>
              <div>
                <strong>ADDRESS:</strong>
                <br />
                CALLE HERMANOS ÁLVAREZ QUINTERO, 2,
                <br />
                SEMISÓTANO A, 28004 MADRID
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "var(--spacing-m)",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Button onClick={() => window.open("https://linkedin.com/company/tailor-hub", "_blank")}>LINKEDIN</Button>
              <Button onClick={() => window.open("https://instagram.com/tailor_hub", "_blank")}>INSTAGRAM</Button>
              <Button onClick={() => window.open("https://tally.so/r/wopD8P", "_blank")}>CONTACT FORM</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
