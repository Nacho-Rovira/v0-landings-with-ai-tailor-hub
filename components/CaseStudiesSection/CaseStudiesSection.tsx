import React from "react"
import { Card } from "../Card/Card"
import { ProjectModal, type ProjectModalData } from "../ProjectModal/ProjectModal"
import "./CaseStudiesSection.css"

export interface CaseStudy {
  /** Project category */
  category: string
  /** Project title */
  title: string
  /** Project image source */
  imageSrc: string
  /** Project image alt text */
  imageAlt: string
  /** Full project data for modal */
  modalData: ProjectModalData
}

export interface CaseStudiesSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of case studies to display */
  caseStudies: CaseStudy[]
}

export const CaseStudiesSection = React.forwardRef<HTMLDivElement, CaseStudiesSectionProps>(
  ({ caseStudies, className = "", ...props }, ref) => {
    const classes = ["case-studies-section", className].filter(Boolean).join(" ")

    return (
      <div ref={ref} className={classes} {...props}>
        <div className="case-studies-section__scroll-container">
          {caseStudies.map((study, index) => (
            <ProjectModal key={index} project={study.modalData}>
              <Card
                category={study.category}
                title={study.title}
                imageSrc={study.imageSrc}
                imageAlt={study.imageAlt}
                style={{ cursor: "pointer" }}
              />
            </ProjectModal>
          ))}
        </div>
      </div>
    )
  },
)

CaseStudiesSection.displayName = "CaseStudiesSection"
