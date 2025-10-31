"use client"

import { LandingLayout } from "@/components/LandingLayout/LandingLayout"
import { HighlightSection } from "@/components/HighlightSection/HighlightSection"
import { HeaderBox } from "@/components/HeaderBox/HeaderBox"
import { BodyText } from "@/components/BodyText/BodyText"
import { MenuSidebar, MenuSidebarItem } from "@/components/MenuSidebar/MenuSidebar"
import { TitleSection } from "@/components/TitleSection/TitleSection"
import { Highlight2Section } from "@/components/Highlight2Section/Highlight2Section"
import { BoxSection } from "@/components/BoxSection/BoxSection"
import { TechStackSection } from "@/components/TechStackSection/TechStackSection"
import { CaseStudiesSection } from "@/components/CaseStudiesSection/CaseStudiesSection"
import { TimelineSection } from "@/components/TimelineSection/TimelineSection"
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HERO-7QyVasLSj8cjn2jGivuMQ2gC7PCZiA.png"
            alt="Tailor Hub - Smart access and security solutions"
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
            imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/auditoria%20y%20formacion-yEPDDM6kqZrHq379cziXJRkTCq50X8.jpeg"
            imageAlt="AI-powered landing pages - Hands holding glittering digital fabric"
          />

          <BoxSection
            overheader="S/ 02"
            header="E-COMMERCE ESCALABLE"
            bodyText="Desarrollamos plataformas de e-commerce robustas y escalables que crecen con tu negocio. Integramos las mejores prácticas de UX, seguridad y rendimiento para garantizar una experiencia de compra excepcional."
            secondaryText="Nuestras soluciones incluyen gestión de inventario, procesamiento de pagos, análisis avanzado y personalización impulsada por IA para aumentar las ventas."
            buttonLabel="VER MÁS"
            imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-31%20at%2013.13.01-5RMqdNOAGrauG3tONkF07WU0hkUV0Q.png"
            imageAlt="Scalable e-commerce platform - Elegant diamond jewelry piece"
          />

          <BoxSection
            overheader="S/ 03"
            header="DESARROLLO WEB EMPRESARIAL"
            bodyText="Construimos aplicaciones web empresariales de nivel enterprise con arquitecturas modernas y escalables. Desde portales corporativos hasta sistemas complejos de gestión."
            secondaryText="Implementamos las últimas tecnologías y mejores prácticas para garantizar seguridad, rendimiento y mantenibilidad a largo plazo."
            buttonLabel="VER MÁS"
            imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desarrollo%20de%20software-YxRzp41zYzwOmwdLBL490SWpxVZLFI.jpeg"
            imageAlt="Enterprise web development - Hands working with precision components"
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
            imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ISO-kpHVH2mPLHZCP8BUHzRfFH9tVsrxKa.png"
            imageAlt="ISO 27001 Security Certification - Stone and water droplets on dark blue background"
            certificationBadgeSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Modo_de_aislamiento-vjgtN0dPVKXNWgUsSYw20TQ0JKU29B.webp"
            certificationBadgeAlt="Arplus ISO 27001 Systems Certification Badge"
          />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section style={{ marginBottom: "var(--spacing-8xl)" }}>
        <TitleSection overheader="CORE TECHNOLOGY" title="NUESTRAS TECNOLOGÍAS Y LENGUAJES" />

        <div style={{ marginTop: "var(--spacing-xl)" }}>
          <TechStackSection
            categories={[
              {
                title: "Front-end & Mobile",
                technologies: [
                  "REACT JS",
                  "NEXT JS",
                  "VUE JS",
                  "ANGULAR",
                  "TAILWIND CSS",
                  "TYPESCRIPT",
                  "REACT NATIVE",
                  "EXPO",
                  "IONIC",
                ],
              },
              {
                title: "Back-end",
                technologies: ["NODE", "EXPRESS", "TYPESCRIPT", "MONGO", "SQL", "NESTJS"],
              },
              {
                title: "Data & IA",
                technologies: ["PYTHON", "LANGCHAIN", "OPENAI GPT-40", "AZURE OPENAI", "MCP", "A2A"],
              },
              {
                title: "CMS/e-commerce",
                technologies: ["WORDPRESS", "CONTENTFUL", "DATO CMS", "SANITY", "SHOPIFY"],
              },
              {
                title: "Infraestructura",
                technologies: ["KUBERNETES", "DOCKER", "AWS", "AZURE"],
              },
            ]}
          />
        </div>
      </section>

      {/* Case Studies Section */}
      <section style={{ marginBottom: "var(--spacing-8xl)" }}>
        <TitleSection overheader="CASE STUDIES" />

        <div style={{ marginTop: "var(--spacing-xl)" }}>
          <CaseStudiesSection
            caseStudies={[
              {
                category: "SOFTWARE",
                title: "ON RUNNING + STRAVA",
                imageSrc:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-95ak8iqiC08KKCRJGEh5qSIvJz92o0.jpeg",
                imageAlt: "ON Running and Strava integration - Smart jacket with glowing technology pocket",
                modalData: {
                  title: "ON RUNNING + STRAVA",
                  category: "SOFTWARE",
                  imageSrc:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-95ak8iqiC08KKCRJGEh5qSIvJz92o0.jpeg",
                  imageAlt: "ON Running and Strava integration",
                  sections: [
                    {
                      title: "THE CHALLENGE",
                      paragraphs: [
                        "ON Running needed to integrate their premium running experience with Strava's social fitness platform. The challenge was creating a seamless connection that would enhance the user experience while maintaining the integrity of both platforms.",
                        "The integration required real-time data synchronization, robust API handling, and a user interface that felt native to both ecosystems.",
                      ],
                    },
                    {
                      title: "THE SOLUTION",
                      paragraphs: [
                        "We developed a comprehensive integration platform that connects ON Running's proprietary tracking technology with Strava's social features. The solution includes automatic activity syncing, performance analytics, and community engagement tools.",
                      ],
                    },
                  ],
                  insights: [
                    { value: "2.5M+", label: "ACTIVE USERS" },
                    { value: "98%", label: "SYNC SUCCESS RATE" },
                  ],
                  quotes: [
                    {
                      text: "The Tailor Hub team delivered an exceptional integration that exceeded our expectations. The seamless connection between our platforms has significantly improved user engagement and retention.",
                      author: "SARAH CHEN - HEAD OF DIGITAL PRODUCTS AT ON RUNNING",
                    },
                  ],
                },
              },
              {
                category: "SOFTWARE",
                title: "CLIKALIA",
                imageSrc:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dormakaba.png-BL23wcJL31B0CAp4LCnI5yUkA8STg7.jpeg",
                imageAlt: "Clikalia real estate platform - Hand interacting with geometric blocks",
                modalData: {
                  title: "CLIKALIA",
                  category: "SOFTWARE",
                  imageSrc:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dormakaba.png-BL23wcJL31B0CAp4LCnI5yUkA8STg7.jpeg",
                  imageAlt: "Clikalia real estate platform",
                  sections: [
                    {
                      title: "THE CHALLENGE",
                      paragraphs: [
                        "Clikalia, a leading real estate platform, needed to modernize their property management system to handle thousands of listings with advanced search capabilities, virtual tours, and real-time availability updates.",
                        "The existing infrastructure couldn't scale to meet growing demand, and the user experience needed a complete overhaul to compete in the digital-first real estate market.",
                      ],
                    },
                    {
                      title: "THE SOLUTION",
                      paragraphs: [
                        "We built a scalable, cloud-native platform with advanced search algorithms, 3D virtual tour integration, and AI-powered property recommendations. The new system handles 10x more concurrent users while reducing load times by 70%.",
                      ],
                    },
                  ],
                  insights: [
                    { value: "50K+", label: "PROPERTIES LISTED" },
                    { value: "70%", label: "FASTER LOAD TIMES" },
                  ],
                  quotes: [
                    {
                      text: "Tailor Hub transformed our platform into a market-leading solution. The new system is fast, reliable, and our users love the enhanced search and virtual tour features.",
                      author: "MIGUEL RODRIGUEZ - CTO AT CLIKALIA",
                    },
                  ],
                },
              },
              {
                category: "SOFTWARE",
                title: "DORMAKABA",
                imageSrc:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HERO-7QyVasLSj8cjn2jGivuMQ2gC7PCZiA.png",
                imageAlt: "Dormakaba smart access solutions - Hand holding blank access card",
                modalData: {
                  title: "DORMAKABA",
                  category: "SOFTWARE",
                  imageSrc:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HERO-7QyVasLSj8cjn2jGivuMQ2gC7PCZiA.png",
                  imageAlt: "Dormakaba smart access solutions",
                  sections: [
                    {
                      title: "THE CHALLENGE",
                      paragraphs: [
                        "When dormakaba approached Tailor Hub, they faced a multi-faceted challenge. Their monolithic CMS, Coremedia, had become an operational bottleneck, limiting flexibility for content editors across 40 countries and 35 languages. Additionally, dormakaba needed to execute a seamless transition between technical providers while simultaneously launching their newly restructured digital architecture. The stakes were high—success required flawless execution amidst a complex, global rollout.",
                        "dormakaba sought a partner who could not only maintain their existing momentum but also elevate the performance and scalability of their digital ecosystem.",
                      ],
                    },
                    {
                      title: "THE CLIENT",
                      paragraphs: [
                        "dormakaba is a global leader in access control and security solutions, headquartered in Rümlang, Switzerland. With operations in over 50 countries and a history of innovation, they deliver cutting-edge solutions ranging from electronic access systems to advanced door hardware. Serving industries like hospitality, healthcare, and commercial real estate, dormakaba combines reliability with forward-thinking design to set the standard for security solutions.",
                      ],
                    },
                  ],
                  insights: [
                    { value: "40+", label: "COUNTRIES SUPPORTED" },
                    { value: "35", label: "LANGUAGES" },
                  ],
                  quotes: [
                    {
                      text: "I am very pleased with the Tailor team. They adapt exceptionally well to our needs, demonstrating great flexibility and responsiveness. Additionally, they always meet the established deadlines, allowing us to advance our projects without delays. Their professionalism and commitment are truly remarkable, and their collaboration has been key to the success of our global initiatives.",
                      author: "PABLO GONZALEZ CELA - GLOBAL DIGITAL SOLUTIONS LEAD AT DORMAKABA",
                    },
                  ],
                },
              },
              {
                category: "ECOMMERCE",
                title: "VRAI",
                imageSrc:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VRAI-rtQZ9X0qUMRrgQLGlhPug0u3y9JEGo.jpeg",
                imageAlt: "VRAI jewelry e-commerce - Model wearing elegant diamond earrings",
                modalData: {
                  title: "VRAI",
                  category: "ECOMMERCE",
                  imageSrc:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VRAI-rtQZ9X0qUMRrgQLGlhPug0u3y9JEGo.jpeg",
                  imageAlt: "VRAI jewelry e-commerce",
                  sections: [
                    {
                      title: "THE CHALLENGE",
                      paragraphs: [
                        "VRAI, a luxury lab-grown diamond jewelry brand, needed an e-commerce platform that matched the elegance and sophistication of their products. The challenge was creating a high-end shopping experience with advanced product customization, 3D visualization, and seamless checkout.",
                        "The platform needed to handle complex product configurations, real-time inventory management, and provide a premium user experience across all devices.",
                      ],
                    },
                    {
                      title: "THE SOLUTION",
                      paragraphs: [
                        "We developed a custom Shopify Plus solution with advanced 3D product visualization, real-time customization tools, and a streamlined checkout process. The platform integrates with VRAI's inventory management system and provides detailed analytics for business intelligence.",
                      ],
                    },
                  ],
                  insights: [
                    { value: "150%", label: "SALES INCREASE" },
                    { value: "4.8/5", label: "CUSTOMER RATING" },
                  ],
                  quotes: [
                    {
                      text: "The Tailor Hub team created a stunning e-commerce experience that perfectly captures our brand's luxury positioning. Sales have increased significantly since launch.",
                      author: "VANESSA STOFENMACHER - HEAD OF E-COMMERCE AT VRAI",
                    },
                  ],
                },
              },
            ]}
          />
        </div>
      </section>

      {/* Content Section 1 */}
      <section style={{ marginBottom: "var(--spacing-8xl)" }}></section>

      <section style={{ marginBottom: "var(--spacing-8xl)" }}></section>

      <section style={{ marginBottom: "var(--spacing-8xl)" }}></section>

      {/* Timeline Section */}
      <section style={{ marginBottom: "var(--spacing-8xl)" }}>
        <TitleSection overheader="PROJECT TIMELINE" title="PHASES & MILESTONES" />

        <div style={{ marginTop: "var(--spacing-xl)" }}>
          <TimelineSection
            phases={[
              {
                number: "01",
                title: "DISCOVERY & PLANNING",
                description:
                  "Comprehensive analysis of requirements, technical architecture design, and project roadmap definition. We establish clear objectives, identify potential challenges, and create a detailed implementation strategy.",
                duration: "2-3 WEEKS",
              },
              {
                number: "02",
                title: "DESIGN & PROTOTYPING",
                description:
                  "Creation of high-fidelity designs, interactive prototypes, and design system components. We validate the user experience through testing and iterate based on feedback to ensure optimal usability.",
                duration: "3-4 WEEKS",
              },
              {
                number: "03",
                title: "DEVELOPMENT & INTEGRATION",
                description:
                  "Implementation of core features, API integrations, and database architecture. Our development process follows best practices with continuous integration, automated testing, and code reviews.",
                duration: "8-10 WEEKS",
              },
              {
                number: "04",
                title: "TESTING & OPTIMIZATION",
                description:
                  "Comprehensive quality assurance, performance optimization, and security audits. We conduct thorough testing across devices and browsers to ensure a flawless user experience.",
                duration: "2-3 WEEKS",
              },
              {
                number: "05",
                title: "DEPLOYMENT & LAUNCH",
                description:
                  "Production deployment, monitoring setup, and launch support. We ensure a smooth transition to production with comprehensive documentation and team training.",
                duration: "1-2 WEEKS",
              },
              {
                number: "06",
                title: "MAINTENANCE & SUPPORT",
                description:
                  "Ongoing support, performance monitoring, and continuous improvements. We provide regular updates, security patches, and feature enhancements to keep your platform running optimally.",
                duration: "ONGOING",
              },
            ]}
          />
        </div>
      </section>

      {/* Our Partners Section */}
      <section style={{ marginBottom: "var(--spacing-8xl)" }}>
        <Highlight2Section
          concepts={["OFICIAL", "PARTNERS"]}
          items={["CONTENTFUL", "AWS", "SHOPIFY PARTNERS", "MICROSOFT AI CLOUD PARTNER", "NETLIFY", ""]}
        />
      </section>

      {/* CTA Section */}
    </LandingLayout>
  )
}
