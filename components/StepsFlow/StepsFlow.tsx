"use client"

import React from "react"
import "./StepsFlow.css"

export interface Step {
  /** Step title */
  title: string
  /** Step description */
  description: string
}

export interface StepsFlowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array of steps */
  steps: Step[]
}

export const StepsFlow = React.forwardRef<HTMLDivElement, StepsFlowProps>(
  ({ steps, className = "", ...props }, ref) => {
    const classes = ["steps-flow", className].filter(Boolean).join(" ")

    return (
      <div ref={ref} className={classes} {...props}>
        {steps.map((step, index) => (
          <div key={index} className="steps-flow__step">
            <div className="steps-flow__number">{String(index + 1).padStart(2, "0")}</div>
            <div className="steps-flow__content">
              <h4 className="steps-flow__title">{step.title}</h4>
              <p className="steps-flow__description">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    )
  },
)

StepsFlow.displayName = "StepsFlow"
