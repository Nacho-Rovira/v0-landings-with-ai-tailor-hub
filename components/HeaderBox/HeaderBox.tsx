import React from 'react'
import { Button } from '../Button/Button'
import './HeaderBox.css'

export interface HeaderBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Overheader text (label) */
  overheader?: string
  /** Header text (h2) */
  header?: string
  /** Button label */
  buttonLabel?: string
  /** Button click handler */
  onButtonClick?: () => void
}

export const HeaderBox = React.forwardRef<HTMLDivElement, HeaderBoxProps>(
  ({ 
    overheader = 'WORK WITH TAILOR',
    header = 'We are a Madrid-based global company. We believe giving our teams the autonomy to work wherever they want delivers the best outcomes.',
    buttonLabel = 'SEND YOUR CV',
    onButtonClick,
    className = '',
    ...props
  }, ref) => {
    const classes = [
      'header-box',
      className
    ].filter(Boolean).join(' ')

    return (
      <div ref={ref} className={classes} {...props}>
        {/* Overheader Section */}
        {overheader && (
          <div className="header-box__header-section">
            <div className="header-box__overheader">
              <span>/</span>
              <span>{overheader}</span>
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="header-box__content">
          {header && <h2 className="header-box__header">{header}</h2>}
          {buttonLabel && (
            <Button onClick={onButtonClick}>{buttonLabel}</Button>
          )}
        </div>
      </div>
    )
  }
)

HeaderBox.displayName = 'HeaderBox'
