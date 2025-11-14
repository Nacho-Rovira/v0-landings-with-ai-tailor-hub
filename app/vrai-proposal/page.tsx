"use client"

import { LandingLayout } from "@/components/LandingLayout/LandingLayout"
import { HighlightSection } from "@/components/HighlightSection/HighlightSection"
import { HeaderBox } from "@/components/HeaderBox/HeaderBox"
import { BodyText } from "@/components/BodyText/BodyText"
import { MenuSidebar, MenuSidebarItem } from "@/components/MenuSidebar/MenuSidebar"
import { TitleSection } from "@/components/TitleSection/TitleSection"
import { CaseStudiesSection } from "@/components/CaseStudiesSection/CaseStudiesSection"
import { TimelineSection } from "@/components/TimelineSection/TimelineSection"
import { BudgetSection } from "@/components/BudgetSection/BudgetSection"
import { Table } from "@/components/Table/Table"
import Image from "next/image"
import { FAQ } from "@/components/FAQ/FAQ"
import { TeamSection } from "@/components/TeamSection/TeamSection"

export default function VRAIProposalPage() {
  return (
    <LandingLayout>
      {/* Highlight Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <HighlightSection
          concepts={["E-COMMERCE <span> PLATFORM", "LUXURY <span> EXPERIENCE", "DIGITAL <span> TRANSFORMATION"]}
          header="COMPREHENSIVE E-COMMERCE PLATFORM IMPLEMENTATION FOR VRAI'S LUXURY JEWELRY BRAND"
        />
      </section>

      {/* HeaderBox Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <HeaderBox
          overheader="A PROPOSAL FOR VRAI"
          header="Full-stack development and implementation of your next-generation luxury e-commerce platform"
          buttonLabel="VIEW PROPOSAL"
          onButtonClick={() => {
            document.querySelector("#content")?.scrollIntoView({ behavior: "smooth" })
          }}
        />
      </section>

      {/* Hero Image Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <div
          style={{
            width: "100%",
            borderRadius: "var(--radius-s)",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/design-mode/VRAI(2).jpeg"
            alt="VRAI - Luxury lab-grown diamond jewelry"
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
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
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
              TECHNOLOGY STACK
            </MenuSidebarItem>
            <MenuSidebarItem href="#roadmap" number={5}>
              ROADMAP & PHASES
            </MenuSidebarItem>
            <MenuSidebarItem href="#budget" number={6}>
              BUDGET & CONDITIONS
            </MenuSidebarItem>
            <MenuSidebarItem href="#infra-mantenimiento" number={7}>
              ONGOING SUPPORT
            </MenuSidebarItem>
          </MenuSidebar>

          {/* Body Content */}
          <div style={{ flex: 1, maxWidth: "702px" }}>
            <BodyText
              sections={[
                {
                  title: "CHALLENGE / CONTEXT",
                  paragraphs: [
                    "VRAI is redefining the luxury jewelry market with lab-grown diamonds, combining ethical sourcing with uncompromising quality. As your brand continues to scale globally, you need a digital platform that matches the sophistication and innovation of your products.",
                    "The challenge is to create a next-generation e-commerce experience that showcases your exquisite jewelry through advanced 3D visualization, personalized customization tools, and a seamless purchase journey—all while maintaining the performance, security, and elegance expected by discerning luxury consumers.",
                  ],
                },
                {
                  title: "OBJECTIVES",
                  paragraphs: [
                    "Our primary objective is to design and develop a world-class e-commerce platform that elevates VRAI's digital presence and drives measurable business growth. The platform will feature cutting-edge product visualization, intuitive customization interfaces, and a frictionless checkout experience optimized for conversion.",
                    "We aim to create a scalable, secure, and high-performance solution that supports your global expansion while providing rich analytics for data-driven decision making. The platform will embody VRAI's brand values of transparency, innovation, and luxury craftsmanship.",
                  ],
                },
                {
                  title: "OUR APPROACH",
                  paragraphs: [
                    "Tailor Hub brings deep expertise in luxury e-commerce, combining technical excellence with an understanding of high-end consumer behavior. Our multidisciplinary team will work in close collaboration with VRAI stakeholders throughout the project lifecycle.",
                    "We follow an agile methodology with regular sprints, continuous feedback loops, and iterative refinement. Each phase includes thorough testing, optimization, and user validation to ensure the platform exceeds expectations. Our approach balances speed to market with long-term scalability and maintainability.",
                  ],
                },
              ]}
            />

            {/* Technology Stack Section */}
            <div id="technology" style={{ marginTop: "var(--spacing-4xl)" }}>
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
                TECHNOLOGY STACK
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-default, 'PP Mori', sans-serif)",
                  fontSize: "var(--text-size-small, 16px)",
                  lineHeight: "var(--text-line-small, 22px)",
                  color: "var(--color-text-primary)",
                  margin: 0,
                  marginBottom: "var(--spacing-xl)",
                }}
              >
                We will leverage modern, proven technologies to build a robust and scalable platform:
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--spacing-s, 12px)",
                  marginTop: "var(--spacing-m, 16px)",
                }}
              >
                {[
                  "Shopify Plus",
                  "React & Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Three.js (3D)",
                  "Node.js",
                  "GraphQL API",
                  "PostgreSQL",
                  "AWS Cloud",
                  "Docker & Kubernetes",
                  "Stripe Payments",
                  "Algolia Search",
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
                    title: "DISCOVERY & DESIGN",
                    description:
                      "Comprehensive discovery workshops with stakeholders to define requirements, user journeys, and success metrics. We'll create detailed wireframes, high-fidelity mockups, and interactive prototypes for the complete platform. This phase includes UX research, brand alignment, and technical architecture planning.",
                    duration: "4 WEEKS",
                    deliverables: [
                      "User research and persona development",
                      "Information architecture and user flow diagrams",
                      "High-fidelity UI designs for all key pages",
                      "Interactive prototypes for user testing",
                      "Technical architecture documentation",
                      "Project roadmap and milestone definitions",
                    ],
                  },
                  {
                    number: "02",
                    title: "CORE DEVELOPMENT",
                    description:
                      "Development of the platform's foundational architecture and core features. This includes Shopify Plus setup, custom theme development, product catalog implementation, responsive design, and basic 3D product visualization. We'll establish CI/CD pipelines, testing frameworks, and development workflows.",
                    duration: "8 WEEKS",
                    deliverables: [
                      "Shopify Plus store configuration and customization",
                      "Responsive frontend with Next.js and Tailwind CSS",
                      "Product catalog with advanced filtering and search",
                      "Basic 3D product viewer implementation",
                      "Shopping cart and checkout flow (phase 1)",
                      "Content management system integration",
                      "CI/CD pipeline and staging environment",
                    ],
                  },
                  {
                    number: "03",
                    title: "ADVANCED FEATURES & CUSTOMIZATION",
                    description:
                      "Implementation of advanced features that differentiate VRAI's platform. This includes sophisticated 3D product customization tools, real-time inventory management, personalization engine, advanced analytics integration, and optimized checkout experience. We'll also implement customer accounts, wishlist functionality, and order tracking.",
                    duration: "6 WEEKS",
                    deliverables: [
                      "Advanced 3D customization interface with real-time rendering",
                      "Personalization engine and recommendation system",
                      "Customer account portal with order history",
                      "Wishlist and favorites functionality",
                      "Real-time inventory management integration",
                      "Analytics and conversion tracking implementation",
                      "Email automation and customer communication flows",
                    ],
                  },
                  {
                    number: "04",
                    title: "TESTING, OPTIMIZATION & LAUNCH",
                    description:
                      "Comprehensive quality assurance, performance optimization, and security hardening. This phase includes cross-browser and device testing, load testing, accessibility compliance verification, SEO optimization, and final content migration. We'll conduct user acceptance testing and provide training for the VRAI team before the successful launch.",
                    duration: "4 WEEKS",
                    deliverables: [
                      "Comprehensive QA testing across devices and browsers",
                      "Performance optimization and load testing",
                      "Security audit and PCI DSS compliance verification",
                      "Accessibility testing (WCAG 2.1 AA compliance)",
                      "SEO optimization and search console setup",
                      "Team training and documentation",
                      "Smooth production launch with monitoring setup",
                      "30-day post-launch support and optimization",
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
                    category: "PHASE 01: DISCOVERY & DESIGN",
                    description: "User research, UX/UI design, prototyping, and technical planning",
                    amount: "€12,000",
                  },
                  {
                    category: "PHASE 02: CORE DEVELOPMENT",
                    description: "Platform setup, core features, and foundational architecture",
                    amount: "€18,000",
                  },
                  {
                    category: "PHASE 03: ADVANCED FEATURES & CUSTOMIZATION",
                    description: "3D customization, personalization, analytics, and advanced functionality",
                    amount: "€14,000",
                  },
                  {
                    category: "PHASE 04: TESTING, OPTIMIZATION & LAUNCH",
                    description: "QA testing, performance optimization, security audit, and launch support",
                    amount: "€6,000",
                  },
                ]}
                total="€50,000"
                notes={[
                  "Payment terms: 30% upfront, 40% at Phase 2 completion, 30% upon final launch",
                  "All prices exclude VAT",
                  "Project timeline: 22 weeks from kickoff to launch",
                  "Includes 30 days of post-launch support and bug fixes",
                  "Additional features and enhancements can be quoted separately",
                ]}
              />
            </div>

            {/* Ongoing Support Section */}
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
                ONGOING SUPPORT
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-default, 'PP Mori', sans-serif)",
                  fontSize: "var(--text-size-small, 16px)",
                  lineHeight: "var(--text-line-small, 22px)",
                  color: "var(--color-text-primary)",
                  margin: 0,
                  marginBottom: "var(--spacing-xl)",
                }}
              >
                Following the successful launch, we offer ongoing support and maintenance services to ensure your
                platform continues to perform optimally and evolve with your business needs. Our support packages
                include proactive monitoring, regular updates, feature enhancements, and dedicated technical assistance.
              </p>

              <div style={{ marginTop: "var(--spacing-xl)" }}>
                <Table
                  columns={["Service Level", "What's Included"]}
                  rows={[
                    {
                      label: "Essential Support",
                      content: (
                        <ul>
                          <li>24/7 platform monitoring and uptime alerts</li>
                          <li>Security updates and patches</li>
                          <li>Bug fixes and minor adjustments</li>
                          <li>Monthly performance reports</li>
                          <li>Email support (48-hour response time)</li>
                        </ul>
                      ),
                    },
                    {
                      label: "Premium Support",
                      tooltip:
                        "Includes all Essential Support features plus priority access, dedicated account management, and development hours for enhancements.",
                      content: (
                        <ul>
                          <li>All Essential Support features</li>
                          <li>Priority support (24-hour response time)</li>
                          <li>Dedicated account manager and technical lead</li>
                          <li>Quarterly strategic reviews and optimization recommendations</li>
                          <li>Up to 20 hours/month of development for new features and enhancements</li>
                          <li>A/B testing and conversion optimization support</li>
                        </ul>
                      ),
                    },
                  ]}
                />
              </div>

              <p
                style={{
                  fontFamily: "var(--font-default, 'PP Mori', sans-serif)",
                  fontSize: "var(--text-size-small, 16px)",
                  lineHeight: "var(--text-line-small, 22px)",
                  color: "var(--color-text-primary)",
                  margin: 0,
                  marginTop: "var(--spacing-l, 24px)",
                }}
              >
                Our support services ensure VRAI can focus on growing your luxury jewelry business while we handle the
                technical aspects, keeping your platform secure, fast, and continuously improving.
              </p>

              {/* Monthly Support Budget */}
              <div style={{ marginTop: "var(--spacing-xl)" }}>
                <h4
                  style={{
                    fontFamily: "var(--font-default, 'PP Mori', sans-serif)",
                    fontSize: "var(--text-size-small, 16px)",
                    lineHeight: "var(--text-line-small, 22px)",
                    fontWeight: 600,
                    color: "var(--color-text-primary)",
                    textTransform: "uppercase",
                    margin: 0,
                    marginBottom: "var(--spacing-m, 16px)",
                  }}
                >
                  Monthly Support Pricing
                </h4>
                <BudgetSection
                  items={[
                    {
                      category: "ESSENTIAL SUPPORT",
                      description: "24/7 monitoring, security updates, bug fixes, and email support",
                      amount: "€2,500/month",
                    },
                    {
                      category: "PREMIUM SUPPORT",
                      description:
                        "All Essential features plus priority support, quarterly reviews, and 20 dev hours/month",
                      amount: "€5,500/month",
                    },
                  ]}
                  total=""
                  notes={[
                    "Minimum 3-month commitment for support packages",
                    "Custom enterprise support packages available upon request",
                    "Development hours can be rolled over to the following month (max 2 months)",
                    "Support packages can begin immediately after launch",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <TitleSection overheader="TEAM" />

        <div style={{ marginTop: "var(--spacing-xl)" }}>
          <TeamSection
            members={[
              {
                name: "Giorgio G",
                title: "Tech Lead",
                imageSrc: "/professional-tech-lead.png",
                imageAlt: "Giorgio G - Tech Lead",
                modalData: {
                  name: "GIORGIO G",
                  title: "TECH LEAD",
                  imageSrc: "/professional-tech-lead.png",
                  imageAlt: "Giorgio G - Tech Lead",
                  bio: [
                    'Con más de ocho años de experiencia en desarrollo de software, Giorgio ha liderado proyectos complejos y de alto impacto para compañías como dormakaba, Iberia o Inditex. Conocido cariñosamente como "Girgetto", se centra en construir soluciones digitales escalables, de alto rendimiento y alineadas con los objetivos de negocio.',
                    "Desde el diseño de arquitecturas eficientes hasta la implementación de sistemas robustos, combina una sólida base técnica con una visión estratégica. Destaca por su capacidad para alinear equipos de desarrollo en torno a metas comunes, garantizando coherencia, claridad y entregas de calidad en cada fase del proyecto.",
                    "Su enfoque práctico, colaborativo y orientado a resultados, junto con una fuerte vocación por la innovación y las buenas prácticas, lo convierten en un aliado clave para impulsar el éxito a largo plazo.",
                  ],
                  languages: "ITALIAN (NATIVE), SPANISH (ADVANCED), ENGLISH (ADVANCED)",
                  skills:
                    "REACT JS, NEXT JS, VUE JS, ANGULAR, TAILWINDCSS, TYPESCRIPT, REACT NATIVE, EXPO, NODE, EXPRESS, TYPESCRIPT, MONGO DB, SQL, POSTGRESQL, PYTHON, LANG CHAIN, OPENAI, GPT-40, AZURE OPENAI, KUBERNETES, DOCKER, AWS, AZURE",
                },
              },
              {
                name: "Maria S",
                title: "Senior Frontend Developer",
                imageSrc: "/frontend-developer-portrait.png",
                imageAlt: "Maria S - Senior Frontend Developer",
                modalData: {
                  name: "MARIA S",
                  title: "SENIOR FRONTEND DEVELOPER",
                  imageSrc: "/frontend-developer-portrait.png",
                  imageAlt: "Maria S - Senior Frontend Developer",
                  bio: [
                    "Maria is a passionate frontend developer with over 6 years of experience creating beautiful, accessible, and performant user interfaces. She specializes in React, Next.js, and modern CSS frameworks, with particular expertise in e-commerce platforms.",
                    "Her attention to detail and commitment to user experience has helped numerous luxury brands achieve their digital goals. Maria is also an advocate for web accessibility and inclusive design practices, ensuring that every user can enjoy a premium shopping experience.",
                    "For the VRAI project, Maria will lead frontend development, implementing the UI designs with pixel-perfect precision and ensuring optimal performance across all devices.",
                  ],
                  languages: "SPANISH (NATIVE), ENGLISH (FLUENT), FRENCH (INTERMEDIATE)",
                  skills:
                    "REACT JS, NEXT JS, TYPESCRIPT, TAILWIND CSS, STYLED COMPONENTS, FIGMA, STORYBOOK, JEST, CYPRESS, SHOPIFY PLUS, E-COMMERCE UX",
                },
              },
              {
                name: "Carlos M",
                title: "DevOps & Security Engineer",
                imageSrc: "/professional-devops-engineer-portrait.jpg",
                imageAlt: "Carlos M - DevOps & Security Engineer",
                modalData: {
                  name: "CARLOS M",
                  title: "DEVOPS & SECURITY ENGINEER",
                  imageSrc: "/professional-devops-engineer-portrait.jpg",
                  imageAlt: "Carlos M - DevOps & Security Engineer",
                  bio: [
                    "Carlos is a DevOps and security expert with 7 years of experience in cloud infrastructure, automation, and cybersecurity. He specializes in building robust CI/CD pipelines and maintaining highly available, secure e-commerce systems.",
                    "His expertise includes infrastructure-as-code, container orchestration, and implementing security best practices throughout the development lifecycle. Carlos has helped numerous e-commerce platforms achieve optimal performance while maintaining the highest security standards.",
                    "For the VRAI project, Carlos will architect and manage the cloud infrastructure, implement security measures, and ensure the platform is scalable, secure, and performs flawlessly under high traffic.",
                  ],
                  languages: "SPANISH (NATIVE), ENGLISH (FLUENT)",
                  skills:
                    "AWS, AZURE, DOCKER, KUBERNETES, TERRAFORM, JENKINS, GITHUB ACTIONS, SECURITY AUDITS, PENETRATION TESTING, PCI DSS, PERFORMANCE OPTIMIZATION",
                },
              },
              {
                name: "Sofia R",
                title: "UX/UI Designer & Researcher",
                imageSrc: "/professional-ux-designer-portrait.jpg",
                imageAlt: "Sofia R - UX/UI Designer & Researcher",
                modalData: {
                  name: "SOFIA R",
                  title: "UX/UI DESIGNER & RESEARCHER",
                  imageSrc: "/professional-ux-designer-portrait.jpg",
                  imageAlt: "Sofia R - UX/UI Designer & Researcher",
                  bio: [
                    "Sofia is a creative designer and user researcher with a keen eye for aesthetics and user-centered design. She has 7 years of experience crafting intuitive interfaces and conducting comprehensive UX research for luxury e-commerce brands.",
                    "Her work focuses on creating cohesive visual languages that enhance user experience while maintaining brand consistency. Sofia specializes in conversion rate optimization, user journey mapping, and creating data-driven design solutions.",
                    "For the VRAI project, Sofia will lead the design phase, creating high-fidelity mockups, conducting user testing, and ensuring every interaction delights customers while driving conversions.",
                  ],
                  languages: "SPANISH (NATIVE), ENGLISH (FLUENT), PORTUGUESE (INTERMEDIATE)",
                  skills:
                    "FIGMA, SKETCH, ADOBE XD, USER RESEARCH, USABILITY TESTING, A/B TESTING, CONVERSION OPTIMIZATION, ACCESSIBILITY, HEATMAP ANALYSIS, CUSTOMER JOURNEY MAPPING",
                },
              },
            ]}
          />
        </div>
      </section>

      {/* Case Studies Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <TitleSection overheader="CASE STUDIES" title="RELEVANT EXPERIENCE" />

        <div style={{ marginTop: "var(--spacing-xl)" }}>
          <CaseStudiesSection
            caseStudies={[
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
                        "When dormakaba approached Tailor Hub, they faced a multi-faceted challenge. Their monolithic CMS, Coremedia, had become an operational bottleneck, limiting flexibility for content editors across 40 countries and 35 languages. Additionally, dormakaba needed to execute a seamless transition between technical providers while simultaneously launching their newly restructured digital architecture.",
                      ],
                    },
                    {
                      title: "THE SOLUTION",
                      paragraphs: [
                        "We delivered a comprehensive digital transformation, migrating from Coremedia to a modern, flexible CMS architecture that empowers content editors globally while maintaining enterprise-grade security and performance standards.",
                      ],
                    },
                  ],
                  insights: [
                    { value: "40+", label: "COUNTRIES SUPPORTED" },
                    { value: "35", label: "LANGUAGES" },
                  ],
                  quotes: [
                    {
                      text: "I am very pleased with the Tailor team. They adapt exceptionally well to our needs, demonstrating great flexibility and responsiveness. Additionally, they always meet the established deadlines.",
                      author: "PABLO GONZALEZ CELA - GLOBAL DIGITAL SOLUTIONS LEAD AT DORMAKABA",
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
            ]}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <TitleSection overheader="FREQUENTLY ASKED QUESTIONS" />

        <div style={{ marginTop: "var(--spacing-xl)" }}>
          <FAQ
            items={[
              {
                question: "What is included in the €50,000 project scope?",
                answer:
                  "The complete project includes discovery and design, full platform development on Shopify Plus, advanced 3D product customization, personalization features, comprehensive testing, security implementation, performance optimization, team training, and 30 days of post-launch support. All deliverables across the four phases are included in this fixed price.",
              },
              {
                question: "How long will the complete project take?",
                answer:
                  "The complete project timeline is 22 weeks (approximately 5.5 months) from kickoff to launch. This is divided into: Discovery & Design (4 weeks), Core Development (8 weeks), Advanced Features (6 weeks), and Testing & Launch (4 weeks). We can adjust the timeline based on your specific launch requirements.",
              },
              {
                question: "What happens if the project requirements change during development?",
                answer:
                  "We follow an agile methodology that allows for flexibility. Minor adjustments can typically be accommodated within the existing scope. For significant scope changes, we'll provide a change request with timeline and cost implications. Our goal is to balance flexibility with project predictability.",
              },
              {
                question: "Will the platform be mobile-responsive?",
                answer:
                  "Absolutely. The platform will be fully responsive and optimized for all devices including smartphones, tablets, and desktops. We follow a mobile-first design approach to ensure the luxury shopping experience is exceptional on every screen size. This includes optimized 3D visualization and customization tools for mobile devices.",
              },
              {
                question: "How do you ensure the platform is secure and compliant?",
                answer:
                  "Security is built into every phase of development. We implement PCI DSS compliance for payment processing, use industry-standard encryption, conduct security audits, implement secure authentication, and follow OWASP security guidelines. The platform will also undergo penetration testing before launch.",
              },
              {
                question: "Can we see progress during development?",
                answer:
                  "Yes! We provide access to a staging environment where you can review progress throughout development. We conduct bi-weekly demo sessions to showcase completed features, gather feedback, and ensure alignment with your vision. You'll have full visibility into the development process.",
              },
              {
                question: "What training and documentation will be provided?",
                answer:
                  "We provide comprehensive training for your team on platform administration, content management, product uploads, order processing, and analytics. This includes live training sessions, video tutorials, and detailed documentation. We ensure your team feels confident managing the platform independently.",
              },
              {
                question: "What support is available after launch?",
                answer:
                  "The project includes 30 days of post-launch support for bug fixes and adjustments. After that, we offer two ongoing support packages: Essential Support (€2,500/month) with monitoring and maintenance, or Premium Support (€5,500/month) which includes dedicated account management and 20 hours/month of development for new features and enhancements.",
              },
            ]}
          />
        </div>
      </section>
    </LandingLayout>
  )
}
