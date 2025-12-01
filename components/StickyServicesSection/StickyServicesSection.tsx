"use client"

import React from "react"
import "./StickyServicesSection.css"

export interface StickyServicesSectionProps {
  /** Array of service items to render */
  children: React.ReactNode
  /** Optional className */
  className?: string
}

export const StickyServicesSection: React.FC<StickyServicesSectionProps> = ({ children, className = "" }) => {
  const childArray = React.Children.toArray(children)

  return (
    <div className={`sticky-services ${className}`}>
      {childArray.map((child, index) => (
        <div
          key={index}
          className="sticky-services__item"
          style={{
            // Each card sticks at a slightly lower position to create stacking effect
            top: `${80 + index * 20}px`,
            // Higher z-index for later items so they stack on top
            zIndex: index + 1,
          }}
        >
          <div className="sticky-services__card">{child}</div>
        </div>
      ))}
    </div>
  )
}

StickyServicesSection.displayName = "StickyServicesSection"
