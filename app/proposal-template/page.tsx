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
import { BudgetSection } from "@/components/BudgetSection/BudgetSection"
import { Table } from "@/components/Table/Table"
import Image from "next/image"
import { FAQ } from "@/components/FAQ/FAQ"

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
            src="/images/design-mode/HERO.png"
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
            <MenuSidebarItem href="#challenge" number={1} isActive>
              CHALLENGE / CONTEXT
            </MenuSidebarItem>
            <MenuSidebarItem href="#objectives" number={2}>
              OBJECTIVES
            </MenuSidebarItem>
            <MenuSidebarItem href="#approach" number={3}>
              OUR APPROACH
            </MenuSidebarItem>
            <MenuSidebarItem href="#technology" number={4}>
              TECHNOLOGY & ARCHITECTURE
            </MenuSidebarItem>
            <MenuSidebarItem href="#roadmap" number={5}>
              ROADMAP & PHASES
            </MenuSidebarItem>
            <MenuSidebarItem href="#budget" number={6}>
              BUDGET & CONDITIONS
            </MenuSidebarItem>
            <MenuSidebarItem href="#infra-mantenimiento" number={7}>
              INFRA & MANTENIMIENTO
            </MenuSidebarItem>
          </MenuSidebar>

          {/* Body Content */}
          <div style={{ flex: 1, maxWidth: "702px" }}>
            <BodyText
              sections={[
                {
                  title: "CHALLENGE / CONTEXT",
                  paragraphs: [
                    "Explain the client's current situation and the specific problem that needs to be solved. Provide context about their business environment, technical constraints, and the challenges they face in achieving their goals.",
                    "Detail the pain points, inefficiencies, or opportunities that have led to this project. Help stakeholders understand why this initiative is critical and what's at stake if the problem remains unsolved.",
                  ],
                },
                {
                  title: "OBJECTIVES",
                  paragraphs: [
                    "Define what the project aims to achieve with clear, measurable goals. Outline the key success criteria and expected outcomes that will demonstrate project success.",
                    "Establish both short-term deliverables and long-term strategic objectives. Ensure alignment between technical implementation and business value creation.",
                  ],
                },
                {
                  title: "OUR APPROACH",
                  paragraphs: [
                    "Explain Tailor Hub's working model and methodology for this project. Detail how we collaborate with your team, our development process, and the frameworks we use to ensure successful delivery.",
                    "Describe our agile methodology, communication protocols, quality assurance practices, and how we adapt to changing requirements while maintaining project momentum and quality standards.",
                  ],
                },
                {
                  title: "TECHNOLOGY & ARCHITECTURE",
                  paragraphs: [
                    "Present the technical proposal clearly, including the technology stack, system architecture, and infrastructure design. Explain the rationale behind each technical decision and how it supports project objectives.",
                    "Detail the scalability considerations, security measures, integration points, and performance optimization strategies that will ensure a robust, future-proof solution.",
                  ],
                },
              ]}
            />

            {/* Technology & Architecture Section */}
            <div id="technology" style={{ marginTop: "var(--spacing-4xl)" }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--spacing-s, 12px)",
                  marginTop: "var(--spacing-m, 16px)",
                }}
              >
                {[
                  "React 18+",
                  "Next.js 15",
                  "TypeScript",
                  "Tailwind CSS",
                  "Node.js",
                  "PostgreSQL",
                  "AWS",
                  "Docker",
                  "Kubernetes",
                  "OpenAI GPT-4",
                  "Vercel",
                  "GitHub Actions",
                ].map((tech, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "var(--spacing-xs, 8px) var(--spacing-m, 16px)",
                      backgroundColor: "var(--color-neutral-100, #F5F5F5)",
                      border: "1px solid var(--color-neutral-200, #E5E5E5)",
                      borderRadius: "var(--radius-s, 4px)",
                      fontFamily: "var(--font-mono, 'PP Neue Montreal Mono', monospace)",
                      fontSize: "var(--text-size-xsmall, 14px)",
                      lineHeight: "var(--text-line-xsmall, 20px)",
                      color: "var(--color-text-primary, #000000)",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Roadmap & Phases Section */}
            <div id="roadmap" style={{ marginTop: "var(--spacing-4xl)" }}>
              <h3
                style={{
                  fontFamily: "var(--font-default, 'PP Mori', sans-serif)",
                  fontSize: "var(--text-size-large, 40px)",
                  lineHeight: "var(--text-line-large, 48px)",
                  fontWeight: 400,
                  color: "var(--color-text-primary)",
                  textTransform: "uppercase",
                  margin: 0,
                  marginBottom: "var(--spacing-m, 16px)",
                }}
              >
                ROADMAP & PHASES
              </h3>
              <TimelineSection
                phases={[
                  {
                    number: "01",
                    title: "DISCOVERY & PLANNING",
                    description:
                      "Comprehensive analysis of requirements, technical architecture design, and project roadmap definition. We establish clear objectives, identify potential challenges, and create a detailed implementation strategy.",
                    duration: "2-3 WEEKS",
                    deliverables: [
                      "Technical requirements document",
                      "System architecture blueprint",
                      "Project timeline and milestones",
                      "Risk assessment report",
                    ],
                  },
                  {
                    number: "02",
                    title: "DESIGN & PROTOTYPING",
                    description:
                      "Creation of high-fidelity designs, interactive prototypes, and design system components. We validate the user experience through testing and iterate based on feedback to ensure optimal usability.",
                    duration: "3-4 WEEKS",
                    deliverables: [
                      "Design system documentation",
                      "Interactive prototypes",
                      "User flow diagrams",
                      "Component library",
                    ],
                  },
                  {
                    number: "03",
                    title: "DEVELOPMENT & INTEGRATION",
                    description:
                      "Implementation of core features, API integrations, and database architecture. Our development process follows best practices with continuous integration, automated testing, and code reviews.",
                    duration: "8-10 WEEKS",
                    deliverables: [
                      "Functional application modules",
                      "API documentation",
                      "Database schema",
                      "Integration test suite",
                    ],
                  },
                  {
                    number: "04",
                    title: "TESTING & OPTIMIZATION",
                    description:
                      "Comprehensive quality assurance, performance optimization, and security audits. We conduct thorough testing across devices and browsers to ensure a flawless user experience.",
                    duration: "2-3 WEEKS",
                    deliverables: [
                      "QA test reports",
                      "Performance benchmarks",
                      "Security audit results",
                      "Bug fix documentation",
                    ],
                  },
                  {
                    number: "05",
                    title: "DEPLOYMENT & LAUNCH",
                    description:
                      "Production deployment, monitoring setup, and launch support. We ensure a smooth transition to production with comprehensive documentation and team training.",
                    duration: "1-2 WEEKS",
                    deliverables: [
                      "Production environment setup",
                      "Deployment documentation",
                      "Monitoring dashboards",
                      "Team training materials",
                    ],
                  },
                  {
                    number: "06",
                    title: "MAINTENANCE & SUPPORT",
                    description:
                      "Ongoing support, performance monitoring, and continuous improvements. We provide regular updates, security patches, and feature enhancements to keep your platform running optimally.",
                    duration: "ONGOING",
                    deliverables: [
                      "Monthly performance reports",
                      "Security updates",
                      "Feature enhancements",
                      "Technical support",
                    ],
                  },
                ]}
              />
            </div>

            {/* Budget Section */}
            <div id="budget" style={{ marginTop: "var(--spacing-4xl)" }}>
              <h3
                style={{
                  fontFamily: "var(--font-default, 'PP Mori', sans-serif)",
                  fontSize: "var(--text-size-large, 40px)",
                  lineHeight: "var(--text-line-large, 48px)",
                  fontWeight: 400,
                  color: "var(--color-text-primary)",
                  textTransform: "uppercase",
                  margin: 0,
                  marginBottom: "var(--spacing-m, 16px)",
                }}
              >
                BUDGET & CONDITIONS
              </h3>
              <BudgetSection
                items={[
                  {
                    category: "DISCOVERY & PLANNING",
                    description: "Requirements analysis, architecture design, and project roadmap",
                    amount: "€8,500",
                  },
                  {
                    category: "DESIGN & PROTOTYPING",
                    description: "UI/UX design, interactive prototypes, and design system",
                    amount: "€12,000",
                  },
                  {
                    category: "DEVELOPMENT & INTEGRATION",
                    description: "Core features, API integrations, and database implementation",
                    amount: "€45,000",
                  },
                  {
                    category: "TESTING & OPTIMIZATION",
                    description: "QA testing, performance optimization, and security audits",
                    amount: "€9,500",
                  },
                  {
                    category: "DEPLOYMENT & LAUNCH",
                    description: "Production deployment, monitoring setup, and team training",
                    amount: "€6,000",
                  },
                  {
                    category: "MAINTENANCE & SUPPORT",
                    description: "3 months of ongoing support and updates",
                    amount: "€9,000",
                  },
                ]}
                total="€90,000"
                notes={[
                  "Payment terms: 30% upfront, 40% at development milestone, 30% upon completion",
                  "All prices exclude VAT",
                  "Maintenance and support can be extended on a monthly basis after the initial 3-month period",
                ]}
              />
            </div>

            {/* Infra & Mantenimiento Section */}
            <div id="infra-mantenimiento" style={{ marginTop: "var(--spacing-4xl)" }}>
              <h3
                style={{
                  fontFamily: "var(--font-default, 'PP Mori', sans-serif)",
                  fontSize: "var(--text-size-large, 40px)",
                  lineHeight: "var(--text-line-large, 48px)",
                  fontWeight: 400,
                  color: "var(--color-text-primary)",
                  textTransform: "uppercase",
                  margin: 0,
                  marginBottom: "var(--spacing-m, 16px)",
                }}
              >
                INFRA & MANTENIMIENTO
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-default, 'PP Mori', sans-serif)",
                  fontSize: "var(--text-size-body, 16px)",
                  lineHeight: "var(--text-line-body, 24px)",
                  color: "var(--color-text-primary)",
                  margin: 0,
                  marginBottom: "var(--spacing-xl)",
                }}
              >
                Una vez finalizada la fase de desarrollo, ofrecemos un servicio continuo para garantizar que la
                plataforma se mantenga estable, segura y alineada con los requisitos de rendimiento y cumplimiento. Este
                servicio cubre tanto mantenimiento correctivo (incidencias, actualizaciones de seguridad) como
                mantenimiento evolutivo (mejoras y desarrollo de nuevas entidades simples).
              </p>

              <div style={{ marginTop: "var(--spacing-xl)" }}>
                <Table
                  columns={["Alcance", "Ejemplos"]}
                  rows={[
                    {
                      label: "Incluido",
                      content: (
                        <ul>
                          <li>Corrección de errores e incidencias</li>
                          <li>Actualizaciones de seguridad</li>
                          <li>Mejoras de rendimiento</li>
                          <li>Ajustes en funcionalidades existentes</li>
                          <li>
                            Desarrollo de nuevas entidades simples (tipos de contenido, campos o reglas de baja
                            complejidad)
                          </li>
                        </ul>
                      ),
                    },
                    {
                      label: "No incluido*",
                      tooltip:
                        "El desarrollo de nuevas funcionalidades será presupuestado y estimado como un proyecto independiente.",
                      content: (
                        <ul>
                          <li>
                            Desarrollo de nuevas funcionalidades o entidades complejas (modelos multirrelación,
                            workflows avanzados)
                          </li>
                          <li>Integración con nuevas APIs o plataformas externas</li>
                        </ul>
                      ),
                    },
                  ]}
                />
              </div>

              <p
                style={{
                  fontFamily: "var(--font-default, 'PP Mori', sans-serif)",
                  fontSize: "var(--text-size-body, 16px)",
                  lineHeight: "var(--text-line-body, 24px)",
                  color: "var(--color-text-primary)",
                  margin: 0,
                  marginTop: "var(--spacing-l, 24px)",
                }}
              >
                Este servicio está diseñado para ofrecer a Barceló Hoteles Group tranquilidad y valor a largo plazo,
                para que podáis centraros en impulsar la innovación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ marginBottom: "var(--spacing-8xl)" }}>
        <TitleSection overheader="OUR SERVICES" />

        <div
          style={{ marginTop: "var(--spacing-xl)", display: "flex", flexDirection: "column", gap: "var(--spacing-xl)" }}
        >
          <BoxSection
            overheader="SOFTWARE DEVELOPMENT"
            header="CUSTOM SOFTWARE DEVELOPMENT"
            bodyText="We build scalable, high-performance software solutions tailored to your business needs. From enterprise applications to microservices architecture, our team delivers robust systems that drive innovation and efficiency."
            imageSrc="/images/design-mode/desarrollo%20de%20software(2).jpeg"
            imageAlt="Custom software development - Precision engineering and craftsmanship"
          />

          <BoxSection
            overheader="ARTIFICIAL INTELLIGENCE"
            header="AI & DATA INTELLIGENCE"
            bodyText="Transform raw data into actionable intelligence with our advanced AI solutions. We leverage cutting-edge machine learning algorithms to help you uncover patterns, predict outcomes, and drive smarter decision-making at every level of your organization."
            imageSrc="/images/design-mode/auditoria%20y%20formacion(2).jpeg"
            imageAlt="AI and data intelligence - Digital transformation and innovation"
          />

          <BoxSection
            overheader="E-COMMERCE"
            header="PREMIUM E-COMMERCE PLATFORMS"
            bodyText="Create exceptional online shopping experiences with our custom e-commerce solutions. We build high-converting platforms with advanced features like personalization, real-time inventory, and seamless payment integration."
            imageSrc="/images/design-mode/VRAI(1).jpeg"
            imageAlt="Premium e-commerce platforms - Luxury and elegance"
          />

          <BoxSection
            overheader="ACCESSIBILITY"
            header="ACCESSIBLE DEVELOPMENT"
            bodyText="We design and develop inclusive digital experiences that work for everyone. Our accessibility-first approach ensures your applications meet WCAG standards while delivering exceptional usability for all users."
            imageSrc="/images/design-mode/Desarrollor%20accesible(1).jpeg"
            imageAlt="Accessible development - Integration and inclusive solutions"
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

      {/* Our Partners Section */}
      <section style={{ marginBottom: "var(--spacing-8xl)" }}>
        <Highlight2Section
          concepts={["OFICIAL", "PARTNERS"]}
          items={["CONTENTFUL", "AWS", "SHOPIFY PARTNERS", "MICROSOFT AI CLOUD PARTNER", "NETLIFY", ""]}
        />
      </section>

      {/* ISO Certification Section */}
      <section style={{ marginBottom: "var(--spacing-8xl)" }}>
        <TitleSection overheader="SECURITY ISO" title="TECH WITH THE HIGHEST STANDARDS OF SECURITY" />

        <div style={{ marginTop: "var(--spacing-xl)" }}>
          <BoxSection
            overheader="SECURITY CERTIFICATION"
            header="ISO 27001"
            bodyText="We are proud to be ISO/IEC 27001 certified, the leading international standard for managing information security. This means that in Tailor, your data is handled with the utmost care, following rigorous protocols for confidentiality, integrity, and availability."
            imageSrc="/images/design-mode/ISO(2).png"
            imageAlt="ISO 27001 Security Certification - Precision and purity represented by stone and water droplets"
            certificationBadgeSrc="/images/design-mode/Modo_de_aislamiento.webp"
            certificationBadgeAlt="Arplus ISO 27001 Systems Certification Badge"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ marginBottom: "var(--spacing-8xl)" }}>
        <TitleSection overheader="FREQUENTLY ASKED QUESTIONS" title="FAQ" />

        <div style={{ marginTop: "var(--spacing-xl)" }}>
          <FAQ
            items={[
              {
                question: "What is Tailor Hub?",
                answer:
                  "Tailor Hub is a Madrid-based global company specializing in cutting-edge software engineering and artificial intelligence development. As a proud member of the Modulos Studio Group, we bring together an elite team of software engineers dedicated to delivering exceptional digital solutions.",
              },
              {
                question: "What services does Tailor Hub offer?",
                answer:
                  "We offer three core services: Development Labs for custom software development with cutting-edge technologies, Artificial Intelligence solutions that transform business operations through machine learning and intelligent automation, and comprehensive Design Systems with reusable components and design tokens for consistent, accessible interfaces at scale.",
              },
              {
                question: "What is your project methodology?",
                answer:
                  "We follow a structured 6-phase approach: Discovery & Planning (2-3 weeks), Design & Prototyping (3-4 weeks), Development & Integration (8-10 weeks), Testing & Optimization (2-3 weeks), Deployment & Launch (1-2 weeks), and ongoing Maintenance & Support. Each phase includes specific deliverables and quality checkpoints.",
              },
              {
                question: "What technologies do you work with?",
                answer:
                  "Our core technology stack includes React 18+ for dynamic user interfaces, TypeScript for type-safe development, Next.js for server-side rendering and static site generation, and Design Tokens following W3C DTCG format. We also integrate AI-powered automation with V0 and custom AI models for business-specific solutions.",
              },
              {
                question: "Where is Tailor Hub located?",
                answer:
                  "Our headquarters is located at Calle Hermanos Álvarez Quintero, 2, Semisótano A, 28004 Madrid, Spain. However, we are a global company and believe in giving our teams the autonomy to work wherever they want, delivering the best outcomes through flexibility and innovation.",
              },
              {
                question: "How can I contact Tailor Hub?",
                answer:
                  "You can reach us via email at sales@tailor-hub.com, call us at +34 682 270 526, or fill out our contact form at tally.so/r/wopD8P. We're also active on LinkedIn and Instagram. Our team typically responds within 24 hours during business days.",
              },
              {
                question: "What makes Tailor Hub different from other development agencies?",
                answer:
                  "We deliver end-to-end solutions that bridge the gap between design and development. Our comprehensive design systems, built with reusable components and design tokens, ensure consistency across all touchpoints. We integrate AI-powered automation to accelerate development cycles and enable intelligent decision-making, combining technical excellence with creative innovation.",
              },
              {
                question: "Do you offer ongoing maintenance and support?",
                answer:
                  "Yes, we provide comprehensive maintenance and support services including infrastructure monitoring, security updates, performance optimization, bug fixes, and development of simple entities. We offer monthly service packages and can also provide custom support agreements tailored to your specific needs.",
              },
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
    </LandingLayout>
  )
}
