import proposalConfig from "@/config/proposals/barcelo-hotel-proposal.json"
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

export default function BarceloProposalPage() {
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
                {proposalConfig.technology.description}
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "var(--spacing-m)",
                }}
              >
                {proposalConfig.technology.categories?.map((category, index) => (
                  <TechBox key={index} title={category.title} technologies={category.technologies} />
                ))}
              </div>
            </div>

            {/* Roadmap Section */}
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
              <TimelineSection phases={proposalConfig.phases} />
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
                items={proposalConfig.budget.items}
                total={proposalConfig.budget.total}
                notes={proposalConfig.budget.notes}
              />
            </div>

            {/* Infrastructure & Support Section */}
            <div id="infra" style={{ marginTop: "var(--spacing-4xl)" }}>
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
                INFRASTRUCTURE & SUPPORT
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
                {proposalConfig.infrastructure?.description}
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--spacing-9xl)",
                  marginBottom: "var(--spacing-xl)",
                }}
              >
                {proposalConfig.infrastructure?.serviceCategories?.map((category, index) => {
                  // Array of placeholder images to use
                  const placeholderImages = [
                    "/images/design-mode/desarrollo de software(2).jpeg",
                    "/images/design-mode/Design systems.png",
                    "/images/design-mode/auditoria y formacion(2).jpeg",
                  ]

                  return (
                    <BoxSection
                      key={index}
                      variant="compact"
                      header={category.title}
                      bodyText={category.items.join(", ")}
                      imageSrc={placeholderImages[index % placeholderImages.length]}
                      imageAlt={`${category.title} services`}
                    />
                  )
                })}
              </div>
            </div>
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
        <TitleSection overheader="FREQUENTLY ASKED QUESTIONS" title="FAQ" />
        <div style={{ marginTop: "var(--spacing-xl)" }}>
          <FAQ items={proposalConfig.faq} />
        </div>
      </section>
    </LandingLayout>
  )
}
