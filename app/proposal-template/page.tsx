"use client"

import { LandingLayout } from "@/components/LandingLayout/LandingLayout"
import { HighlightSection } from "@/components/HighlightSection/HighlightSection"
import { HeaderBox } from "@/components/HeaderBox/HeaderBox"
import { BodyText } from "@/components/BodyText/BodyText"
import { MenuSidebar, MenuSidebarItem } from "@/components/MenuSidebar/MenuSidebar"
import { TitleSection } from "@/components/TitleSection/TitleSection"
import { Highlight2Section } from "@/components/Highlight2Section/Highlight2Section"
import { BoxSection } from "@/components/BoxSection/BoxSection"
import Image from "next/image"

export default function LayoutDemoPage() {
  const logos = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UVDzNdU8pSOeEhRyv2S2RwBsrFgzLY.png",
      alt: "Audi",
      width: 120,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-HkjeEkMnx5IDoIkznNJrv3qYhUsm4V.png",
      alt: "IBERIA",
      width: 150,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YdeTq7fRQfhpgWTr9b8rxl9dgL04Cc.png",
      alt: "Santander",
      width: 150,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0j9B8DRkm8nLrKy6nzGAw5OOUPAuLt.png",
      alt: "ELECTROMAPS",
      width: 180,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UFEfH6rMrO3mXXg1S9dgtX95B6TE49.png",
      alt: "clikalia",
      width: 120,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2jePxrcfEuXTozMKoPS4RqNFopr8xJ.png",
      alt: "dormakaba",
      width: 180,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kZ9nc81RDykGGbHk2ngt4OfQIF7TvQ.png",
      alt: "Cargill",
      width: 120,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-u0aOyzLlmkr0o4r5LZHDeV7ViK8QTz.png",
      alt: "MIT media lab",
      width: 120,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dq9im5kPcSkrP4pFlHp6Lhui617S6a.png",
      alt: "GRUPMEDIAPRO",
      width: 150,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h4hJVPhv503O5CCpwEFfd88CcKbSO2.png",
      alt: "INDITEX",
      width: 120,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RLEp8ScYU8zkcSjMnMlarh7RfRA14m.png",
      alt: "Cuimo",
      width: 120,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xNoRkoKf2zCZrGWFlW9L9YVrH6DsZG.png",
      alt: "obuu",
      width: 100,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ssUXofWoEx3sB5xxOZTRFE5AsTlIVp.png",
      alt: "El Corte Inglés",
      width: 150,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Zsqa7JNOYNjS4NWjjcKAIIqumQwPZs.png",
      alt: "Repsol",
      width: 140,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eGexZBhRAO6oo69idAbsCywcPFRu9Y.png",
      alt: "Volkswagen",
      width: 80,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dUNnqpyKvEd3q5gSmhohVhJLHcwVlW.png",
      alt: "Continental",
      width: 150,
    },
  ]

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
            position: "relative",
            overflow: "hidden",
            width: "100%",
          }}
        >
          {/* Gradient overlays for fade effect */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: "120px",
              background: "linear-gradient(to right, var(--color-bg-primary) 0%, transparent 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "120px",
              background: "linear-gradient(to left, var(--color-bg-primary) 0%, transparent 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* Animated carousel track */}
          <div
            style={{
              display: "flex",
              gap: "var(--spacing-2xl)",
              alignItems: "center",
              animation: "scroll 40s linear infinite",
              width: "max-content",
            }}
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                style={{
                  flexShrink: 0,
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={logo.width}
                  height={60}
                  style={{ width: "auto", height: "60px", objectFit: "contain" }}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                style={{
                  flexShrink: 0,
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={logo.width}
                  height={60}
                  style={{ width: "auto", height: "60px", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>

          {/* CSS animation keyframes */}
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>
        </div>
      </section>

      {/* Our Partners Section */}
      <section style={{ marginBottom: "var(--spacing-8xl)" }}>
        <Highlight2Section
          concepts={["OFICIAL", "PARTNERS"]}
          items={["CONTENTFUL", "AWS", "SHOPIFY PARTNERS", "MICROSOFT AI CLOUD PARTNER", "NETLIFY", ""]}
        />
      </section>

      {/* Servicios Section */}
      <section style={{ marginBottom: "var(--spacing-8xl)" }}>
        <TitleSection overheader="SERVICIOS" />

        <div
          style={{
            marginTop: "var(--spacing-xl)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-xxxl)",
          }}
        >
          <BoxSection
            overheader="S/ 01"
            header="LANDING PAGES CON IA"
            bodyText="Creamos landing pages de alto rendimiento optimizadas con inteligencia artificial. Nuestras soluciones combinan diseño estratégico con tecnología avanzada para maximizar conversiones y engagement."
            secondaryText="Utilizamos modelos de IA para personalizar la experiencia del usuario, optimizar el contenido y mejorar continuamente el rendimiento de cada página."
            buttonLabel="VER MÁS"
            imageSrc="/modern-landing-page-design-with-ai-elements.jpg"
          />

          <BoxSection
            overheader="S/ 02"
            header="E-COMMERCE ESCALABLE"
            bodyText="Desarrollamos plataformas de e-commerce robustas y escalables que crecen con tu negocio. Integramos las mejores prácticas de UX, seguridad y rendimiento para garantizar una experiencia de compra excepcional."
            secondaryText="Nuestras soluciones incluyen gestión de inventario, procesamiento de pagos, análisis avanzado y personalización impulsada por IA para aumentar las ventas."
            buttonLabel="VER MÁS"
            imageSrc="/modern-ecommerce-platform.png"
          />

          <BoxSection
            overheader="S/ 03"
            header="DESARROLLO WEB EMPRESARIAL"
            bodyText="Construimos aplicaciones web empresariales de nivel enterprise con arquitecturas modernas y escalables. Desde portales corporativos hasta sistemas complejos de gestión."
            secondaryText="Implementamos las últimas tecnologías y mejores prácticas para garantizar seguridad, rendimiento y mantenibilidad a largo plazo."
            buttonLabel="VER MÁS"
            imageSrc="/enterprise-web-app-dashboard.png"
          />
        </div>
      </section>

      {/* Certification Section */}
      <section style={{ marginBottom: "var(--spacing-8xl)" }}>
        <TitleSection overheader="SECURITY ISO" title="TECH WITH THE HIGHEST STANDARDS OF SECURITY" />

        <div style={{ marginTop: "var(--spacing-xl)" }}>
          <BoxSection
            overheader="SECURITY CERTIFICATION"
            header="ISO 27001"
            bodyText="We are proud to be ISO/IEC 27001 certified, the leading international standard for managing information security. This means that in Tailor, your data is handled with the utmost care, following rigorous protocols for confidentiality, integrity, and availability."
            imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ISO%20Certification%20-f4WhAAGoMuKdDFCFl5l9pZugJuvWww.png"
            imageAlt="ISO 27001 Security Certification - Stone and water droplets on dark blue background"
            certificationBadgeSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Modo_de_aislamiento-vjgtN0dPVKXNWgUsSYw20TQ0JKU29B.webp"
            certificationBadgeAlt="Arplus ISO 27001 Systems Certification Badge"
          />
        </div>
      </section>

      {/* Content Section 1 */}
      <section style={{ marginBottom: "var(--spacing-8xl)" }}></section>

      <section style={{ marginBottom: "var(--spacing-8xl)" }}></section>

      <section style={{ marginBottom: "var(--spacing-8xl)" }}></section>

      {/* CTA Section */}
    </LandingLayout>
  )
}
