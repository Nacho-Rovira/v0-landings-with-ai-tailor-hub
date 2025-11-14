import { LandingLayout } from "@/components/LandingLayout/LandingLayout"
import { HighlightSection } from "@/components/HighlightSection/HighlightSection"
import { HeaderBox } from "@/components/HeaderBox/HeaderBox"
import { BodyText } from "@/components/BodyText/BodyText"
import { MenuSidebar, MenuSidebarItem } from "@/components/MenuSidebar/MenuSidebar"
import { TitleSection } from "@/components/TitleSection/TitleSection"
import { BoxSection } from "@/components/BoxSection/BoxSection"
import { TeamSection } from "@/components/TeamSection/TeamSection"
import { CaseStudiesSection } from "@/components/CaseStudiesSection/CaseStudiesSection"
import { Highlight2Section } from "@/components/Highlight2Section/Highlight2Section"
import { FAQ } from "@/components/FAQ/FAQ"
import { StepsFlow } from "@/components/StepsFlow/StepsFlow"
import Image from "next/image"
import proposalConfig from "@/config/proposals/santander-intro-proposal.json"

export default function SantanderProposalPage() {
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
          onButtonClick={() => {
            document.querySelector("#proposal-content")?.scrollIntoView({ behavior: "smooth" })
          }}
        />
      </section>

      {/* Hero Image */}
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
        <div style={{ display: "flex", alignItems: "flex-start", gap: "var(--spacing-xxl)", width: "100%" }}>
          {/* Menu Sidebar */}
          <MenuSidebar autoDetectActive>
            {proposalConfig.menuItems.map((item) => (
              <MenuSidebarItem key={item.number} href={item.href} number={item.number}>
                {item.label}
              </MenuSidebarItem>
            ))}
          </MenuSidebar>

          {/* Body Content */}
          <div style={{ flex: 1, maxWidth: "702px" }}>
            <BodyText sections={proposalConfig.bodySections} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <TitleSection overheader="SERVICES" />
        <div
          style={{ marginTop: "var(--spacing-xl)", display: "flex", flexDirection: "column", gap: "var(--spacing-xl)" }}
        >
          {proposalConfig.services.map((service, index) => (
            <BoxSection
              key={index}
              overheader={service.overheader}
              header={service.header}
              bodyText={service.bodyText}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
            />
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <TitleSection overheader={proposalConfig.team.overheader} />
        <div style={{ marginTop: "var(--spacing-xl)" }}>
          <TeamSection members={proposalConfig.team.members} />
        </div>
      </section>

      {/* Case Studies Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <TitleSection overheader="CASE STUDIES" />
        <div style={{ marginTop: "var(--spacing-xl)" }}>
          <CaseStudiesSection caseStudies={proposalConfig.caseStudies} />
        </div>
      </section>

      {/* Partners Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <Highlight2Section concepts={proposalConfig.partners.concepts} items={proposalConfig.partners.items} />
      </section>

      {/* ISO Certification Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <TitleSection overheader={proposalConfig.isoCertification.overheader} />
        <div style={{ marginTop: "var(--spacing-xl)" }}>
          <BoxSection
            header={proposalConfig.isoCertification.header}
            bodyText={proposalConfig.isoCertification.bodyText}
            imageSrc={proposalConfig.isoCertification.imageSrc}
            imageAlt={proposalConfig.isoCertification.imageAlt}
            certificationBadgeSrc={proposalConfig.isoCertification.certificationBadgeSrc}
            certificationBadgeAlt={proposalConfig.isoCertification.certificationBadgeAlt}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <FAQ items={proposalConfig.faq} />
      </section>

      {/* Next Steps Section */}
      <section id="next-steps" style={{ marginBottom: "var(--spacing-9xl)" }}>
        <StepsFlow steps={proposalConfig.nextSteps.steps} />
        <div style={{ marginTop: "var(--spacing-xl)" }}>
          <HeaderBox
            header="Ready to discuss your digital transformation?"
            buttonLabel="SCHEDULE A CALL"
            onButtonClick={() => {
              window.location.href = "mailto:contact@tailor-hub.com"
            }}
          />
        </div>
      </section>
    </LandingLayout>
  )
}
