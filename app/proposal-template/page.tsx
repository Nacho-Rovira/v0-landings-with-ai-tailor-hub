import { LandingLayout } from "@/components/LandingLayout/LandingLayout"
import { HighlightSection } from "@/components/HighlightSection/HighlightSection"
import { HeaderBox } from "@/components/HeaderBox/HeaderBox"
import { BodyText } from "@/components/BodyText/BodyText"
import { Button } from "@/components/Button/Button"
import Image from "next/image"

export default function LayoutDemoPage() {
  return (
    <LandingLayout>
      {/* Highlight Section */}
      <section style={{ marginBottom: "var(--spacing-8xl)" }}>
        <HighlightSection
          concepts={[
            "AN ELITE TEAM OF <span> SOFTWARE ENGINEERS",
            "DEVELOPMENT <span> HUB",
            "ARTIFICIAL <span>INTELLIGENCE & DEV",
          ]}
          header="SOMOS COPILOTO TÉCNICO PARA DESARROLLAR UNA PLATAFORMA DE E-COMMERCE ESCALABLE"
        />
      </section>

      {/* HeaderBox Section */}
      <section style={{ marginBottom: "var(--spacing-8xl)" }}>
        <HeaderBox
          overheader="A PROPOSAL FOR REPSOL"
          header="Your technical copilot to develop a scalable e-commerce platform with AI-powered features and enterprise-grade infrastructure"
          buttonLabel="VIEW PROPOSAL"
          onButtonClick={() => {
            document.querySelector("#content")?.scrollIntoView({ behavior: "smooth" })
          }}
        />
      </section>

      {/* Hero Image Section */}
      <section style={{ marginBottom: "var(--spacing-8xl)" }}>
        <div
          style={{
            width: "100%",
            borderRadius: "var(--radius-s)",
            overflow: "hidden",
          }}
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tailor%20hub%20image%2001-N8H2Ie2JIDDlziqITakxD2LFyO5FIU.png"
            alt="Tailor Hub - Technical Development"
            width={1432}
            height={800}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
            priority
          />
        </div>
      </section>

      {/* Content Section 1 */}
      <section style={{ marginBottom: "var(--spacing-8xl)" }}>
        <div style={{ marginBottom: "var(--spacing-6xl)" }}>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--font-size-2xl)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--color-text-primary)",
              marginBottom: "var(--spacing-lg)",
            }}
          >
            LAYOUT SPECIFICATIONS
          </h2>
        </div>
        <BodyText
          sections={[
            {
              title: "CONTAINER WIDTH",
              paragraphs: [
                "The main container has a maximum width of 1432px, defined by the --width-header-max token. For screens larger than this, the container is centered horizontally.",
              ],
            },
            {
              title: "PADDING",
              paragraphs: [
                "Left and right padding is set to 40px using the --spacing-xxl token. This ensures consistent spacing on all screen sizes.",
              ],
            },
            {
              title: "STRUCTURE",
              paragraphs: [
                "The layout consists of three main sections: a fixed header that transitions between variants on scroll, the main content area where proposals are built, and a footer at the bottom.",
              ],
            },
          ]}
        />
      </section>

      {/* Placeholder Content Sections */}
      <section style={{ marginBottom: "var(--spacing-8xl)" }}>
        <div
          style={{
            padding: "var(--spacing-8xl)",
            backgroundColor: "var(--color-bg-secondary)",
            borderRadius: "var(--radius-card)",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--font-size-xl)",
              color: "var(--color-text-primary)",
              marginBottom: "var(--spacing-md)",
            }}
          >
            PLACEHOLDER SECTION 1
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--font-size-base)",
              color: "var(--color-text-secondary)",
              lineHeight: "var(--line-height-relaxed)",
            }}
          >
            This is where your proposal content would go. Add components like TitleSection, BodyText, Cards, or custom
            sections here.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: "var(--spacing-8xl)" }}>
        <div
          style={{
            padding: "var(--spacing-8xl)",
            backgroundColor: "var(--color-bg-secondary)",
            borderRadius: "var(--radius-card)",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--font-size-xl)",
              color: "var(--color-text-primary)",
              marginBottom: "var(--spacing-md)",
            }}
          >
            PLACEHOLDER SECTION 2
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--font-size-base)",
              color: "var(--color-text-secondary)",
              lineHeight: "var(--line-height-relaxed)",
              marginBottom: "var(--spacing-lg)",
            }}
          >
            Each section can contain different components and layouts. The container ensures everything stays within the
            1432px max width.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: "var(--spacing-8xl)" }}>
        <div
          style={{
            padding: "var(--spacing-8xl)",
            backgroundColor: "var(--color-bg-secondary)",
            borderRadius: "var(--radius-card)",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--font-size-xl)",
              color: "var(--color-text-primary)",
              marginBottom: "var(--spacing-md)",
            }}
          >
            PLACEHOLDER SECTION 3
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--font-size-base)",
              color: "var(--color-text-secondary)",
              lineHeight: "var(--line-height-relaxed)",
              marginBottom: "var(--spacing-lg)",
            }}
          >
            Scroll down to see the header transition from the starter variant to the scrolling variant.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          marginBottom: "var(--spacing-8xl)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "var(--font-size-2xl)",
            fontWeight: "var(--font-weight-medium)",
            color: "var(--color-text-primary)",
            marginBottom: "var(--spacing-6xl)",
          }}
        >
          READY TO BUILD YOUR PROPOSAL?
        </h2>
        <Button variant="primary">GET STARTED</Button>
      </section>
    </LandingLayout>
  )
}
