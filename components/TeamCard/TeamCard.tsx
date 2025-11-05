"use client"

import React from "react"
import "./TeamCard.css"

export interface TeamCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Team member photo */
  imageSrc: string
  /** Image alt text */
  imageAlt?: string
  /** Team member name */
  name: string
  /** Job title */
  title: string
}

export const TeamCard = React.forwardRef<HTMLDivElement, TeamCardProps>(
  ({ imageSrc, imageAlt = "", name, title, className = "", ...props }, ref) => {
    const classes = ["team-card", className].filter(Boolean).join(" ")

    return (
      <div ref={ref} className={classes} {...props}>
        <div className="team-card__image">
          <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} />
        </div>
        <div className="team-card__content">
          <h4 className="team-card__name">{name}</h4>
          <p className="team-card__title">{title}</p>
        </div>
      </div>
    )
  },
)

TeamCard.displayName = "TeamCard"
