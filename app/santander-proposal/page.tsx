"use client";

import React from "react";
import { LandingLayout } from "@/components/LandingLayout/LandingLayout";
import { HighlightSection } from "@/components/HighlightSection/HighlightSection";
import { HeaderBox } from "@/components/HeaderBox/HeaderBox";
import { MenuSidebar } from "@/components/MenuSidebar/MenuSidebar";
import { MenuItem } from "@/components/MenuItem/MenuItem";
import { BodyText } from "@/components/BodyText/BodyText";
import { BoxSection } from "@/components/BoxSection/BoxSection";
import { TeamCard } from "@/components/TeamCard/TeamCard";
import { ProjectCard } from "@/components/ProjectCard/ProjectCard";
import { Highlight2Section } from "@/components/Highlight2Section/Highlight2Section";
import { FAQ } from "@/components/FAQ/FAQ";
import { StepsFlow } from "@/components/StepsFlow/StepsFlow";
import { TitleSection } from "@/components/TitleSection/TitleSection";

import proposalConfig from "@/config/proposals/santander-intro-proposal.json";

export default function SantanderProposalPage() {
  const handleScrollToProposal = () => {
    const element = document.getElementById("proposal-content");
    if (element) {
      const offset = 180;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <LandingLayout>
      {/* Hero Section */}
      <HighlightSection concepts={proposalConfig.highlight.concepts} header={proposalConfig.highlight.header} />

      {/* Header Box */}
      <HeaderBox
        overheader={proposalConfig.headerBox.overheader}
        header={proposalConfig.headerBox.header}
        buttonLabel={proposalConfig.headerBox.buttonLabel}
        onButtonClick={handleScrollToProposal}
      />

      {/* Hero Image */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <img
          src={proposalConfig.heroImage.src || "/placeholder.svg"}
          alt={proposalConfig.heroImage.alt}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </section>

      {/* Proposal Content with Sidebar */}
      <section id="proposal-content" style={{ marginBottom: "var(--spacing-9xl)" }}>
        <div style={{ display: "flex", gap: "var(--spacing-xl)", position: "relative" }}>
          {/* Menu Sidebar */}
          <MenuSidebar autoDetectActive={true}>
            {proposalConfig.menuItems.map((item, index) => (
              <MenuItem key={index} href={item.href} number={item.number}>
                {item.label}
              </MenuItem>
            ))}
          </MenuSidebar>

          {/* Main Content */}
          <div style={{ flex: 1 }}>
            {proposalConfig.bodySections.map((section, index) => (
              <div key={index} id={section.id} style={{ marginBottom: index < proposalConfig.bodySections.length - 1 ? "var(--spacing-9xl)" : 0 }}>
                <TitleSection overheader={section.title} />
                <div style={{ marginTop: "var(--gap-header-1)" }}>
                  <BodyText sections={[{ paragraphs: section.paragraphs }]} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <TitleSection overheader="SERVICES" />
        <div style={{ marginTop: "var(--gap-header-1)", display: "flex", flexDirection: "column", gap: "var(--spacing-9xl)" }}>
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
        <div
          style={{
            marginTop: "var(--gap-header-1)",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--spacing-xl)"
          }}
        >
          {proposalConfig.team.members.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              title={member.title}
              imageSrc={member.imageSrc}
              imageAlt={member.imageAlt}
              modalData={member.modalData}
            />
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <TitleSection overheader="CASE STUDIES" />
        <div
          style={{
            marginTop: "var(--gap-header-1)",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--spacing-xl)"
          }}
        >
          {proposalConfig.caseStudies.map((caseStudy, index) => (
            <ProjectCard
              key={index}
              category={caseStudy.category}
              title={caseStudy.title}
              imageSrc={caseStudy.imageSrc}
              imageAlt={caseStudy.imageAlt}
              modalData={caseStudy.modalData}
            />
          ))}
        </div>
      </section>

      {/* Next Steps Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <TitleSection overheader={proposalConfig.nextSteps.overheader} title={proposalConfig.nextSteps.title} />
        <div style={{ marginTop: "var(--gap-header-1)" }}>
          <StepsFlow steps={proposalConfig.nextSteps.steps} direction="horizontal" />
        </div>
      </section>

      {/* Get in Touch CTA */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <HeaderBox
          overheader={proposalConfig.contactBox.overheader}
          header={proposalConfig.contactBox.header}
          buttonLabel={proposalConfig.contactBox.buttonLabel}
          onButtonClick={() => {
            window.open(proposalConfig.contactBox.buttonHref, "_blank");
          }}
        />
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
          badge={{
            src: proposalConfig.isoCertification.certificationBadgeSrc,
            alt: proposalConfig.isoCertification.certificationBadgeAlt
          }}
        />
      </section>

      {/* FAQ Section */}
      <section style={{ marginBottom: "var(--spacing-9xl)" }}>
        <FAQ items={proposalConfig.faq} />
      </section>
    </LandingLayout>
  );
}
