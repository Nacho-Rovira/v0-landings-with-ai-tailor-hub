"use client"

import { useState } from "react"
import { LandingLayout } from "@/components/LandingLayout/LandingLayout"
import { HighlightSection } from "@/components/HighlightSection/HighlightSection"
import { HeaderBox } from "@/components/HeaderBox/HeaderBox"
import { TitleSection } from "@/components/TitleSection/TitleSection"
import { BodyText } from "@/components/BodyText/BodyText"
import { MenuSidebar, MenuSidebarItem } from "@/components/MenuSidebar/MenuSidebar"
import { BoxSection } from "@/components/BoxSection/BoxSection"
import { TeamSection } from "@/components/TeamSection/TeamSection"
import { CaseStudiesSection } from "@/components/CaseStudiesSection/CaseStudiesSection"
import { Highlight2Section } from "@/components/Highlight2Section/Highlight2Section"
import { FAQ } from "@/components/FAQ/FAQ"
import proposalConfig from "@/config/proposals/santander-intro-proposal.json"
import Image from "next/image"

export default function SantanderProposalPage() {
  const [activeSection, setActiveSection] = useState<string>("#context")

  const handleScrollToProposal = () => {
    const element = document.querySelector("#proposal-content")
    if (element) {
      const offset = 180
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <LandingLayout>
      {/* Hero Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <HighlightSection concepts={proposalConfig.highlight.concepts} header={proposalConfig.highlight.header} />
      </section>

      {/* Header Box */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <HeaderBox
          overheader={proposalConfig.headerBox.overheader}
          header={proposalConfig.headerBox.header}
          buttonLabel={proposalConfig.headerBox.buttonLabel}
          onButtonClick={handleScrollToProposal}
        />
      </section>

      {/* Hero Image Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <div style={{ width: "100%", borderRadius: "var(--radius-s)", overflow: "hidden" }}>
          <Image
            src={proposalConfig.heroImage.src || "/placeholder.svg"}
            alt={proposalConfig.heroImage.alt}
            width={1432}
            height={800}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </div>
      </section>

      {/* Proposal Content with Sidebar */}
      <section id="proposal-content" style={{ marginBottom: "var(--spacing-9xl)" }}>
        <div
          style={{
            display: "flex",
            gap: "var(--spacing-3xl)",
            maxWidth: "var(--layout-content-max)",
            margin: "0 auto",
            padding: "0 var(--spacing-page-x)",
          }}
        >
          {/* Sidebar Menu */}
          <MenuSidebar activeSection={activeSection} autoDetectActive>
            {proposalConfig.menuItems.map((item) => (
              <MenuSidebarItem key={item.number} href={item.href} number={item.number}>
                {item.label}
              </MenuSidebarItem>
            ))}
          </MenuSidebar>

          {/* Main Content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {proposalConfig.bodySections.map((section, index) => (
              <section key={section.id} id={section.id} style={{ marginBottom: "var(--spacing-9xl)" }}>
                <BodyText
                  sections={[
                    {
                      title: section.title,
                      paragraphs: section.paragraphs,
                    },
                  ]}
                />
              </section>
            ))}

            {/* Technology Section */}
            <section id="technology" style={{ marginBottom: "var(--spacing-9xl)" }}>
              <BodyText
                sections={[
                  {
                    title: "TECHNOLOGY & ARCHITECTURE",
                    paragraphs: [
                      "Technology Expertise",
                      proposalConfig.technology.description,
                      ...(proposalConfig.technology.categories || []).flatMap((category) => [
                        category.title,
                        ...category.technologies.map((tech) => tech),
                      ]),
                    ],
                  },
                ]}
              />
            </section>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ marginBottom: "var(--spacing-9xl)" }}>
        <TitleSection overheader="SERVICES" title="What We Do" />

        <div style={{ marginTop: "var(--spacing-9xl)" }}>
          {proposalConfig.services.map((service, index) => (
            <div
              key={index}
              style={{ marginBottom: index < proposalConfig.services.length - 1 ? "var(--spacing-9xl)" : 0 }}
            >
              <BoxSection
                overheader={service.overheader}
                header={service.header}
                bodyText={service.bodyText}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" style={{ marginBottom: "var(--spacing-9xl)" }}>
        <TitleSection overheader={proposalConfig.team.overheader} title="Our Team" />

        <div style={{ marginTop: "var(--spacing-9xl)" }}>
          <TeamSection members={proposalConfig.team.members} />
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" style={{ marginBottom: "var(--spacing-9xl)" }}>
        <TitleSection overheader="CASE STUDIES" title="Proven Track Record" />

        <div style={{ marginTop: "var(--spacing-9xl)" }}>
          <CaseStudiesSection caseStudies={proposalConfig.caseStudies} />
        </div>
      </section>

      {/* Partners Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <Highlight2Section concepts={proposalConfig.partners.concepts} items={proposalConfig.partners.items} />
      </section>

      {/* ISO Certification */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <BoxSection
          overheader={proposalConfig.isoCertification.overheader}
          header={proposalConfig.isoCertification.header}
          bodyText={proposalConfig.isoCertification.bodyText}
          imageSrc={proposalConfig.isoCertification.imageSrc}
          imageAlt={proposalConfig.isoCertification.imageAlt}
          certificationBadgeSrc={proposalConfig.isoCertification.certificationBadgeSrc}
          certificationBadgeAlt={proposalConfig.isoCertification.certificationBadgeAlt}
        />
      </section>

      {/* FAQ Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <TitleSection overheader="FREQUENTLY ASKED QUESTIONS" title="FAQ" />

        <div style={{ marginTop: "var(--spacing-xl)" }}>
          <FAQ items={proposalConfig.faq} />
        </div>
      </section>

      {/* Next Steps Section */}
      <section id="next-steps" style={{ marginBottom: "var(--spacing-9xl)" }}>
        <TitleSection overheader="NEXT STEPS" title="Let's Start a Conversation" />

        <div style={{ marginTop: "var(--spacing-xl)" }}>
          <BodyText
            sections={[
              {
                title: "",
                paragraphs: [
                  proposalConfig.nextSteps.description,
                  ...proposalConfig.nextSteps.steps.map(
                    (step) => `<strong>${step.title}:</strong> ${step.description}`,
                  ),
                  proposalConfig.nextSteps.callToAction,
                ],
              },
            ]}
          />
        </div>

        {/* CTA */}
        <div style={{ marginTop: "var(--spacing-3xl)" }}>
          <HeaderBox
            overheader="GET IN TOUCH"
            header="Ready to explore how Tailor Hub can transform your digital banking, internal tools, and customer experiences?"
            buttonLabel="CONTACT US"
            onButtonClick={() => (window.location.href = "mailto:info@tailor-hub.com")}
          />
        </div>
      </section>
    </LandingLayout>
  )
}
