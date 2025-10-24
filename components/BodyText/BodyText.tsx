import React from 'react'
import './BodyText.css'

export interface BodyTextSection {
  /** Section title */
  title: string
  /** Array of paragraph texts */
  paragraphs: string[]
  /** Optional quote card */
  quote?: {
    text: string
    author: string
  }
}

export interface BodyTextProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of text sections */
  sections?: BodyTextSection[]
}

const defaultSections: BodyTextSection[] = [
  {
    title: 'THE CHALLENGE',
    paragraphs: [
      'Transform raw and hardly accesible data into actionable intelligence. With advanced AI models, we help you uncover patterns, predict outcomes, and drive smarter decision-making at every level of your organization.',
      'Transform raw and hardly accesible data into actionable intelligence. With advanced AI models, we help you uncover patterns, predict outcomes, and drive smarter decision-making at every level of your organization.'
    ]
  }
]

export const BodyText = React.forwardRef<HTMLDivElement, BodyTextProps>(
  ({ 
    sections = defaultSections,
    className = '',
    ...props
  }, ref) => {
    const classes = [
      'body-text',
      className
    ].filter(Boolean).join(' ')

    return (
      <div ref={ref} className={classes} {...props}>
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="body-text__section">
            {/* Section Title */}
            <h3 className="body-text__title">{section.title}</h3>

            {/* Paragraphs Container */}
            <div className="body-text__content">
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex} className="body-text__paragraph">
                  {paragraph}
                </p>
              ))}

              {/* Optional Quote Card */}
              {section.quote && (
                <div className="body-text__quote-card">
                  <p className="body-text__quote-text">{section.quote.text}</p>
                  <p className="body-text__quote-author">{section.quote.author}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  }
)

BodyText.displayName = 'BodyText'
