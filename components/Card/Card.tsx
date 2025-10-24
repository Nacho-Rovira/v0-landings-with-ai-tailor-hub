import React from 'react'
import './Card.css'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card variant */
  variant?: 'default' | 'mobile'
  /** Card category/overheader text */
  category?: string
  /** Card title */
  title?: string
  /** Card image source */
  imageSrc?: string
  /** Card image alt text */
  imageAlt?: string
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    variant = 'default',
    category = 'SOFTWARE AND AI',
    title = 'PROJECT NAME',
    imageSrc,
    imageAlt = 'Project image',
    className = '',
    ...props
  }, ref) => {
    const classes = [
      'card',
      `card--${variant}`,
      className
    ].filter(Boolean).join(' ')

    return (
      <div ref={ref} className={classes} {...props}>
        {/* Image */}
        {imageSrc && (
          <div className="card__image">
            <img src={imageSrc} alt={imageAlt} />
          </div>
        )}

        {/* Title Section */}
        <div className="card__content">
          <p className="card__category">{category}</p>
          <h3 className="card__title">{title}</h3>
        </div>
      </div>
    )
  }
)

Card.displayName = 'Card'
