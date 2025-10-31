import React from "react"
import "./Card.css"

export interface CardInsight {
  value: string
  label: string
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card variant */
  variant?: "default" | "mobile" | "flip"
  /** Card category/overheader text */
  category?: string
  /** Card title */
  title?: string
  /** Card image source */
  imageSrc?: string
  /** Card image alt text */
  imageAlt?: string
  /** Card description (for flip variant) */
  description?: string
  /** Card insights (for flip variant) */
  insights?: CardInsight[]
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "default",
      category = "SOFTWARE AND AI",
      title = "PROJECT NAME",
      imageSrc,
      imageAlt = "Project image",
      description,
      insights = [],
      className = "",
      ...props
    },
    ref,
  ) => {
    const classes = ["card", `card--${variant}`, className].filter(Boolean).join(" ")

    // Flip variant with front and back faces
    if (variant === "flip") {
      return (
        <div ref={ref} className={classes} {...props}>
          <div className="card__inner">
            {/* Front Face */}
            <div className="card__face card__face--front">
              {imageSrc && (
                <div className="card__image">
                  <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} />
                </div>
              )}
              <div className="card__content">
                <p className="card__category">{category}</p>
                <h3 className="card__title">{title}</h3>
              </div>
            </div>

            {/* Back Face */}
            <div className="card__face card__face--back">
              {imageSrc && (
                <div className="card__image card__image--blurred">
                  <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} />
                  <div className="card__overlay" />
                </div>
              )}
              <div className="card__content card__content--back">
                {description && <p className="card__description">{description}</p>}
                {insights.length > 0 && (
                  <div className="card__insights">
                    {insights.map((insight, index) => (
                      <div key={index} className="card__insight">
                        <p className="card__insight-value">{insight.value}</p>
                        <p className="card__insight-label">{insight.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )
    }

    // Default and mobile variants
    return (
      <div ref={ref} className={classes} {...props}>
        {imageSrc && (
          <div className="card__image">
            <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} />
          </div>
        )}

        <div className="card__content">
          <p className="card__category">{category}</p>
          <h3 className="card__title">{title}</h3>
        </div>
      </div>
    )
  },
)

Card.displayName = "Card"
