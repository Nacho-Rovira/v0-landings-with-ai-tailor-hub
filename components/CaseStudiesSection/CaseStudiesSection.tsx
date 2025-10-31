import React from "react"
import { Card, type CardInsight } from "../Card/Card"
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
  /** Project description (for flip variant) */
  description?: string
  /** Project insights (for flip variant) */
  insights?: CardInsight[]
}

export interface CaseStudiesSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of case studies to display */
  caseStudies: CaseStudy[]
  /** Card variant to use */
  variant?: "default" | "flip"
}

export const CaseStudiesSection = React.forwardRef<HTMLDivElement, CaseStudiesSectionProps>(
  ({ caseStudies, variant = "default", className = "", ...props }, ref) => {
    const classes = ["case-studies-section", className].filter(Boolean).join(" ")

    return (
      <div ref={ref} className={classes} {...props}>
        <div className="case-studies-section__scroll-container">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              variant={variant}
              category={study.category}
              title={study.title}
              imageSrc={study.imageSrc}
              imageAlt={study.imageAlt}
              description={study.description}
              insights={study.insights}
            />
          ))}
        </div>
      </div>
    )
  },
)

CaseStudiesSection.displayName = "CaseStudiesSection"
