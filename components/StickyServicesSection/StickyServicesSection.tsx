"use client"

import React, { useEffect, useRef, useState } from "react"
import "./StickyServicesSection.css"

export interface StickyServicesSectionProps {
  /** Array of service items to render */
  children: React.ReactNode
  /** Optional className */
  className?: string
  /** Gap between service items - defaults to 120px to match original spacing */
  gap?: number
}

export const StickyServicesSection: React.FC<StickyServicesSectionProps> = ({
  children,
  className = "",
  gap = 120,
}) => {
  const childArray = React.Children.toArray(children)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const [opacities, setOpacities] = useState<number[]>(childArray.map(() => 1))

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const newOpacities = itemRefs.current.map((itemRef, index) => {
        if (!itemRef) return 1

        const nextItemRef = itemRefs.current[index + 1]
        if (!nextItemRef) return 1 // Last item stays at full opacity

        const currentRect = itemRef.getBoundingClientRect()
        const nextRect = nextItemRef.getBoundingClientRect()

        // Calculate sticky top position for this item
        const stickyTop = 80 + index * 20

        // When the next card starts overlapping, fade out current card
        // Start fading when next card is 100px away from current card's bottom
        const overlapStart = stickyTop + currentRect.height - 100
        const overlapEnd = stickyTop + 20 // Next card's sticky position

        if (nextRect.top <= overlapStart && nextRect.top > overlapEnd) {
          // Calculate opacity based on how much overlap
          const progress = (overlapStart - nextRect.top) / (overlapStart - overlapEnd)
          return Math.max(0, 1 - progress)
        } else if (nextRect.top <= overlapEnd) {
          return 0
        }

        return 1
      })

      setOpacities(newOpacities)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [childArray.length])

  return (
    <div ref={containerRef} className={`sticky-services ${className}`} style={{ gap: `${gap}px` }}>
      {childArray.map((child, index) => (
        <div
          key={index}
          ref={(el) => {
            itemRefs.current[index] = el
          }}
          className="sticky-services__item"
          style={{
            top: `${80 + index * 20}px`,
            zIndex: index + 1,
          }}
        >
          <div className="sticky-services__card" style={{ opacity: opacities[index] }}>
            {child}
          </div>
        </div>
      ))}
    </div>
  )
}

StickyServicesSection.displayName = "StickyServicesSection"
