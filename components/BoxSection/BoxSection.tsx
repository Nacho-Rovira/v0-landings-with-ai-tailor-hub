"use client"

import React from "react"
import { Button } from "../Button/Button"
import "./BoxSection.css"

export interface BoxSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Box section variant */
  variant?: "default" | "mobile" | "compact"
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
  /** Certification badge image source (appears below body text) */
  certificationBadgeSrc?: string
  /** Certification badge alt text */
  certificationBadgeAlt?: string
}

export const BoxSection = React.forwardRef<HTMLDivElement, BoxSectionProps>(
  (
    {
      variant = "default",
      overheader,
      header,
      bodyText,
      secondaryText,
      buttonLabel,
      onButtonClick,
      imageSrc,
      imageAlt = "Section image",
      certificationBadgeSrc,
      certificationBadgeAlt = "Certification badge",
      className = "",
      ...props
    },
    ref,
  ) => {
    const classes = ["box-section", `box-section--${variant}`, className].filter(Boolean).join(" ")

    const hasBottomContent = Boolean(secondaryText || buttonLabel)

    return (
      <div ref={ref} className={classes} {...props}>
        {/* Image */}
        <div className="box-section__image">
          <img 
            src={imageSrc || "/placeholder.svg?height=400&width=600&query=professional+business+section+image"} 
            alt={imageAlt} 
          />
        </div>

        {/* Content */}
        <div className="box-section__content">
          {/* Header + Body */}
          <div className="box-section__header-body">
            {/* Title Section */}
            <div className="box-section__title">
              {overheader && <p className="box-section__overheader">{overheader}</p>}
              {header && <h2 className="box-section__header">{header}</h2>}
            </div>

            {/* Main Body Text */}
            {bodyText && <p className="box-section__body">{bodyText}</p>}

            {certificationBadgeSrc && (
              <img
                src={certificationBadgeSrc || "/placeholder.svg"}
                alt={certificationBadgeAlt}
                className="box-section__certification-badge"
              />
            )}
          </div>

          {/* Bottom Section: Secondary Text + Button - only render if content exists */}
          {hasBottomContent && (
            <div className="box-section__bottom">
              {secondaryText && <p className="box-section__secondary">{secondaryText}</p>}
              {buttonLabel && <Button onClick={onButtonClick}>{buttonLabel}</Button>}
            </div>
          )}
        </div>
      </div>
    )
  },
)

BoxSection.displayName = "BoxSection"
