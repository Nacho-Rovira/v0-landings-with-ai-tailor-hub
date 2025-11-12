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
import { BoxSection } from "@/components/BoxSection/BoxSection"
import Image from "next/image"
import { FAQ } from "@/components/FAQ/FAQ"
import { TeamSection } from "@/components/TeamSection/TeamSection"
import { TechBox } from "@/components/TechBox/TechBox"
import { Highlight2Section } from "@/components/Highlight2Section/Highlight2Section"

export default function ClikaliaProposalPage() {
  return (
    <LandingLayout>
      {/* Highlight Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <HighlightSection
          concepts={["REAL ESTATE <span> PLATFORM", "CLOUD-NATIVE <span> ARCHITECTURE", "AI-POWERED <span> SEARCH"]}
          header="COMPREHENSIVE REAL ESTATE PLATFORM DEVELOPMENT FOR CLIKALIA'S NEXT GENERATION PROPERTY MANAGEMENT"
        />
      </section>

      {/* HeaderBox Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <HeaderBox
          overheader="A PROPOSAL FOR CLIKALIA"
          header="Build a scalable, modern real estate platform with advanced search, virtual tours, and AI-powered property recommendations"
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dormakaba.png-BL23wcJL31B0CAp4LCnI5yUkA8STg7.jpeg"
            alt="Clikalia - Real estate platform visualization"
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
            <MenuSidebarItem href="#services" number={4}>
              SERVICES
            </MenuSidebarItem>
            <MenuSidebarItem href="#technology" number={5}>
              TECHNOLOGY & ARCHITECTURE
            </MenuSidebarItem>
            <MenuSidebarItem href="#roadmap" number={6}>
              ROADMAP & PHASES
            </MenuSidebarItem>
            <MenuSidebarItem href="#budget" number={7}>
              BUDGET & CONDITIONS
            </MenuSidebarItem>
          </MenuSidebar>

          {/* Body Content */}
          <div style={{ flex: 1, maxWidth: "702px" }}>
            <BodyText
              sections={[
                {
                  title: "CHALLENGE / CONTEXT",
                  paragraphs: [
                    "The real estate industry is undergoing a rapid digital transformation. Traditional property management systems struggle to meet modern user expectations for speed, visual richness, and intelligent search capabilities. Clikalia needs a cutting-edge platform that can handle thousands of property listings while providing an exceptional user experience through advanced search algorithms, 3D virtual tours, and real-time availability updates.",
                    "The existing infrastructure has reached its limits in terms of scalability and performance. As Clikalia continues to expand its market presence, a modern, cloud-native platform is essential to support business growth, improve operational efficiency, and deliver the seamless digital experience that today's property seekers demand.",
                  ],
                },
                {
                  title: "OBJECTIVES",
                  paragraphs: [
                    "Build a scalable, high-performance real estate platform that can handle 10x more concurrent users while reducing page load times by at least 70%. The platform must support advanced search capabilities with multiple filters, geolocation features, and AI-powered property recommendations that learn from user behavior.",
                    "Create an immersive property viewing experience through integrated 3D virtual tours, high-quality image galleries, and interactive floor plans. Implement real-time inventory management, automated property updates, and comprehensive analytics to provide Clikalia with actionable business intelligence and optimize their property listings for maximum engagement.",
                  ],
                },
                {
                  title: "OUR APPROACH",
                  paragraphs: [
                    "Tailor Hub will deliver a comprehensive, cloud-native platform built on modern microservices architecture. Our approach combines agile development methodology with continuous user feedback loops to ensure the platform meets both business objectives and user needs. We prioritize scalability, performance, and security from day one.",
                    "Our development process emphasizes collaboration and transparency. Through regular sprint reviews, prototype demonstrations, and stakeholder workshops, we ensure alignment at every stage. We implement automated testing, continuous integration, and robust monitoring to maintain high code quality and system reliability throughout the development lifecycle.",
                  ],
                },
              ]}
            />

            {/* Technology & Architecture Section */}
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
                TECHNOLOGY & ARCHITECTURE
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
                We'll build Clikalia's platform on a modern, scalable technology stack designed for performance and
                growth:
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "var(--spacing-m)",
                  marginTop: "var(--spacing-m)",
                }}
              >
                <TechBox
                  title="Front-end & Mobile"
                  technologies={[
                    "React JS",
                    "Next JS",
                    "Vue JS",
                    "Angular",
                    "Tailwind CSS",
                    "TypeScript",
                    "React Native",
                    "Expo",
                    "Ionic",
                  ]}
                />
                <TechBox
                  title="Back-end"
                  technologies={["Node", "Express", "TypeScript", "Mongo DB", "SQL", "NestJS"]}
                />
                <TechBox
                  title="Data & IA"
                  technologies={["Python", "LangChain", "OpenAI GPT-40", "Azure OpenAI", "MCP", "A2A"]}
                />
                <TechBox
                  title="CMS/ e-commerce"
                  technologies={["WordPress", "Contentful", "Dato CMS", "Sanity", "Shopify"]}
                />
                <TechBox title="Infraestructura" technologies={["Kubernetes", "Docker", "AWS", "Azure"]} />
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
                    title: "DISCOVERY & ARCHITECTURE DESIGN",
                    description:
                      "Comprehensive requirements gathering, user research, and technical architecture design. We'll map out the entire system architecture, define data models, establish API contracts, and create a detailed technical roadmap. Stakeholder workshops ensure alignment on business goals and technical approach.",
                    duration: "3 WEEKS",
                    deliverables: [
                      "Technical architecture blueprint and system diagrams",
                      "User research findings and persona definitions",
                      "Data model and database schema design",
                      "API specification and integration documentation",
                      "Project roadmap with detailed milestones",
                    ],
                  },
                  {
                    number: "02",
                    title: "DESIGN SYSTEM & UI/UX",
                    description:
                      "Creation of comprehensive design system with reusable components, design tokens, and interactive prototypes. We'll design every key user flow including property search, detailed listings, virtual tours, and contact forms. Usability testing validates design decisions before development begins.",
                    duration: "4 WEEKS",
                    deliverables: [
                      "Complete design system with component library",
                      "High-fidelity mockups for all key pages and flows",
                      "Interactive prototypes for user testing",
                      "Design tokens and style guide documentation",
                      "Accessibility audit and compliance report",
                    ],
                  },
                  {
                    number: "03",
                    title: "CORE PLATFORM DEVELOPMENT",
                    description:
                      "Implementation of core platform features including property listing management, advanced search with filters, user authentication, and admin dashboard. We build the foundation with scalable architecture, automated testing, and continuous integration. Regular demos keep stakeholders informed.",
                    duration: "10 WEEKS",
                    deliverables: [
                      "Property management system with CRUD operations",
                      "Advanced search with multiple filters and facets",
                      "User authentication and profile management",
                      "Admin dashboard for content and user management",
                      "Automated test suite with 80%+ code coverage",
                    ],
                  },
                  {
                    number: "04",
                    title: "AI & ADVANCED FEATURES",
                    description:
                      "Integration of AI-powered search algorithms, personalized recommendations, and 3D virtual tour capabilities. We implement intelligent property matching based on user preferences, geolocation features with interactive maps, and automated property valuation tools. Machine learning models are trained and optimized.",
                    duration: "6 WEEKS",
                    deliverables: [
                      "AI-powered search and recommendation engine",
                      "3D virtual tour integration with Three.js",
                      "Interactive map with geolocation features",
                      "Property valuation and market analysis tools",
                      "ML model training and performance optimization",
                    ],
                  },
                  {
                    number: "05",
                    title: "TESTING, OPTIMIZATION & LAUNCH",
                    description:
                      "Comprehensive quality assurance including functional testing, performance optimization, security audits, and user acceptance testing. We conduct load testing to ensure the platform handles peak traffic, optimize database queries and caching strategies, and prepare production infrastructure for launch.",
                    duration: "3 WEEKS",
                    deliverables: [
                      "Complete QA test report with bug fixes",
                      "Performance optimization and load testing results",
                      "Security audit and penetration testing report",
                      "Production deployment and monitoring setup",
                      "Team training and comprehensive documentation",
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
                    category: "DISCOVERY & ARCHITECTURE DESIGN",
                    description: "Requirements gathering, system architecture, and project planning",
                    amount: "€12,500",
                  },
                  {
                    category: "DESIGN SYSTEM & UI/UX",
                    description: "Comprehensive design system, prototypes, and usability testing",
                    amount: "€18,000",
                  },
                  {
                    category: "CORE PLATFORM DEVELOPMENT",
                    description: "Property management, search functionality, and admin dashboard",
                    amount: "€65,000",
                  },
                  {
                    category: "AI & ADVANCED FEATURES",
                    description: "AI search, recommendations, 3D tours, and geolocation features",
                    amount: "€42,000",
                  },
                  {
                    category: "TESTING, OPTIMIZATION & LAUNCH",
                    description: "QA, performance optimization, security audit, and deployment",
                    amount: "€17,500",
                  },
                ]}
                total="€155,000"
                notes={[
                  "Payment terms: 30% upfront, 40% at development milestones, 30% upon completion",
                  "All prices exclude VAT",
                  "Timeline: 26 weeks from project kick-off to launch",
                  "Includes 6 weeks of post-launch support and bug fixes",
                  "Ongoing maintenance packages available separately",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <TitleSection overheader="SERVICES" title="TAILOR HUB SERVICES" />

        <div
          style={{ marginTop: "var(--spacing-xl)", display: "flex", flexDirection: "column", gap: "var(--spacing-xl)" }}
        >
          <BoxSection
            overheader="DEVELOPMENT LABS"
            header="CUSTOM SOFTWARE DEVELOPMENT"
            bodyText="Our elite engineering team will build your platform from the ground up using cutting-edge technologies. We specialize in creating scalable, maintainable solutions with React, Next.js, TypeScript, and modern cloud infrastructure. Every line of code is crafted for performance, security, and long-term maintainability."
            imageSrc="/images/design-mode/desarrollo%20de%20software(2).jpeg"
            imageAlt="Custom software development - Modern workspace and collaboration"
          />

          <BoxSection
            overheader="ARTIFICIAL INTELLIGENCE"
            header="AI-POWERED SEARCH & RECOMMENDATIONS"
            bodyText="Transform property discovery with intelligent search algorithms and personalized recommendations. Our AI solutions analyze user behavior, search patterns, and property attributes to deliver relevant results that increase engagement and conversion. Machine learning models continuously improve to provide increasingly accurate matches."
            imageSrc="/images/design-mode/auditoria%20y%20formacion(2).jpeg"
            imageAlt="AI and machine learning - Neural network visualization"
          />

          <BoxSection
            overheader="DESIGN SYSTEMS"
            header="COMPREHENSIVE UI/UX DESIGN"
            bodyText="Create a cohesive, beautiful user interface with our comprehensive design system approach. We build reusable component libraries with design tokens that ensure consistency across all touchpoints. From property cards to search interfaces, every element is crafted for accessibility, usability, and visual appeal."
            imageSrc="/images/design-mode/Design%20systems.png"
            imageAlt="Design systems - Component library and tokens"
          />
        </div>
      </section>

      {/* Team Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <TitleSection overheader="TEAM" title="YOUR DEVELOPMENT TEAM" />

        <div style={{ marginTop: "var(--spacing-xl)" }}>
          <TeamSection
            members={[
              {
                name: "Giorgio G",
                title: "Tech Lead",
                imageSrc: "/placeholder.svg?height=320&width=240",
                imageAlt: "Giorgio G - Tech Lead",
                modalData: {
                  name: "GIORGIO G",
                  title: "TECH LEAD",
                  imageSrc: "/placeholder.svg?height=628&width=628",
                  imageAlt: "Giorgio G - Tech Lead",
                  bio: [
                    'Con más de ocho años de experiencia en desarrollo de software, Giorgio ha liderado proyectos complejos y de alto impacto para compañías como dormakaba, Iberia o Inditex. Conocido cariñosamente como "Girgetto", se centra en construir soluciones digitales escalables, de alto rendimiento y alineadas con los objetivos de negocio.',
                    "Desde el diseño de arquitecturas eficientes hasta la implementación de sistemas robustos, combina una sólida base técnica con una visión estratégica. Destaca por su capacidad para alinear equipos de desarrollo en torno a metas comunes, garantizando coherencia, claridad y entregas de calidad en cada fase del proyecto.",
                  ],
                  languages: "ITALIAN (NATIVE), SPANISH (ADVANCED), ENGLISH (ADVANCED)",
                  skills:
                    "REACT JS, NEXT JS, VUE JS, ANGULAR, TAILWINDCSS, TYPESCRIPT, REACT NATIVE, NODE, EXPRESS, MONGO DB, SQL, POSTGRESQL, DOCKER, KUBERNETES, AWS, AZURE",
                },
              },
              {
                name: "Maria S",
                title: "Senior Frontend Developer",
                imageSrc: "/placeholder.svg?height=320&width=240",
                imageAlt: "Maria S - Senior Frontend Developer",
                modalData: {
                  name: "MARIA S",
                  title: "SENIOR FRONTEND DEVELOPER",
                  imageSrc: "/placeholder.svg?height=628&width=628",
                  imageAlt: "Maria S - Senior Frontend Developer",
                  bio: [
                    "Maria is a passionate frontend developer with over 6 years of experience creating beautiful, accessible, and performant user interfaces. She specializes in React, Next.js, and modern CSS frameworks, with extensive experience in real estate and property listing platforms.",
                    "Her attention to detail and commitment to user experience has helped numerous clients achieve their digital goals. Maria will lead the frontend development, ensuring the property search and listing interfaces are intuitive, fast, and visually stunning.",
                  ],
                  languages: "SPANISH (NATIVE), ENGLISH (FLUENT), FRENCH (INTERMEDIATE)",
                  skills:
                    "REACT JS, NEXT JS, TYPESCRIPT, TAILWIND CSS, STYLED COMPONENTS, THREE.JS, FIGMA, STORYBOOK, JEST, CYPRESS",
                },
              },
              {
                name: "Alex K",
                title: "AI Engineer",
                imageSrc: "/placeholder.svg?height=320&width=240",
                imageAlt: "Alex K - AI Engineer",
                modalData: {
                  name: "ALEX K",
                  title: "AI ENGINEER",
                  imageSrc: "/placeholder.svg?height=628&width=628",
                  imageAlt: "Alex K - AI Engineer",
                  bio: [
                    "Alex is an AI specialist with a strong background in machine learning and natural language processing. With 5 years of experience, he has developed intelligent search and recommendation systems for various industries including real estate.",
                    "His expertise in building AI-powered features will enable Clikalia to offer personalized property recommendations and advanced search capabilities that learn from user behavior.",
                  ],
                  languages: "ENGLISH (NATIVE), GERMAN (FLUENT), SPANISH (INTERMEDIATE)",
                  skills:
                    "PYTHON, TENSORFLOW, PYTORCH, ELASTICSEARCH, OPENAI, LANGCHAIN, AWS SAGEMAKER, DOCKER, KUBERNETES",
                },
              },
              {
                name: "Sofia R",
                title: "UX/UI Designer",
                imageSrc: "/placeholder.svg?height=320&width=240",
                imageAlt: "Sofia R - UX/UI Designer",
                modalData: {
                  name: "SOFIA R",
                  title: "UX/UI DESIGNER",
                  imageSrc: "/placeholder.svg?height=628&width=628",
                  imageAlt: "Sofia R - UX/UI Designer",
                  bio: [
                    "Sofia is a creative designer with a keen eye for aesthetics and user-centered design. She has 7 years of experience crafting intuitive interfaces for real estate and property platforms.",
                    "Her work focuses on creating cohesive visual languages that enhance user experience while maintaining brand consistency. Sofia will design the entire user experience from property search to virtual tours.",
                  ],
                  languages: "SPANISH (NATIVE), ENGLISH (FLUENT), PORTUGUESE (INTERMEDIATE)",
                  skills:
                    "FIGMA, SKETCH, ADOBE XD, USER RESEARCH, PROTOTYPING, DESIGN SYSTEMS, ACCESSIBILITY, USABILITY TESTING",
                },
              },
              {
                name: "David L",
                title: "Backend Engineer",
                imageSrc: "/placeholder.svg?height=320&width=240",
                imageAlt: "David L - Backend Engineer",
                modalData: {
                  name: "DAVID L",
                  title: "BACKEND ENGINEER",
                  imageSrc: "/placeholder.svg?height=628&width=628",
                  imageAlt: "David L - Backend Engineer",
                  bio: [
                    "David is a backend specialist with extensive experience in building scalable, high-performance server-side applications. He has 8 years of experience working with microservices architecture and cloud infrastructure.",
                    "His expertise in database optimization and API design will ensure the Clikalia platform can handle thousands of property listings with lightning-fast search and retrieval.",
                  ],
                  languages: "ENGLISH (NATIVE), SPANISH (ADVANCED)",
                  skills:
                    "NODE JS, EXPRESS, NESTJS, TYPESCRIPT, POSTGRESQL, MONGODB, ELASTICSEARCH, REDIS, DOCKER, KUBERNETES, AWS",
                },
              },
              {
                name: "Emma T",
                title: "Product Manager",
                imageSrc: "/placeholder.svg?height=320&width=240",
                imageAlt: "Emma T - Product Manager",
                modalData: {
                  name: "EMMA T",
                  title: "PRODUCT MANAGER",
                  imageSrc: "/placeholder.svg?height=628&width=628",
                  imageAlt: "Emma T - Product Manager",
                  bio: [
                    "Emma is a strategic product manager with 6 years of experience leading digital product development in the real estate and proptech sectors. She excels at translating business requirements into actionable product roadmaps.",
                    "Her collaborative approach and data-driven decision-making will ensure the Clikalia platform delivers maximum value to both the business and end users.",
                  ],
                  languages: "ENGLISH (NATIVE), FRENCH (FLUENT), SPANISH (INTERMEDIATE)",
                  skills:
                    "PRODUCT STRATEGY, AGILE METHODOLOGIES, USER RESEARCH, DATA ANALYSIS, ROADMAPPING, STAKEHOLDER MANAGEMENT",
                },
              },
              {
                name: "Carlos M",
                title: "DevOps Engineer",
                imageSrc: "/placeholder.svg?height=320&width=240",
                imageAlt: "Carlos M - DevOps Engineer",
                modalData: {
                  name: "CARLOS M",
                  title: "DEVOPS ENGINEER",
                  imageSrc: "/placeholder.svg?height=628&width=628",
                  imageAlt: "Carlos M - DevOps Engineer",
                  bio: [
                    "Carlos is a DevOps expert with 7 years of experience in cloud infrastructure and automation. He specializes in building robust CI/CD pipelines and maintaining highly available systems.",
                    "His focus on automation and infrastructure as code will ensure the Clikalia platform deploys reliably and scales effortlessly as the business grows.",
                  ],
                  languages: "SPANISH (NATIVE), ENGLISH (FLUENT)",
                  skills:
                    "AWS, AZURE, DOCKER, KUBERNETES, TERRAFORM, JENKINS, GITHUB ACTIONS, MONITORING, SECURITY, PERFORMANCE",
                },
              },
              {
                name: "Lisa W",
                title: "QA Engineer",
                imageSrc: "/placeholder.svg?height=320&width=240",
                imageAlt: "Lisa W - QA Engineer",
                modalData: {
                  name: "LISA W",
                  title: "QA ENGINEER",
                  imageSrc: "/placeholder.svg?height=628&width=628",
                  imageAlt: "Lisa W - QA Engineer",
                  bio: [
                    "Lisa is a quality assurance specialist with 5 years of experience ensuring software quality through comprehensive testing strategies. She is passionate about automation and continuous improvement.",
                    "Her meticulous approach to testing will ensure the Clikalia platform is bug-free, performant, and delivers an exceptional user experience.",
                  ],
                  languages: "ENGLISH (NATIVE), GERMAN (INTERMEDIATE)",
                  skills:
                    "TEST AUTOMATION, SELENIUM, CYPRESS, JEST, PLAYWRIGHT, API TESTING, PERFORMANCE TESTING, ACCESSIBILITY",
                },
              },
              {
                name: "Miguel A",
                title: "Full Stack Developer",
                imageSrc: "/placeholder.svg?height=320&width=240",
                imageAlt: "Miguel A - Full Stack Developer",
                modalData: {
                  name: "MIGUEL A",
                  title: "FULL STACK DEVELOPER",
                  imageSrc: "/placeholder.svg?height=628&width=628",
                  imageAlt: "Miguel A - Full Stack Developer",
                  bio: [
                    "Miguel is a versatile full stack developer with 6 years of experience building end-to-end web applications for real estate platforms. He is comfortable working across the entire technology stack.",
                    "His ability to understand both frontend and backend challenges makes him invaluable for implementing complex features like property search and virtual tours.",
                  ],
                  languages: "SPANISH (NATIVE), ENGLISH (ADVANCED), ITALIAN (INTERMEDIATE)",
                  skills: "REACT, NEXT JS, NODE JS, TYPESCRIPT, POSTGRESQL, MONGODB, AWS, DOCKER, REST APIs, GRAPHQL",
                },
              },
              {
                name: "Anna P",
                title: "Data Engineer",
                imageSrc: "/placeholder.svg?height=320&width=240",
                imageAlt: "Anna P - Data Engineer",
                modalData: {
                  name: "ANNA P",
                  title: "DATA ENGINEER",
                  imageSrc: "/placeholder.svg?height=628&width=628",
                  imageAlt: "Anna P - Data Engineer",
                  bio: [
                    "Anna is a data engineer with 5 years of experience building data pipelines and analytics systems. She specializes in real-time data processing and business intelligence.",
                    "Her expertise will enable Clikalia to gain deep insights into user behavior, property performance, and market trends through comprehensive analytics and reporting.",
                  ],
                  languages: "ENGLISH (NATIVE), SPANISH (FLUENT), RUSSIAN (NATIVE)",
                  skills:
                    "PYTHON, SQL, ELASTICSEARCH, POSTGRESQL, DATA PIPELINES, ETL, BUSINESS INTELLIGENCE, ANALYTICS",
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
                category: "SOFTWARE",
                title: "CLIKALIA",
                imageSrc:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dormakaba.png-BL23wcJL31B0CAp4LCnI5yUkA8STg7.jpeg",
                imageAlt: "Clikalia real estate platform",
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
                imageAlt: "Dormakaba smart access solutions",
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
                        "When dormakaba approached Tailor Hub, they faced a multi-faceted challenge. Their monolithic CMS, Coremedia, had become an operational bottleneck, limiting flexibility for content editors across 40 countries and 35 languages.",
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
                      text: "I am very pleased with the Tailor team. They adapt exceptionally well to our needs, demonstrating great flexibility and responsiveness. They always meet established deadlines.",
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
                imageAlt: "VRAI jewelry e-commerce",
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
                        "VRAI, a luxury lab-grown diamond jewelry brand, needed an e-commerce platform that matched the elegance and sophistication of their products with advanced product customization, 3D visualization, and seamless checkout.",
                      ],
                    },
                    {
                      title: "THE SOLUTION",
                      paragraphs: [
                        "We developed a custom Shopify Plus solution with advanced 3D product visualization, real-time customization tools, and a streamlined checkout process integrated with inventory management.",
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
                title: "ON RUNNING + STRAVA",
                imageSrc:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-95ak8iqiC08KKCRJGEh5qSIvJz92o0.jpeg",
                imageAlt: "ON Running and Strava integration",
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
                        "ON Running needed to integrate their premium running experience with Strava's social fitness platform. The challenge was creating a seamless connection that would enhance the user experience.",
                      ],
                    },
                    {
                      title: "THE SOLUTION",
                      paragraphs: [
                        "We developed a comprehensive integration platform that connects ON Running's proprietary tracking technology with Strava's social features, including automatic activity syncing and performance analytics.",
                      ],
                    },
                  ],
                  insights: [
                    { value: "2.5M+", label: "ACTIVE USERS" },
                    { value: "98%", label: "SYNC SUCCESS RATE" },
                  ],
                  quotes: [
                    {
                      text: "The Tailor Hub team delivered an exceptional integration that exceeded our expectations. The seamless connection has significantly improved user engagement and retention.",
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
                question: "What makes Tailor Hub qualified to build this platform?",
                answer:
                  "We have extensive experience building real estate and property management platforms, including our previous work with Clikalia that resulted in 50K+ properties listed and 70% faster load times. Our team specializes in scalable architecture, AI-powered search, and creating exceptional user experiences for complex data-driven applications.",
              },
              {
                question: "How long will the project take?",
                answer:
                  "The complete project timeline is 26 weeks (approximately 6 months) from kick-off to launch, divided into five phases: Discovery & Architecture Design (3 weeks), Design System & UI/UX (4 weeks), Core Platform Development (10 weeks), AI & Advanced Features (6 weeks), and Testing, Optimization & Launch (3 weeks).",
              },
              {
                question: "What technologies will be used?",
                answer:
                  "We'll use a modern, scalable tech stack including React 18+, Next.js 16, TypeScript, Tailwind CSS for the frontend; Node.js, PostgreSQL, Elasticsearch, and Redis for the backend; AWS for cloud infrastructure; and OpenAI for AI-powered features. All technologies are chosen for performance, scalability, and long-term maintainability.",
              },
              {
                question: "Will the platform be able to handle growth?",
                answer:
                  "Absolutely. We're building the platform on cloud-native architecture with microservices that can scale horizontally to handle increased traffic. Our previous work demonstrates we can build systems that handle 10x more concurrent users while maintaining excellent performance. The architecture is designed to grow with your business.",
              },
              {
                question: "What kind of support do you provide after launch?",
                answer:
                  "The project includes 6 weeks of post-launch support for bug fixes and minor adjustments. After that, we offer ongoing maintenance packages that include infrastructure monitoring, security updates, performance optimization, feature enhancements, and dedicated technical support. Packages can be customized to your specific needs.",
              },
              {
                question: "How does the AI-powered search work?",
                answer:
                  "Our AI search combines multiple technologies: Elasticsearch for fast full-text search, machine learning models that analyze user behavior and preferences, natural language processing to understand search intent, and collaborative filtering for personalized recommendations. The system continuously learns and improves from user interactions.",
              },
              {
                question: "Can we make changes to the scope during development?",
                answer:
                  "Yes, we follow an agile methodology with regular sprint reviews and demos. While we maintain a core scope to ensure timely delivery, we're flexible and can accommodate changes through our change request process. We'll work with you to assess the impact on timeline and budget, and adjust accordingly.",
              },
            ]}
          />
        </div>
      </section>

      {/* Our Partners Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <Highlight2Section
          concepts={["OFFICIAL", "PARTNERS"]}
          items={["CONTENTFUL", "AWS", "SHOPIFY PARTNERS", "MICROSOFT AI CLOUD PARTNER", "NETLIFY", ""]}
        />
      </section>

      {/* ISO Certification Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
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
    </LandingLayout>
  )
}
