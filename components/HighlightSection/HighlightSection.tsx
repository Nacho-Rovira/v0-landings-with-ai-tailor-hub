import React from 'react'
import './HighlightSection.css'

export interface HighlightSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Concept items to display in overheader */
  concepts?: string[]
  /** Main header text */
  header?: string
}

const defaultConcepts = [
  'MENDESALTAREN',
  'MINIMUNRUN',
  'NO CODE HACKERS',
  'MITO'
]

export const HighlightSection = React.forwardRef<HTMLDivElement, HighlightSectionProps>(
  ({ 
    concepts = defaultConcepts,
    header = 'We build advanced tech solutions to accelerate and optimize your business needs.',
    className = '',
    ...props
  }, ref) => {
    const classes = [
      'highlight-section',
      className
    ].filter(Boolean).join(' ')

    return (
      <div ref={ref} className={classes} {...props}>
        {/* Concepts Row (Overheader) */}
        <div className="highlight-section__concepts">
          {concepts.map((concept, index) => (
            <div key={index} className="highlight-section__concept">
              {concept}
            </div>
          ))}
        </div>

        {/* Main Header */}
        {header && <h2 className="highlight-section__header">{header}</h2>}
      </div>
    )
  }
)

HighlightSection.displayName = 'HighlightSection'

