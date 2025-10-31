import React from "react"
import { Card } from "../Card/Card"
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
            <Card
              key={index}
              category={study.category}
              title={study.title}
              imageSrc={study.imageSrc}
              imageAlt={study.imageAlt}
            />
          ))}
        </div>
      </div>
    )
  },
)

CaseStudiesSection.displayName = "CaseStudiesSection"
