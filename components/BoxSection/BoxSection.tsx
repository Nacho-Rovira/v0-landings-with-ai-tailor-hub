import React from 'react'
import { Button } from '../Button/Button'
import './BoxSection.css'

export interface BoxSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Box section variant */
  variant?: 'default' | 'mobile'
  /** Overheader text (e.g., "S/ 01") */
  overheader?: string
  /** Header/title text */
  header?: string
  /** Main body text */
  bodyText?: string
  /** Secondary text (bottom section) */
  secondaryText?: string
  /** Button label */
  buttonLabel?: string
  /** Button click handler */
  onButtonClick?: () => void
  /** Image source */
  imageSrc?: string
  /** Image alt text */
  imageAlt?: string
}

export const BoxSection = React.forwardRef<HTMLDivElement, BoxSectionProps>(
  ({ 
    variant = 'default',
    overheader = 'S/ 01',
    header = 'PROJECT NAME',
    bodyText = 'Transform raw and hardly accesible data into actionable intelligence. With advanced AI models, we help you uncover patterns, predict outcomes, and drive smarter decision-making at every level of your organization.',
    secondaryText = 'Transform raw and hardly accesible data into actionable intelligence. With advanced AI models, we help you uncover patterns, predict outcomes, and drive smarter decision-making at every level of your organization.',
    buttonLabel = 'BUTTON',
    onButtonClick,
    imageSrc,
    imageAlt = 'Section image',
    className = '',
    ...props
  }, ref) => {
    const classes = [
      'box-section',
      `box-section--${variant}`,
      className
    ].filter(Boolean).join(' ')

    return (
      <div ref={ref} className={classes} {...props}>
        {/* Image */}
        <div className="box-section__image">
          {imageSrc && <img src={imageSrc} alt={imageAlt} />}
        </div>

        {/* Content */}
        <div className="box-section__content">
          {/* Header + Body */}
          <div className="box-section__header-body">
            {/* Title Section */}
            <div className="box-section__title">
              <p className="box-section__overheader">{overheader}</p>
              <h2 className="box-section__header">{header}</h2>
            </div>
            
            {/* Main Body Text */}
            <p className="box-section__body">{bodyText}</p>
          </div>

          {/* Bottom Section: Secondary Text + Button */}
          <div className="box-section__bottom">
            <p className="box-section__secondary">{secondaryText}</p>
            <Button onClick={onButtonClick}>{buttonLabel}</Button>
          </div>
        </div>
      </div>
    )
  }
)

BoxSection.displayName = 'BoxSection'

