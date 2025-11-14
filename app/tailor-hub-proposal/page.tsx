"use client"

import { useState } from "react"
import HighlightSection from "@/components/HighlightSection/HighlightSection"
import HeaderBox from "@/components/HeaderBox/HeaderBox"
import MenuSidebar from "@/components/MenuSidebar/MenuSidebar"
import TitleSection from "@/components/TitleSection/TitleSection"
import BodyText from "@/components/BodyText/BodyText"
import TimelineSection from "@/components/TimelineSection/TimelineSection"
import BudgetSection from "@/components/BudgetSection/BudgetSection"
import BoxSection from "@/components/BoxSection/BoxSection"
import TeamSection from "@/components/TeamSection/TeamSection"
import CaseStudiesSection from "@/components/CaseStudiesSection/CaseStudiesSection"
import FAQ from "@/components/FAQ/FAQ"
import Highlight2Section from "@/components/Highlight2Section/Highlight2Section"
import Footer from "@/components/Footer/Footer"
import TechBox from "@/components/TechBox/TechBox"
import proposalConfig from "@/config/proposals/tailor-hub-proposal.json"

export default function TailorHubProposal() {
  const [activeSection, setActiveSection] = useState("")

  return (
    <div style={{ backgroundColor: "var(--color-neutral-00)" }}>
      {/* Hero Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <HighlightSection concepts={proposalConfig.highlight.concepts} header={proposalConfig.highlight.header} />
        <HeaderBox
          overheader={proposalConfig.headerBox.overheader}
          header={proposalConfig.headerBox.header}
          buttonLabel={proposalConfig.headerBox.buttonLabel}
          backgroundImage={proposalConfig.heroImage.src}
        />
      </section>

      {/* Menu Sidebar */}
      <MenuSidebar items={proposalConfig.menuItems} activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Main Content Container */}
      <div
        style={{
          maxWidth: "var(--layout-content-max)",
          margin: "0 auto",
          padding: "0 var(--spacing-page-x)",
        }}
      >
        {/* Proposal Body Content */}
        <section style={{ marginBottom: "var(--spacing-9xl)" }}>
          {proposalConfig.bodySections.map((section, index) => (
            <div key={section.id} id={section.id}>
              <TitleSection title={section.title} />
              <div style={{ marginTop: "var(--spacing-xl)" }}>
                <BodyText>
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph }} />
                  ))}
                </BodyText>
              </div>
              {index < proposalConfig.bodySections.length - 1 && <div style={{ height: "var(--spacing-9xl)" }} />}
            </div>
          ))}
        </section>

        {/* Technology & Architecture Section */}
        <section id="technology" style={{ marginBottom: "var(--spacing-9xl)" }}>
          <TitleSection title="TECHNOLOGY & ARCHITECTURE" />
          <div style={{ marginTop: "var(--spacing-xl)" }}>
            <BodyText>
              <p>{proposalConfig.technology.description}</p>

              {proposalConfig.technology.categories && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "var(--spacing-l)",
                    marginTop: "var(--spacing-xl)",
                  }}
                >
                  {proposalConfig.technology.categories.map((category, index) => (
                    <TechBox key={index} title={category.title} technologies={category.technologies} />
                  ))}
                </div>
              )}
            </BodyText>
          </div>
        </section>

        {/* Roadmap & Phases Section */}
        <section id="roadmap" style={{ marginBottom: "var(--spacing-9xl)" }}>
          <TitleSection title="ROADMAP & PHASES" />
          <div style={{ marginTop: "var(--spacing-xl)" }}>
            <TimelineSection phases={proposalConfig.phases} />
          </div>
        </section>

        {/* Budget Section */}
        <section id="budget" style={{ marginBottom: "var(--spacing-9xl)" }}>
          <TitleSection title="BUDGET & CONDITIONS" />
          <div style={{ marginTop: "var(--spacing-xl)" }}>
            <BudgetSection
              items={proposalConfig.budget.items}
              total={proposalConfig.budget.total}
              notes={proposalConfig.budget.notes}
            />
          </div>
        </section>

        {/* Services Section */}
        {proposalConfig.services && (
          <section style={{ marginBottom: "var(--spacing-9xl)" }}>
            <TitleSection overheader="SERVICES" />
            <div
              style={{
                marginTop: "var(--spacing-xl)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--spacing-2xl)",
              }}
            >
              {proposalConfig.services.map((service, index) => (
                <BoxSection
                  key={index}
                  overheader={service.overheader}
                  header={service.header}
                  bodyText={service.bodyText}
                  imageSrc={service.imageSrc}
                  imageAlt={service.imageAlt}
                  layout={index % 2 === 0 ? "image-left" : "image-right"}
                />
              ))}
            </div>
          </section>
        )}

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
            <CaseStudiesSection projects={proposalConfig.caseStudies} />
          </div>
        </section>

        {/* Partners Section */}
        {proposalConfig.partners && (
          <section style={{ marginBottom: "var(--spacing-9xl)" }}>
            <Highlight2Section concepts={proposalConfig.partners.concepts} items={proposalConfig.partners.items} />
          </section>
        )}

        {/* ISO Certification Section */}
        {proposalConfig.isoCertification && (
          <section style={{ marginBottom: "var(--spacing-9xl)" }}>
            <TitleSection overheader={proposalConfig.isoCertification.overheader} />
            <BoxSection
              overheader={proposalConfig.isoCertification.overheader}
              header={proposalConfig.isoCertification.header}
              bodyText={proposalConfig.isoCertification.bodyText}
              imageSrc={proposalConfig.isoCertification.imageSrc}
              imageAlt={proposalConfig.isoCertification.imageAlt}
              layout="image-right"
            />
          </section>
        )}

        {/* FAQ Section */}
        <section style={{ marginBottom: "var(--spacing-9xl)" }}>
          <TitleSection overheader="FREQUENTLY ASKED QUESTIONS" />
          <div style={{ marginTop: "var(--spacing-xl)" }}>
            <FAQ items={proposalConfig.faq} />
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
