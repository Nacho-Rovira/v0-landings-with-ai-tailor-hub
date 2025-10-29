import { LandingLayout } from "@/components/LandingLayout/LandingLayout"
import { HighlightSection } from "@/components/HighlightSection/HighlightSection"
import { HeaderBox } from "@/components/HeaderBox/HeaderBox"
import { BodyText } from "@/components/BodyText/BodyText"
import { MenuSidebar, MenuSidebarItem } from "@/components/MenuSidebar/MenuSidebar"
import { TitleSection } from "@/components/TitleSection/TitleSection"
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
            src="/images/design-mode/Tailor%20hub%20image%2001.png"
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

      {/* Proposal Details Section */}
      <section style={{ marginBottom: "var(--spacing-8xl)" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "var(--spacing-xxl)",
            width: "100%",
          }}
        >
          {/* Menu Sidebar */}
          <MenuSidebar>
            <MenuSidebarItem href="#challenge" number={1}>
              THE CHALLENGE
            </MenuSidebarItem>
            <MenuSidebarItem href="#solution" number={2}>
              THE SOLUTION
            </MenuSidebarItem>
            <MenuSidebarItem href="#approach" number={3} isActive>
              THE APPROACH
            </MenuSidebarItem>
            <MenuSidebarItem href="#results" number={4}>
              RESULTS
            </MenuSidebarItem>
            <MenuSidebarItem href="#timeline" number={5}>
              TIMELINE
            </MenuSidebarItem>
            <MenuSidebarItem href="#team" number={6}>
              TEAM
            </MenuSidebarItem>
          </MenuSidebar>

          {/* Body Content */}
          <div style={{ flex: 1, maxWidth: "702px" }}>
            <BodyText
              sections={[
                {
                  title: "THE CHALLENGE",
                  paragraphs: [
                    "Transform raw and hardly accessible data into actionable intelligence. With advanced AI models, we help you uncover patterns, predict outcomes, and drive smarter decision-making at every level of your organization.",
                    "The complexity of modern data landscapes requires sophisticated approaches. Traditional methods fall short when dealing with unstructured data, real-time analytics, and predictive modeling needs.",
                  ],
                },
                {
                  title: "THE SOLUTION",
                  paragraphs: [
                    "Our comprehensive AI-driven platform integrates seamlessly with your existing infrastructure, providing powerful analytics capabilities without disrupting your current workflows.",
                    "Leveraging cutting-edge machine learning algorithms, we transform data chaos into clear, actionable insights that drive measurable business outcomes.",
                  ],
                },
                {
                  title: "THE APPROACH",
                  paragraphs: [
                    "We follow a systematic methodology that ensures successful implementation from discovery through deployment and optimization. Our approach combines technical excellence with deep understanding of business requirements.",
                    "Each phase is carefully planned and executed, with continuous feedback loops to ensure alignment with your strategic objectives and operational constraints.",
                  ],
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section style={{ marginBottom: "var(--spacing-8xl)" }}>
        <TitleSection overheader="OUR CLIENTS" />
        <div
          style={{
            marginTop: "var(--spacing-xl)",
            overflowX: "auto",
            overflowY: "hidden",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "thin",
            scrollbarColor: "var(--color-neutral-300) transparent",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "var(--spacing-2xl)",
              paddingBottom: "var(--spacing-md)",
              minWidth: "min-content",
              alignItems: "center",
            }}
          >
            <div style={{ flexShrink: 0, height: "60px", display: "flex", alignItems: "center" }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UVDzNdU8pSOeEhRyv2S2RwBsrFgzLY.png"
                alt="Audi"
                width={120}
                height={60}
                style={{ width: "auto", height: "60px", objectFit: "contain" }}
              />
            </div>
            <div style={{ flexShrink: 0, height: "60px", display: "flex", alignItems: "center" }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HkjeEkMnx5IDoIkznNJrv3qYhUsm4V.png"
                alt="IBERIA"
                width={150}
                height={60}
                style={{ width: "auto", height: "60px", objectFit: "contain" }}
              />
            </div>
            <div style={{ flexShrink: 0, height: "60px", display: "flex", alignItems: "center" }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YdeTq7fRQfhpgWTr9b8rxl9dgL04Cc.png"
                alt="Santander"
                width={150}
                height={60}
                style={{ width: "auto", height: "60px", objectFit: "contain" }}
              />
            </div>
            <div style={{ flexShrink: 0, height: "60px", display: "flex", alignItems: "center" }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0j9B8DRkm8nLrKy6nzGAw5OOUPAuLt.png"
                alt="ELECTROMAPS"
                width={180}
                height={60}
                style={{ width: "auto", height: "60px", objectFit: "contain" }}
              />
            </div>
            <div style={{ flexShrink: 0, height: "60px", display: "flex", alignItems: "center" }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UFEfH6rMrO3mXXg1S9dgtX95B6TE49.png"
                alt="clikalia"
                width={120}
                height={60}
                style={{ width: "auto", height: "60px", objectFit: "contain" }}
              />
            </div>
            <div style={{ flexShrink: 0, height: "60px", display: "flex", alignItems: "center" }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2jePxrcfEuXTozMKoPS4RqNFopr8xJ.png"
                alt="dormakaba"
                width={180}
                height={60}
                style={{ width: "auto", height: "60px", objectFit: "contain" }}
              />
            </div>
            <div style={{ flexShrink: 0, height: "60px", display: "flex", alignItems: "center" }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kZ9nc81RDykGGbHk2ngt4OfQIF7TvQ.png"
                alt="Cargill"
                width={120}
                height={60}
                style={{ width: "auto", height: "60px", objectFit: "contain" }}
              />
            </div>
            <div style={{ flexShrink: 0, height: "60px", display: "flex", alignItems: "center" }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u0aOyzLlmkr0o4r5LZHDeV7ViK8QTz.png"
                alt="MIT media lab"
                width={120}
                height={60}
                style={{ width: "auto", height: "60px", objectFit: "contain" }}
              />
            </div>
            <div style={{ flexShrink: 0, height: "60px", display: "flex", alignItems: "center" }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dq9im5kPcSkrP4pFlHp6Lhui617S6a.png"
                alt="GRUPMEDIAPRO"
                width={150}
                height={60}
                style={{ width: "auto", height: "60px", objectFit: "contain" }}
              />
            </div>
            <div style={{ flexShrink: 0, height: "60px", display: "flex", alignItems: "center" }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h4hJVPhv503O5CCpwEFfd88CcKbSO2.png"
                alt="INDITEX"
                width={120}
                height={60}
                style={{ width: "auto", height: "60px", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 1 */}

      {/* Placeholder Content Sections */}
      <section style={{ marginBottom: "var(--spacing-8xl)" }}></section>

      <section style={{ marginBottom: "var(--spacing-8xl)" }}></section>

      <section style={{ marginBottom: "var(--spacing-8xl)" }}></section>

      {/* CTA Section */}
    </LandingLayout>
  )
}
