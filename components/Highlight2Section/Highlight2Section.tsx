import React from "react"
import "./Highlight2Section.css"

export interface Highlight2SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Left overheader text */
  overheaderLeft?: string
  /** Right overheader text */
  overheaderRight?: string
  /** Content items to display in 3 columns x 2 rows grid */
  items?: string[]
}

const defaultItems = ["CONTENTFUL", "AWS", "SHOPIFY PARTNERS", "MICROSOFT AI CLOUD PARTNER", "NETLIFY", ""]

export const Highlight2Section = React.forwardRef<HTMLDivElement, Highlight2SectionProps>(
  (
    { overheaderLeft = "OFICIAL", overheaderRight = "PARTNERS", items = defaultItems, className = "", ...props },
    ref,
  ) => {
    const classes = ["highlight2-section", className].filter(Boolean).join(" ")

    return (
      <div ref={ref} className={classes} {...props}>
        <div className="text-style-mono home-header-description">
          <span>{overheaderLeft}</span>
          <span>{overheaderRight}</span>
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
