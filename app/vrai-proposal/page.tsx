"use client"

import { LandingLayout } from "@/components/LandingLayout/LandingLayout"
import { HighlightSection } from "@/components/HighlightSection/HighlightSection"
import { HeaderBox } from "@/components/HeaderBox/HeaderBox"
import { BodyText } from "@/components/BodyText/BodyText"
import { MenuSidebar, MenuSidebarItem } from "@/components/MenuSidebar/MenuSidebar"
import { TitleSection } from "@/components/TitleSection/TitleSection"
import { TechBox } from "@/components/TechBox/TechBox"
import { TimelineSection } from "@/components/TimelineSection/TimelineSection"
import { BudgetSection } from "@/components/BudgetSection/BudgetSection"
import { BoxSection } from "@/components/BoxSection/BoxSection"
import { TeamSection } from "@/components/TeamSection/TeamSection"
import { CaseStudiesSection } from "@/components/CaseStudiesSection/CaseStudiesSection"
import { Highlight2Section } from "@/components/Highlight2Section/Highlight2Section"
import { FAQ } from "@/components/FAQ/FAQ"
import Image from "next/image"

export default function VRAIProposalPage() {
  return (
    <LandingLayout>
      {/* Hero Highlight Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <HighlightSection
          concepts={["LUXURY <span> E-COMMERCE", "LAB-GROWN <span> DIAMONDS", "DIGITAL <span> EXCELLENCE"]}
          header="CRAFTING THE NEXT GENERATION LUXURY E-COMMERCE PLATFORM FOR VRAI'S LAB-GROWN DIAMOND JEWELRY"
        />
      </section>

      {/* HeaderBox Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <HeaderBox
          overheader="A PROPOSAL FOR VRAI"
          header="Comprehensive e-commerce platform development with 3D product visualization, personalization engine, and seamless luxury shopping experience"
          buttonLabel="VIEW PROPOSAL"
          onButtonClick={() => {
            document.querySelector("#proposal-content")?.scrollIntoView({ behavior: "smooth" })
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
            alt="VRAI luxury lab-grown diamond jewelry showcase"
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

      {/* Proposal Content with Sidebar */}
      <section id="proposal-content" style={{ marginBottom: "var(--spacing-9xl)" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "var(--spacing-xxl)",
            width: "100%",
          }}
        >
          {/* Menu Sidebar */}
          <MenuSidebar autoDetectActive>
            <MenuSidebarItem href="#challenge" number={1}>
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
            <MenuSidebarItem href="#support" number={7}>
              ONGOING SUPPORT
            </MenuSidebarItem>
          </MenuSidebar>

          {/* Body Content */}
          <div style={{ flex: 1, maxWidth: "702px" }}>
            {/* Body Text Sections */}
            <BodyText
              sections={[
                {
                  title: "CHALLENGE / CONTEXT",
                  paragraphs: [
                    "VRAI is redefining luxury jewelry through lab-grown diamonds that combine ethical sourcing with uncompromising quality. As your brand scales globally, the digital experience must match the sophistication of your products.",
                    "The challenge lies in creating a next-generation e-commerce platform that showcases exquisite jewelry through immersive 3D visualization, intuitive customization tools, and a frictionless purchase journey—all while delivering the performance, security, and elegance expected by discerning luxury consumers.",
                  ],
                },
                {
                  title: "OBJECTIVES",
                  paragraphs: [
                    "Our primary objective is to design and develop a world-class e-commerce platform that elevates VRAI's digital presence and drives measurable business growth. The platform will feature cutting-edge product visualization, personalized shopping experiences, and conversion-optimized checkout flows.",
                    "We aim to create a scalable, secure, high-performance solution that supports global expansion while providing rich analytics for data-driven decision making. The platform will embody VRAI's brand values: transparency, innovation, and luxury craftsmanship.",
                  ],
                },
                {
                  title: "OUR APPROACH",
                  paragraphs: [
                    "Tailor Hub brings deep expertise in luxury e-commerce, combining technical excellence with an understanding of high-end consumer behavior. Our multidisciplinary team collaborates closely with stakeholders throughout the project lifecycle.",
                    "We follow an agile methodology with regular sprints, continuous feedback loops, and iterative refinement. Each phase includes thorough testing, optimization, and user validation to ensure the platform exceeds expectations while balancing speed to market with long-term scalability and maintainability.",
                  ],
                },
              ]}
            />

            {/* Technology Section */}
            <div id="technology" style={{ marginTop: "var(--spacing-4xl)" }}>
              <h3
                style={{
                  fontFamily: "var(--font-default)",
                  fontSize: "var(--text-size-large)",
                  lineHeight: "var(--text-line-large)",
                  fontWeight: 400,
                  color: "var(--color-text-primary)",
                  textTransform: "uppercase",
                  margin: 0,
                  marginBottom: "var(--spacing-m)",
                }}
              >
                TECHNOLOGY & ARCHITECTURE
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-default)",
                  fontSize: "var(--text-size-small)",
                  lineHeight: "var(--text-line-small)",
                  color: "var(--color-text-primary)",
                  margin: 0,
                  marginBottom: "var(--spacing-xl)",
                }}
              >
                We leverage modern, proven technologies to build a robust and scalable luxury e-commerce platform. Our
                tech stack ensures exceptional performance, security, and user experience across all touchpoints:
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "var(--spacing-m)",
                }}
              >
                <TechBox
                  title="FRONT-END"
                  technologies={[
                    "NEXT JS",
                    "REACT JS",
                    "TYPESCRIPT",
                    "TAILWIND CSS",
                    "THREE JS",
                    "FRAMER MOTION",
                  ]}
                />
                <TechBox
                  title="BACK-END & DATA"
                  technologies={["NODE", "EXPRESS", "GRAPHQL", "POSTGRESQL", "REDIS", "ELASTIC SEARCH"]}
                />
                <TechBox
                  title="INFRASTRUCTURE"
                  technologies={["AWS", "DOCKER", "KUBERNETES", "CLOUDFRONT", "S3", "LAMBDA"]}
                />
              </div>
            </div>

            {/* Roadmap & Phases Section */}
            <div id="roadmap" style={{ marginTop: "var(--spacing-4xl)" }}>
              <h3
                style={{
                  fontFamily: "var(--font-default)",
                  fontSize: "var(--text-size-large)",
                  lineHeight: "var(--text-line-large)",
                  fontWeight: 400,
                  color: "var(--color-text-primary)",
                  textTransform: "uppercase",
                  margin: 0,
                  marginBottom: "var(--spacing-m)",
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
                      "Comprehensive discovery workshops with stakeholders to define requirements, user journeys, and success metrics. We'll create detailed wireframes, high-fidelity mockups, and interactive prototypes for the complete platform. This phase includes UX research, brand alignment, technical architecture planning, and establishing the design system foundation.",
                    duration: "4 WEEKS",
                    deliverables: [
                      "Stakeholder interviews and requirements documentation",
                      "User research, personas, and journey mapping",
                      "Information architecture and user flows",
                      "Design system and component library",
                      "High-fidelity UI designs for key pages",
                      "Interactive prototypes for user testing",
                      "Technical architecture documentation",
                    ],
                  },
                  {
                    number: "02",
                    title: "CORE PLATFORM DEVELOPMENT",
                    description:
                      "Development of the platform's foundational architecture and essential e-commerce features. This includes Shopify Plus setup, custom theme development, product catalog implementation, responsive design, and basic 3D product visualization. We'll establish CI/CD pipelines, testing frameworks, and development workflows for efficient delivery.",
                    duration: "8 WEEKS",
                    deliverables: [
                      "Shopify Plus configuration and customization",
                      "Responsive frontend with Next.js",
                      "Product catalog with advanced filtering",
                      "Basic 3D product viewer implementation",
                      "Shopping cart and checkout flow (phase 1)",
                      "Content management system integration",
                      "API development and integrations",
                      "CI/CD pipeline and staging environment",
                    ],
                  },
                  {
                    number: "03",
                    title: "ADVANCED FEATURES & CUSTOMIZATION",
                    description:
                      "Implementation of sophisticated features that differentiate VRAI's platform. This includes advanced 3D product customization, real-time inventory management, personalization engine, analytics integration, and optimized checkout experience. We'll implement customer accounts, wishlist functionality, order tracking, and email automation.",
                    duration: "6 WEEKS",
                    deliverables: [
                      "Advanced 3D customization with real-time rendering",
                      "AI-powered personalization and recommendations",
                      "Customer account portal with order history",
                      "Wishlist and favorites functionality",
                      "Real-time inventory management",
                      "Analytics and conversion tracking",
                      "Email automation and customer communications",
                      "Gift card and promotional systems",
                    ],
                  },
                  {
                    number: "04",
                    title: "TESTING, OPTIMIZATION & LAUNCH",
                    description:
                      "Comprehensive quality assurance, performance optimization, and security hardening. This phase includes cross-browser and device testing, load testing, accessibility compliance verification, SEO optimization, and final content migration. We'll conduct user acceptance testing, provide training for the VRAI team, and ensure a successful launch with monitoring and support.",
                    duration: "4 WEEKS",
                    deliverables: [
                      "Comprehensive QA across devices and browsers",
                      "Performance optimization and load testing",
                      "Security audit and PCI DSS compliance",
                      "Accessibility testing (WCAG 2.1 AA)",
                      "SEO optimization and search console setup",
                      "Team training and documentation",
                      "Production launch with monitoring",
                      "30-day post-launch support included",
                    ],
                  },
                ]}
              />
            </div>

            {/* Budget Section */}
            <div id="budget" style={{ marginTop: "var(--spacing-4xl)" }}>
              <h3
                style={{
                  fontFamily: "var(--font-default)",
                  fontSize: "var(--text-size-large)",
                  lineHeight: "var(--text-line-large)",
                  fontWeight: 400,
                  color: "var(--color-text-primary)",
                  textTransform: "uppercase",
                  margin: 0,
                  marginBottom: "var(--spacing-m)",
                }}
              >
                BUDGET & CONDITIONS
              </h3>
              <BudgetSection
                items={[
                  {
                    category: "PHASE 01: DISCOVERY & DESIGN",
                    description: "User research, UX/UI design, prototyping, technical planning",
                    amount: "€12,000",
                  },
                  {
                    category: "PHASE 02: CORE PLATFORM DEVELOPMENT",
                    description: "Platform setup, core e-commerce features, foundational architecture",
                    amount: "€18,000",
                  },
                  {
                    category: "PHASE 03: ADVANCED FEATURES & CUSTOMIZATION",
                    description: "3D customization, personalization, analytics, advanced functionality",
                    amount: "€14,000",
                  },
                  {
                    category: "PHASE 04: TESTING, OPTIMIZATION & LAUNCH",
                    description: "QA testing, performance optimization, security audit, launch support",
                    amount: "€6,000",
                  },
                ]}
                total="€50,000"
                notes={[
                  "Payment terms: 30% upfront, 40% at Phase 2 completion, 30% upon final launch",
                  "All prices exclude VAT",
                  "Project timeline: 22 weeks from kickoff to launch",
                  "Includes 30 days of post-launch support and bug fixes",
                  "Additional features and enhancements quoted separately",
                  "Shopify Plus subscription and third-party service costs not included",
                ]}
              />
            </div>

            {/* Ongoing Support Section */}
            <div id="support" style={{ marginTop: "var(--spacing-4xl)" }}>
              <h3
                style={{
                  fontFamily: "var(--font-default)",
                  fontSize: "var(--text-size-large)",
                  lineHeight: "var(--text-line-large)",
                  fontWeight: 400,
                  color: "var(--color-text-primary)",
                  textTransform: "uppercase",
                  margin: 0,
                  marginBottom: "var(--spacing-m)",
                }}
              >
                ONGOING SUPPORT
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-default)",
                  fontSize: "var(--text-size-small)",
                  lineHeight: "var(--text-line-small)",
                  color: "var(--color-text-primary)",
                  margin: 0,
                  marginBottom: "var(--spacing-xl)",
                }}
              >
                Following the successful launch, we offer ongoing support and maintenance services to ensure your
                platform continues to perform optimally and evolve with your business needs. Our support packages include
                proactive monitoring, regular updates, feature enhancements, and dedicated technical assistance.
              </p>

              <BudgetSection
                items={[
                  {
                    category: "ESSENTIAL SUPPORT",
                    description: "24/7 monitoring, security updates, bug fixes, email support",
                    amount: "€2,500/month",
                  },
                  {
                    category: "PREMIUM SUPPORT",
                    description: "All Essential + priority support, quarterly reviews, 20 dev hours/month",
                    amount: "€5,500/month",
                  },
                ]}
                total=""
                notes={[
                  "Minimum 3-month commitment for support packages",
                  "Custom enterprise packages available upon request",
                  "Development hours rollover to next month (max 2 months)",
                  "Support packages can begin immediately after launch",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <TitleSection overheader="SERVICES" />

        <div
          style={{
            marginTop: "var(--gap-header-1)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-xl)",
          }}
        >
          <BoxSection
            overheader="S/ 01"
            header="E-COMMERCE DEVELOPMENT"
            bodyText="End-to-end development of sophisticated e-commerce platforms built for scale, performance, and conversion. We specialize in luxury retail experiences that combine aesthetic excellence with technical precision."
            imageSrc="/images/design-mode/desarrollo de software(2).jpeg"
            imageAlt="E-commerce development services"
          />

          <BoxSection
            overheader="S/ 02"
            header="3D VISUALIZATION & AR"
            bodyText="Cutting-edge 3D product visualization and augmented reality experiences that allow customers to interact with products in immersive detail. From real-time rendering to virtual try-on capabilities."
            imageSrc="/images/design-mode/Design systems.png"
            imageAlt="3D visualization and AR services"
          />

          <BoxSection
            overheader="S/ 03"
            header="AI-POWERED PERSONALIZATION"
            bodyText="Intelligent recommendation engines and personalization systems that analyze user behavior, preferences, and purchase patterns to deliver tailored shopping experiences that drive conversion and loyalty."
            imageSrc="/images/design-mode/auditoria y formacion(2).jpeg"
            imageAlt="AI personalization services"
          />
        </div>
      </section>

      {/* Team Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <TitleSection overheader="TEAM" />

        <div style={{ marginTop: "var(--gap-header-1)" }}>
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
                  imageSrc: "/professional-tech-lead-portrait-full.jpg",
                  imageAlt: "Giorgio G - Tech Lead",
                  bio: [
                    "With over 8 years of experience in software development, Giorgio has led complex projects for companies like dormakaba, Iberia, and Inditex. Known as 'Girgetto', he focuses on building scalable digital solutions that align with business objectives.",
                    "From efficient architecture design to implementing robust systems, Giorgio combines solid technical expertise with strategic vision. He excels at aligning development teams around common goals, ensuring coherence, clarity, and quality deliveries in every project phase.",
                    "His practical, collaborative, results-oriented approach, combined with a strong passion for innovation and best practices, makes him a key ally for driving long-term success.",
                  ],
                  languages: "ITALIAN (NATIVE), SPANISH (ADVANCED), ENGLISH (ADVANCED)",
                  skills:
                    "REACT JS, NEXT JS, VUE JS, ANGULAR, TAILWINDCSS, TYPESCRIPT, REACT NATIVE, EXPO, NODE, EXPRESS, MONGODB, SQL, POSTGRESQL, PYTHON, LANGCHAIN, OPENAI, GPT-40, AZURE OPENAI, KUBERNETES, DOCKER, AWS, AZURE",
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
                  imageSrc: "/professional-frontend-developer-portrait-full.jpg",
                  imageAlt: "Maria S - Senior Frontend Developer",
                  bio: [
                    "Maria is a passionate frontend developer with over 6 years of experience creating beautiful, accessible, and performant user interfaces. She specializes in React, Next.js, and modern CSS frameworks, with particular expertise in luxury e-commerce platforms.",
                    "Her attention to detail and commitment to user experience has helped numerous luxury brands achieve their digital goals. Maria is also an advocate for web accessibility and inclusive design practices.",
                    "For the VRAI project, Maria will lead frontend development, implementing UI designs with pixel-perfect precision and ensuring optimal performance across all devices.",
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
                  imageSrc: "/professional-devops-engineer-portrait-full.jpg",
                  imageAlt: "Carlos M - DevOps & Security Engineer",
                  bio: [
                    "Carlos is a DevOps and security expert with 7 years of experience in cloud infrastructure, automation, and cybersecurity. He specializes in building robust CI/CD pipelines and maintaining highly available, secure e-commerce systems.",
                    "His expertise includes infrastructure-as-code, container orchestration, and implementing security best practices throughout the development lifecycle.",
                    "For VRAI, Carlos will architect and manage cloud infrastructure, implement security measures, and ensure the platform is scalable, secure, and performs flawlessly under high traffic.",
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
                  imageSrc: "/professional-ux-designer-portrait-full.jpg",
                  imageAlt: "Sofia R - UX/UI Designer & Researcher",
                  bio: [
                    "Sofia is a creative designer and user researcher with a keen eye for aesthetics and user-centered design. She has 7 years of experience crafting intuitive interfaces and conducting comprehensive UX research for luxury e-commerce brands.",
                    "Her work focuses on creating cohesive visual languages that enhance user experience while maintaining brand consistency. Sofia specializes in conversion rate optimization and data-driven design solutions.",
                    "For VRAI, Sofia will lead the design phase, creating high-fidelity mockups, conducting user testing, and ensuring every interaction delights customers while driving conversions.",
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

        <div style={{ marginTop: "var(--gap-header-1)" }}>
          <CaseStudiesSection
            caseStudies={[
              {
                category: "ECOMMERCE",
                title: "DORMAKABA",
                imageSrc:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HERO-7QyVasLSj8cjn2jGivuMQ2gC7PCZiA.png",
                imageAlt: "Dormakaba smart access solutions platform",
                modalData: {
                  title: "DORMAKABA",
                  category: "SOFTWARE",
                  imageSrc:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HERO-7QyVasLSj8cjn2jGivuMQ2gC7PCZiA.png",
                  imageAlt: "Dormakaba platform",
                  sections: [
                    {
                      title: "THE CHALLENGE",
                      paragraphs: [
                        "When dormakaba approached Tailor Hub, they faced a monolithic CMS that limited flexibility for content editors across 40 countries and 35 languages. They needed a seamless transition between technical providers while launching their newly restructured digital architecture.",
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
                      text: "I am very pleased with the Tailor team. They adapt exceptionally well to our needs, demonstrating great flexibility and responsiveness.",
                      author: "PABLO GONZALEZ CELA - GLOBAL DIGITAL SOLUTIONS LEAD AT DORMAKABA",
                    },
                  ],
                },
              },
              {
                category: "REAL ESTATE",
                title: "CLIKALIA",
                imageSrc:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dormakaba.png-BL23wcJL31B0CAp4LCnI5yUkA8STg7.jpeg",
                imageAlt: "Clikalia real estate platform",
                modalData: {
                  title: "CLIKALIA",
                  category: "SOFTWARE",
                  imageSrc:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dormakaba.png-BL23wcJL31B0CAp4LCnI5yUkA8STg7.jpeg",
                  imageAlt: "Clikalia platform",
                  sections: [
                    {
                      title: "THE CHALLENGE",
                      paragraphs: [
                        "Clikalia needed to modernize their property management system to handle thousands of listings with advanced search capabilities, virtual tours, and real-time availability updates.",
                      ],
                    },
                    {
                      title: "THE SOLUTION",
                      paragraphs: [
                        "We built a scalable, cloud-native platform with advanced search algorithms, 3D virtual tour integration, and AI-powered property recommendations. The system handles 10x more concurrent users while reducing load times by 70%.",
                      ],
                    },
                  ],
                  insights: [
                    { value: "50K+", label: "PROPERTIES LISTED" },
                    { value: "70%", label: "FASTER LOAD TIMES" },
                  ],
                  quotes: [
                    {
                      text: "Tailor Hub transformed our platform into a market-leading solution. Users love the enhanced search and virtual tour features.",
                      author: "MIGUEL RODRIGUEZ - CTO AT CLIKALIA",
                    },
                  ],
                },
              },
              {
                category: "FITNESS TECH",
                title: "ON RUNNING + STRAVA",
                imageSrc:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-95ak8iqiC08KKCRJGEh5qSIvJz92o0.jpeg",
                imageAlt: "ON Running and Strava integration",
                modalData: {
                  title: "ON RUNNING + STRAVA",
                  category: "SOFTWARE",
                  imageSrc:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-95ak8iqiC08KKCRJGEh5qSIvJz92o0.jpeg",
                  imageAlt: "ON Running Strava integration",
                  sections: [
                    {
                      title: "THE CHALLENGE",
                      paragraphs: [
                        "ON Running needed to integrate their premium running experience with Strava's social fitness platform, creating a seamless connection that enhances user experience while maintaining platform integrity.",
                      ],
                    },
                    {
                      title: "THE SOLUTION",
                      paragraphs: [
                        "We developed a comprehensive integration platform connecting ON Running's proprietary tracking technology with Strava's social features, including automatic activity syncing, performance analytics, and community engagement tools.",
                      ],
                    },
                  ],
                  insights: [
                    { value: "2.5M+", label: "ACTIVE USERS" },
                    { value: "98%", label: "SYNC SUCCESS RATE" },
                  ],
                  quotes: [
                    {
                      text: "The Tailor Hub team delivered an exceptional integration that exceeded our expectations. User engagement and retention have significantly improved.",
                      author: "SARAH CHEN - HEAD OF DIGITAL PRODUCTS AT ON RUNNING",
                    },
                  ],
                },
              },
            ]}
          />
        </div>
      </section>

      {/* Partners Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <Highlight2Section
          concepts={["OFFICIAL", "PARTNERS"]}
          items={["SHOPIFY PLUS", "AWS", "CONTENTFUL", "STRIPE", "ALGOLIA"]}
        />
      </section>

      {/* ISO Certification Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <TitleSection overheader="ISO 27001" />

        <div style={{ marginTop: "var(--gap-header-1)" }}>
          <BoxSection
            header="CERTIFIED INFORMATION SECURITY"
            bodyText="Tailor Hub is ISO 27001 certified, demonstrating our commitment to the highest standards of information security management. This certification ensures rigorous processes to protect your data and maintain confidentiality, integrity, and availability of information systems throughout the development lifecycle."
            imageSrc="/images/design-mode/ISO(2).png"
            imageAlt="ISO 27001 Certification"
            certificationBadgeSrc="/images/design-mode/Modo_de_aislamiento.webp"
            certificationBadgeAlt="ISO 27001 Badge"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <TitleSection overheader="FREQUENTLY ASKED QUESTIONS" />

        <div style={{ marginTop: "var(--gap-header-1)" }}>
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
                question: "What happens if project requirements change during development?",
                answer:
                  "We follow an agile methodology that allows for flexibility. Minor adjustments can typically be accommodated within the existing scope. For significant scope changes, we'll provide a change request with timeline and cost implications. Our goal is to balance flexibility with project predictability.",
              },
              {
                question: "Will the platform be mobile-responsive?",
                answer:
                  "Absolutely. The platform will be fully responsive and optimized for all devices including smartphones, tablets, and desktops. We follow a mobile-first design approach to ensure the luxury shopping experience is exceptional on every screen size, including optimized 3D visualization for mobile devices.",
              },
              {
                question: "How do you ensure the platform is secure and compliant?",
                answer:
                  "Security is built into every phase of development. We implement PCI DSS compliance for payment processing, use industry-standard encryption, conduct security audits, implement secure authentication, and follow OWASP security guidelines. The platform undergoes penetration testing before launch.",
              },
              {
                question: "Can we see progress during development?",
                answer:
                  "Yes! We provide access to a staging environment where you can review progress throughout development. We conduct bi-weekly demo sessions to showcase completed features, gather feedback, and ensure alignment with your vision. You'll have full visibility into the development process.",
              },
              {
                question: "What training and documentation will be provided?",
                answer:
                  "We provide comprehensive training for your team on platform administration, content management, product uploads, order processing, and analytics. This includes live training sessions, video tutorials, and detailed documentation to ensure your team feels confident managing the platform independently.",
              },
              {
                question: "What support is available after launch?",
                answer:
                  "The project includes 30 days of post-launch support for bug fixes and adjustments. After that, we offer two ongoing support packages: Essential Support (€2,500/month) with monitoring and maintenance, or Premium Support (€5,500/month) which includes dedicated account management and 20 hours/month of development.",
              },
            ]}
          />
        </div>
      </section>
    </LandingLayout>
  )
}
