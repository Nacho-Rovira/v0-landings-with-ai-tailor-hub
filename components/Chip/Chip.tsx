"use client"

import React from "react"
import "./Chip.css"

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Chip content */
  children: React.ReactNode
  /** Optional variant for different chip styles */
  variant?: "default" | "primary" | "button"
}

export const Chip = React.forwardRef<HTMLSpanElement, ChipProps>(
  ({ children, variant = "default", className = "", ...props }, ref) => {
    const classes = ["chip", `chip--${variant}`, className].filter(Boolean).join(" ")

    return (
      <span ref={ref} className={classes} {...props}>
        {children}
      </span>
    )
  },
)

Chip.displayName = "Chip"
