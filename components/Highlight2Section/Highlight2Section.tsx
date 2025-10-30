import React from "react"
import "./Highlight2Section.css"

export interface Highlight2SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Concept items to display in overheader */
  concepts?: string[]
  /** Content items to display in 3 columns x 2 rows grid */
  items?: string[]
}

const defaultConcepts = ["OFICIAL", "PARTNERS"]
const defaultItems = ["CONTENTFUL", "AWS", "SHOPIFY PARTNERS", "MICROSOFT AI CLOUD PARTNER", "NETLIFY", ""]

export const Highlight2Section = React.forwardRef<HTMLDivElement, Highlight2SectionProps>(
  ({ concepts = defaultConcepts, items = defaultItems, className = "", ...props }, ref) => {
    const classes = ["highlight2-section", className].filter(Boolean).join(" ")

    const renderConcept = (concept: string) => {
      const parts = concept.split("<span>")
      return parts.map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i < parts.length - 1 && <br />}
        </React.Fragment>
      ))
    }

    return (
      <div ref={ref} className={classes} {...props}>
        <div className="text-style-mono home-header-description">
          {concepts.map((concept, index) => (
            <span key={index}>{renderConcept(concept)}</span>
          ))}
        </div>

        {/* Content Grid: 3 columns x 2 rows */}
        <div className="highlight2-section__grid">
          {items.map((item, index) => (
            <div key={index} className="highlight2-section__item">
              {item}
            </div>
          ))}
        </div>
      </div>
    )
  },
)

Highlight2Section.displayName = "Highlight2Section"
