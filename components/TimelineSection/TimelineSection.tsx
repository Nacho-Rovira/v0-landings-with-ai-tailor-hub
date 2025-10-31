"use client"

import React from "react"
import { Chip } from "../Chip/Chip"
import "./TimelineSection.css"

export interface TimelinePhase {
  /** Phase number (e.g., "01", "02") */
  number: string
  /** Phase title */
  title: string
  /** Phase description */
  description: string
  /** Optional duration (e.g., "4 weeks", "Q1 2025") */
  duration?: string
  /** Optional list of deliverables or milestones */
  deliverables?: string[]
}

export interface TimelineSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of timeline phases */
  phases: TimelinePhase[]
}

export const TimelineSection = React.forwardRef<HTMLDivElement, TimelineSectionProps>(
  ({ phases, className = "", ...props }, ref) => {
    const classes = ["timeline-section", className].filter(Boolean).join(" ")

    return (
      <div ref={ref} className={classes} {...props}>
        {phases.map((phase, index) => (
          <div key={index} className="timeline-section__phase">
            <div className="timeline-section__marker">
              <div className="timeline-section__dot" />
              {index < phases.length - 1 && <div className="timeline-section__line" />}
            </div>

            <div className="timeline-section__content">
              <div className="timeline-section__header">
                <span className="timeline-section__number">/{phase.number}</span>
                <h3 className="timeline-section__title">{phase.title}</h3>
              </div>

              {phase.duration && <Chip variant="default">{phase.duration}</Chip>}

              <p className="timeline-section__description">{phase.description}</p>

              {phase.deliverables && phase.deliverables.length > 0 && (
                <ul className="timeline-section__deliverables">
                  {phase.deliverables.map((deliverable, idx) => (
                    <li key={idx}>{deliverable}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  },
)

TimelineSection.displayName = "TimelineSection"
