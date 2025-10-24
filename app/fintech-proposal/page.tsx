import { Header } from "@/components/Header/Header"
import { TitleSection } from "@/components/TitleSection/TitleSection"
import { HighlightSection } from "@/components/HighlightSection/HighlightSection"
import { BodyText } from "@/components/BodyText/BodyText"
import { Card } from "@/components/Card/Card"
import { HeaderBox } from "@/components/HeaderBox/HeaderBox"
import { Footer } from "@/components/Footer/Footer"

export default function FintechProposalPage() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-background-default)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Header variant="starter" />

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "var(--gap-section-section)",
          padding: "var(--spacing-xl) var(--spacing-m)",
        }}
      >
        {/* Hero Section */}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--gap-header-1)",
            maxWidth: "var(--width-header-max)",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <TitleSection
            overheader="FINTECH INNOVATION"
            title="Transform Your Financial Services with AI-Powered Solutions"
            paragraph="Tailor-Hub delivers cutting-edge SaaS platforms designed specifically for modern fintech companies. Scale faster, reduce costs, and enhance customer experience."
          />
        </section>

        {/* Problem Statement */}
        <section
          style={{
            maxWidth: "var(--width-header-max)",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <HighlightSection
            concepts={["COMPLIANCE", "SCALABILITY", "SECURITY", "AUTOMATION"]}
            header="Financial institutions face unprecedented challenges: regulatory complexity, legacy systems, and rising customer expectations. We solve these problems."
          />
        </section>

        {/* Solution Overview */}
        <section
          style={{
            maxWidth: "var(--width-header-max)",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <BodyText
            sections={[
              {
                title: "OUR APPROACH",
                paragraphs: [
                  "We combine deep fintech expertise with advanced AI and automation to deliver solutions that transform how financial services operate. Our platform integrates seamlessly with existing infrastructure while providing the flexibility to innovate rapidly.",
                  "From payment processing to risk management, our modular architecture allows you to deploy exactly what you need, when you need it. Built on secure, compliant foundations that meet global regulatory standards.",
                ],
              },
            ]}
          />
        </section>

        {/* Key Features - Cards */}
        <section
          style={{
            maxWidth: "var(--width-header-max)",
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--spacing-xl)",
          }}
        >
          <Card
            category="PAYMENT INFRASTRUCTURE"
            title="Real-Time Processing"
            imageSrc="/fintech-payment-processing.jpg"
            imageAlt="Payment processing dashboard"
          />
          <Card
            category="RISK & COMPLIANCE"
            title="AI-Powered Monitoring"
            imageSrc="/fintech-risk-management-dashboard.jpg"
            imageAlt="Risk management interface"
          />
          <Card
            category="CUSTOMER EXPERIENCE"
            title="Intelligent Automation"
            imageSrc="/fintech-customer-dashboard.jpg"
            imageAlt="Customer experience platform"
          />
        </section>

        {/* Benefits Section */}
        <section
          style={{
            maxWidth: "var(--width-header-max)",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <BodyText
            sections={[
              {
                title: "MEASURABLE IMPACT",
                paragraphs: [
                  "• Reduce operational costs by up to 40% through intelligent automation",
                  "• Process transactions 10x faster with our optimized infrastructure",
                  "• Achieve 99.99% uptime with enterprise-grade reliability",
                  "• Stay compliant with automated regulatory reporting across all jurisdictions",
                  "• Scale seamlessly from startup to enterprise without platform migration",
                ],
              },
            ]}
          />
        </section>

        {/* Social Proof / Trust */}
        <section
          style={{
            maxWidth: "var(--width-header-max)",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <HighlightSection
            concepts={["TRUSTED BY 50+ FINTECHS", "ISO 27001 CERTIFIED", "SOC 2 COMPLIANT"]}
            header="Join leading financial institutions who trust Tailor-Hub to power their digital transformation."
          />
        </section>

        {/* CTA Section */}
        <section
          style={{
            maxWidth: "var(--width-header-max)",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <HeaderBox
            overheader="GET STARTED TODAY"
            header="Ready to transform your fintech operations? Let's discuss how Tailor-Hub can accelerate your growth and reduce complexity."
            buttonLabel="SCHEDULE A DEMO"
            onButtonClick={() => console.log("[v0] Demo button clicked")}
          />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
