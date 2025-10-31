import React from "react"
import "./Insight.css"

export interface InsightProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Insight value/number */
  value: string
  /** Insight label/description */
  label: string
}

export const Insight = React.forwardRef<HTMLDivElement, InsightProps>(
  ({ value, label, className = "", ...props }, ref) => {
    const classes = ["insight", className].filter(Boolean).join(" ")

    return (
      <div ref={ref} className={classes} {...props}>
        <p className="insight__value">{value}</p>
        <p className="insight__label">{label}</p>
      </div>
    )
  },
)

Insight.displayName = "Insight"
