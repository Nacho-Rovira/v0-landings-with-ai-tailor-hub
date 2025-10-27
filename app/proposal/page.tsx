"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/Header/Header"
import { Footer } from "@/components/Footer/Footer"
import { TitleSection } from "@/components/TitleSection/TitleSection"
import { BodyText } from "@/components/BodyText/BodyText"
import { Card } from "@/components/Card/Card"
import { HeaderBox } from "@/components/HeaderBox/HeaderBox"
import { Button } from "@/components/Button/Button"

export default function ProposalPage() {
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
          paddingTop: headerVariant === "starter" ? "201px" : "var(--spacing-xxl)",
          transition: "padding-top 0.3s ease",
        }}
      >
        {/* Who is Tailor Hub Section */}
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
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-6xl)",
            }}
          >
            <TitleSection
              overheader="ABOUT US"
              title="WHO IS TAILOR HUB"
              subtitle="Elite Software Engineering & AI Development"
            />

            <BodyText
              sections={[
                {
                  title: "OUR COMPANY",
                  paragraphs: [
                    "Tailor Hub is a Madrid-based global company specializing in cutting-edge software engineering and artificial intelligence development. As a proud member of the Modulos Studio Group, we bring together an elite team of software engineers dedicated to delivering exceptional digital solutions.",
                    "We believe in giving our teams the autonomy to work wherever they want, delivering the best outcomes through flexibility and innovation. Our expertise spans development labs, AI integration, and sophisticated design systems.",
                  ],
                },
              ]}
            />
          </div>
        </section>

        {/* Problem / Solution Section */}
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
            <TitleSection overheader="CHALLENGE" title="THE PROBLEM" />

            <BodyText
              sections={[
                {
                  title: "CURRENT CHALLENGES",
                  paragraphs: [
                    "Modern businesses face increasing complexity in their digital transformation journey. Legacy systems, fragmented tools, and lack of cohesive design systems create inefficiencies and slow down innovation.",
                    "Teams struggle with inconsistent user experiences, technical debt, and the challenge of integrating AI capabilities into existing workflows. The gap between design and development continues to widen, resulting in longer time-to-market and higher costs.",
                  ],
                },
              ]}
            />

            <div style={{ marginTop: "var(--spacing-xl)" }}>
              <TitleSection overheader="SOLUTION" title="OUR APPROACH" />
            </div>

            <BodyText
              sections={[
                {
                  title: "COMPREHENSIVE SOLUTION",
                  paragraphs: [
                    "Tailor Hub delivers end-to-end solutions that bridge the gap between design and development. Our comprehensive design systems, built with reusable components and design tokens, ensure consistency across all touchpoints.",
                    "We integrate AI-powered automation to accelerate development cycles, reduce manual work, and enable intelligent decision-making. Our approach combines technical excellence with creative innovation, delivering scalable solutions that grow with your business.",
                  ],
                },
              ]}
            />
          </div>
        </section>

        {/* Case Grid Section */}
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
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-6xl)",
            }}
          >
            <TitleSection overheader="OUR WORK" title="CASE STUDIES" subtitle="Recent projects and success stories" />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                gap: "var(--spacing-xl)",
              }}
            >
              <Card
                category="FINTECH"
                title="PAYMENT PLATFORM REDESIGN"
                imageSrc="/fintech-payment-processing.jpg"
                imageAlt="Fintech payment processing interface"
              />

              <Card
                category="AI & AUTOMATION"
                title="INTELLIGENT DASHBOARD SYSTEM"
                imageSrc="/fintech-risk-management-dashboard.jpg"
                imageAlt="AI-powered dashboard"
              />

              <Card
                category="DESIGN SYSTEM"
                title="ENTERPRISE COMPONENT LIBRARY"
                imageSrc="/design-system-components.png"
                imageAlt="Design system components"
              />

              <Card
                category="E-COMMERCE"
                title="CUSTOMER EXPERIENCE PLATFORM"
                imageSrc="/fintech-customer-dashboard.jpg"
                imageAlt="Customer experience platform"
              />

              <Card
                category="SOFTWARE DEVELOPMENT"
                title="DEVELOPMENT LABS SOLUTION"
                imageSrc="/software-development-workspace.png"
                imageAlt="Software development workspace"
              />

              <Card
                category="ARTIFICIAL INTELLIGENCE"
                title="NEURAL NETWORK INTEGRATION"
                imageSrc="/ai-neural-network.png"
                imageAlt="AI neural network visualization"
              />
            </div>
          </div>
        </section>

        {/* Team / Timeline Section */}
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
            <TitleSection overheader="EXECUTION" title="TEAM & TIMELINE" />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "var(--spacing-xxxl)",
              }}
            >
              {/* Team Section */}
              <div>
                <BodyText
                  sections={[
                    {
                      title: "OUR TEAM",
                      paragraphs: [
                        "An elite team of software engineers with expertise across React, TypeScript, Next.js, and AI frameworks.",
                        "Dedicated project manager ensuring seamless communication and timely delivery.",
                        "UX/UI designers specializing in design systems and component libraries.",
                        "AI specialists focused on intelligent automation and machine learning integration.",
                      ],
                    },
                  ]}
                />
              </div>

              {/* Timeline Section */}
              <div>
                <BodyText
                  sections={[
                    {
                      title: "PROJECT TIMELINE",
                      paragraphs: [
                        "Week 1-2: Discovery & Planning - Requirements gathering, technical architecture, and design system setup.",
                        "Week 3-6: Development Phase - Component library creation, AI integration, and core functionality implementation.",
                        "Week 7-8: Testing & Refinement - Quality assurance, performance optimization, and user acceptance testing.",
                        "Week 9-10: Deployment & Handoff - Production deployment, documentation, and team training.",
                      ],
                    },
                  ]}
                />
              </div>
            </div>

            <HeaderBox
              header="We are a Madrid-based global company. We believe giving our teams the autonomy to work wherever they want delivers the best outcomes."
              cta="JOIN OUR TEAM"
              ctaHref="https://tally.so/r/wopD8P"
            />
          </div>
        </section>

        {/* Final CTA Section */}
        <section
          style={{
            padding: "var(--spacing-8xl) var(--spacing-6xl)",
            backgroundColor: "var(--color-background-default)",
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
              alignItems: "center",
            }}
          >
            <TitleSection
              overheader="LET'S START"
              title="READY TO TRANSFORM YOUR DIGITAL PRESENCE?"
              subtitle="Contact us to discuss your project and receive a detailed proposal"
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-l)",
                fontFamily: "var(--font-default)",
                fontSize: "var(--text-size-medium)",
                color: "var(--color-text-primary)",
                textAlign: "left",
                width: "100%",
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
                marginTop: "var(--spacing-xl)",
              }}
            >
              <Button onClick={() => window.open("mailto:SALES@TAILOR-HUB.COM")}>EMAIL US</Button>
              <Button onClick={() => window.open("tel:+34682270526")}>CALL US</Button>
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
