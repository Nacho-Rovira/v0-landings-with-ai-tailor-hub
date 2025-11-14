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
          concepts={["E-COMMERCE <span> AUDIT", "PERFORMANCE <span> OPTIMIZATION", "LUXURY <span> EXPERIENCE"]}
          header="COMPREHENSIVE E-COMMERCE AUDIT & OPTIMIZATION FOR VRAI'S LUXURY JEWELRY PLATFORM"
        />
      </section>

      {/* HeaderBox Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <HeaderBox
          overheader="A PROPOSAL FOR VRAI"
          header="Expert audit and optimization of your luxury e-commerce platform to enhance performance, security, and customer experience"
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
              AUDIT SCOPE
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
                    "VRAI has established itself as a leader in the luxury lab-grown diamond jewelry market with a sophisticated Shopify Plus e-commerce platform. Since the initial launch, the platform has achieved impressive results with a 150% sales increase and a 4.8/5 customer satisfaction rating.",
                    "However, as the business continues to grow and evolve, it's crucial to conduct a comprehensive audit to ensure the platform maintains peak performance, security, and user experience. This audit will identify optimization opportunities, address technical debt, and provide a roadmap for future enhancements that align with VRAI's luxury brand positioning and business objectives.",
                  ],
                },
                {
                  title: "OBJECTIVES",
                  paragraphs: [
                    "The primary objective of this audit is to conduct a thorough evaluation of VRAI's e-commerce platform across four key dimensions: technical performance, security compliance, user experience, and business intelligence capabilities.",
                    "We aim to identify areas for improvement, provide actionable recommendations, and create a prioritized roadmap for optimization. The audit will ensure the platform continues to deliver exceptional performance while maintaining the highest standards of security and providing an unparalleled luxury shopping experience that drives conversion and customer loyalty.",
                  ],
                },
                {
                  title: "OUR APPROACH",
                  paragraphs: [
                    "Tailor Hub's audit methodology combines automated analysis tools with expert manual review to provide comprehensive insights. Our team of e-commerce specialists, security experts, and UX professionals will work collaboratively to examine every aspect of your platform.",
                    "We follow a structured approach that includes stakeholder interviews, data analysis, technical testing, and competitive benchmarking. Throughout the audit, we maintain open communication with your team, providing regular updates and preliminary findings. Our deliverables include detailed reports, prioritized recommendations, and a practical implementation roadmap tailored to your business goals and technical constraints.",
                  ],
                },
              ]}
            />

            {/* Audit Scope Section */}
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
                AUDIT SCOPE
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
                Our comprehensive audit will cover the following key areas of your e-commerce platform:
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
                  "Performance Analysis",
                  "Security Assessment",
                  "UX/UI Review",
                  "Conversion Optimization",
                  "Mobile Experience",
                  "Checkout Flow",
                  "Product Customization",
                  "3D Visualization",
                  "Inventory Management",
                  "Analytics & Tracking",
                  "SEO Audit",
                  "Accessibility Compliance",
                ].map((area, index) => (
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
                    {area}
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
                    title: "PLATFORM AUDIT & ANALYSIS",
                    description:
                      "Comprehensive technical audit of your Shopify Plus platform, including performance benchmarking, code review, and infrastructure analysis. We'll examine your current architecture, identify bottlenecks, and assess scalability for future growth.",
                    duration: "2 WEEKS",
                    deliverables: [
                      "Technical audit report with findings and severity ratings",
                      "Performance benchmarks and load testing results",
                      "Code quality assessment and technical debt analysis",
                      "Infrastructure and hosting optimization recommendations",
                    ],
                  },
                  {
                    number: "02",
                    title: "PERFORMANCE & SECURITY REVIEW",
                    description:
                      "In-depth security assessment and performance optimization analysis. We'll conduct penetration testing, review security protocols, analyze page load times, and evaluate your platform's compliance with industry standards and best practices.",
                    duration: "2 WEEKS",
                    deliverables: [
                      "Security audit report with vulnerability assessment",
                      "PCI DSS compliance review and recommendations",
                      "Performance optimization strategy with quick wins",
                      "Mobile performance analysis and improvement plan",
                    ],
                  },
                  {
                    number: "03",
                    title: "UX/UI ASSESSMENT & RECOMMENDATIONS",
                    description:
                      "Comprehensive user experience evaluation including customer journey mapping, conversion funnel analysis, and usability testing. We'll assess your 3D visualization tools, product customization features, and checkout flow to identify friction points and opportunities for enhancement.",
                    duration: "2 WEEKS",
                    deliverables: [
                      "UX audit report with heatmaps and user behavior analysis",
                      "Conversion rate optimization recommendations",
                      "Accessibility audit (WCAG 2.1 compliance)",
                      "Mobile UX improvement strategy",
                    ],
                  },
                  {
                    number: "04",
                    title: "IMPLEMENTATION ROADMAP & SUPPORT",
                    description:
                      "Creation of a prioritized implementation roadmap based on audit findings, with clear timelines, resource requirements, and expected impact. We'll provide ongoing support during the initial implementation phase to ensure successful execution of critical improvements.",
                    duration: "1 WEEK + ONGOING",
                    deliverables: [
                      "Prioritized implementation roadmap with timelines",
                      "Cost-benefit analysis for recommended improvements",
                      "Quick wins implementation guide",
                      "30 days of post-audit support and consultation",
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
                    category: "PLATFORM AUDIT & ANALYSIS",
                    description: "Technical audit, performance benchmarking, and code review",
                    amount: "€8,000",
                  },
                  {
                    category: "PERFORMANCE & SECURITY REVIEW",
                    description: "Security assessment, penetration testing, and performance optimization",
                    amount: "€9,500",
                  },
                  {
                    category: "UX/UI ASSESSMENT & RECOMMENDATIONS",
                    description: "User experience evaluation, conversion analysis, and accessibility audit",
                    amount: "€7,500",
                  },
                  {
                    category: "IMPLEMENTATION ROADMAP & SUPPORT",
                    description: "Prioritized roadmap creation and 30 days of post-audit support",
                    amount: "€5,000",
                  },
                ]}
                total="€30,000"
                notes={[
                  "Payment terms: 50% upfront, 50% upon completion of audit",
                  "All prices exclude VAT",
                  "Implementation of recommendations can be quoted separately based on priorities",
                  "Extended support packages available after initial 30-day period",
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
                Following the audit, we offer ongoing support services to help you implement recommendations and
                maintain optimal platform performance. Our support packages are designed to provide continuous value and
                ensure your e-commerce platform remains at peak performance.
              </p>

              <div style={{ marginTop: "var(--spacing-xl)" }}>
                <Table
                  columns={["Service Level", "What's Included"]}
                  rows={[
                    {
                      label: "Essential Support",
                      content: (
                        <ul>
                          <li>Monthly performance monitoring and reporting</li>
                          <li>Security updates and patches</li>
                          <li>Bug fixes and minor adjustments</li>
                          <li>Email support (48-hour response time)</li>
                        </ul>
                      ),
                    },
                    {
                      label: "Premium Support",
                      tooltip:
                        "Includes all Essential Support features plus priority access and dedicated account management.",
                      content: (
                        <ul>
                          <li>All Essential Support features</li>
                          <li>Priority support (24-hour response time)</li>
                          <li>Quarterly optimization reviews</li>
                          <li>Dedicated account manager</li>
                          <li>Implementation of audit recommendations (up to 20 hours/month)</li>
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
                Our support services are designed to provide VRAI with peace of mind and continuous improvement,
                allowing you to focus on growing your luxury jewelry business while we ensure your platform delivers
                exceptional performance and customer experience.
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
                      description: "Monthly monitoring, security updates, and email support",
                      amount: "€2,500/month",
                    },
                    {
                      category: "PREMIUM SUPPORT",
                      description:
                        "All Essential features plus priority support, quarterly reviews, and implementation hours",
                      amount: "€5,500/month",
                    },
                  ]}
                  total=""
                  notes={[
                    "Minimum 3-month commitment for support packages",
                    "Custom enterprise support packages available upon request",
                    "Implementation hours can be rolled over to the following month",
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
                    "For the VRAI audit, Maria will lead the UX/UI assessment, analyzing the customer journey, conversion funnels, and identifying opportunities to enhance the luxury shopping experience.",
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
                    "His expertise includes penetration testing, security audits, and compliance assessments for PCI DSS and other industry standards. Carlos has helped numerous e-commerce platforms achieve optimal performance while maintaining the highest security standards.",
                    "For the VRAI audit, Carlos will conduct the comprehensive security assessment, performance benchmarking, and infrastructure review to ensure your platform is secure, fast, and scalable.",
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
                    "Her work focuses on creating cohesive visual languages that enhance user experience while maintaining brand consistency. Sofia specializes in conversion rate optimization, A/B testing, and creating data-driven design recommendations.",
                    "For the VRAI audit, Sofia will lead the user research, conduct usability testing, analyze customer behavior patterns, and provide actionable recommendations to enhance the luxury shopping experience and increase conversions.",
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
                question: "What is included in the e-commerce audit?",
                answer:
                  "Our comprehensive audit covers technical performance, security assessment, UX/UI evaluation, conversion optimization, mobile experience, checkout flow analysis, product customization review, 3D visualization assessment, inventory management, analytics tracking, SEO audit, and accessibility compliance. Each area is thoroughly examined with detailed findings and actionable recommendations.",
              },
              {
                question: "How long does the audit process take?",
                answer:
                  "The complete audit process takes approximately 7 weeks, divided into four phases: Platform Audit & Analysis (2 weeks), Performance & Security Review (2 weeks), UX/UI Assessment & Recommendations (2 weeks), and Implementation Roadmap & Support (1 week plus 30 days of ongoing consultation).",
              },
              {
                question: "Will the audit disrupt our current operations?",
                answer:
                  "No, our audit process is designed to be non-intrusive. We conduct most of our analysis using read-only access and testing environments. Any testing that requires interaction with the live platform is carefully scheduled during low-traffic periods and coordinated with your team to minimize any potential impact.",
              },
              {
                question: "What happens after the audit is complete?",
                answer:
                  "Upon completion, you'll receive comprehensive reports for each audit phase, a prioritized implementation roadmap with timelines and cost estimates, and 30 days of post-audit support. We can also provide ongoing support packages or implementation services to help you execute the recommended improvements.",
              },
              {
                question: "Can you help implement the audit recommendations?",
                answer:
                  "Yes, absolutely. After the audit, we can provide detailed quotes for implementing any or all of the recommended improvements. We offer flexible engagement models including dedicated development teams, sprint-based projects, or ongoing support packages to fit your needs and timeline.",
              },
              {
                question: "How do you prioritize the audit findings?",
                answer:
                  "We use a comprehensive prioritization framework that considers impact on business goals, technical complexity, implementation cost, and urgency. Each finding is categorized as Critical, High, Medium, or Low priority, with clear justification and expected ROI. This helps you make informed decisions about which improvements to tackle first.",
              },
              {
                question: "What makes Tailor Hub qualified to audit VRAI's platform?",
                answer:
                  "Tailor Hub has extensive experience with luxury e-commerce platforms, including our previous successful work with VRAI that resulted in a 150% sales increase. Our team includes specialists in Shopify Plus, e-commerce UX, security compliance, and performance optimization. We're also ISO 27001 certified, ensuring the highest standards of information security.",
              },
              {
                question: "Do you provide ongoing support after the audit?",
                answer:
                  "Yes, we offer two levels of ongoing support: Essential Support (€2,500/month) includes monthly monitoring, security updates, and email support; Premium Support (€5,500/month) adds priority support, quarterly reviews, dedicated account management, and up to 20 hours/month of implementation work. Both require a minimum 3-month commitment.",
              },
            ]}
          />
        </div>
      </section>
    </LandingLayout>
  )
}
