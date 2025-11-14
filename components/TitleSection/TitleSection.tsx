"use client"

import React from "react"
import "./TitleSection.css"

export interface TitleSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Overheader text (small label above title) */
  overheader?: string
  /** Main title/header text */
  title?: string
  /** Paragraph text */
  paragraph?: string
}

export const TitleSection = React.forwardRef<HTMLDivElement, TitleSectionProps>(
  ({ overheader, title, paragraph, className = "", ...props }, ref) => {
    const classes = ["title-section", className].filter(Boolean).join(" ")

    return (
      <div ref={ref} className={classes} {...props}>
        {overheader && <p className="title-section__overheader">{overheader}</p>}
        {paragraph && <p className="title-section__paragraph">{paragraph}</p>}
      </div>
    )
  },
)

TitleSection.displayName = "TitleSection"
