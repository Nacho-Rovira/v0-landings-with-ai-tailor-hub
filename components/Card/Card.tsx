"use client"

import React from "react"
import { Button } from "../Button/Button"
import "./Card.css"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card variant */
  variant?: "default" | "mobile"
  /** Image source URL */
  imageSrc?: string
  /** Image alt text */
  imageAlt?: string
  /** Category/overheader text */
  category?: string
  /** Title text */
  title?: string
  /** Show the "SEE PROJECT" button */
  showButton?: boolean
  /** Button click handler */
  onButtonClick?: () => void
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "default",
      imageSrc,
      imageAlt = "",
      category,
      title,
      showButton = false,
      onButtonClick,
      className = "",
      ...props
    },
    ref,
  ) => {
    const classes = ["card", variant !== "default" && `card--${variant}`, className].filter(Boolean).join(" ")

    return (
      <div ref={ref} className={classes} {...props}>
        {imageSrc && (
          <div className="card__image">
            <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} />
          </div>
        )}
        <div className="card__content">
          {category && <div className="card__category">{category}</div>}
          {title && <h3 className="card__title">{title}</h3>}
        </div>
        {showButton && (
          <div className="card__button">
            <Button onClick={onButtonClick}>SEE PROJECT</Button>
          </div>
        )}
      </div>
    )
  },
)

Card.displayName = "Card"
