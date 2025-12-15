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
  /** Starting top position for sticky items - defaults to 124px (--spacing-9xl) */
  stickyTopStart?: number
}

export const StickyServicesSection: React.FC<StickyServicesSectionProps> = ({
  children,
  className = "",
  gap = 120,
  stickyTopStart = 124, // --spacing-9xl
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

        const stickyTop = stickyTopStart

        // Start fading when next card touches the bottom of current card's visible area
        const overlapStart = stickyTop + currentRect.height
        const overlapEnd = stickyTop // When next card reaches current card's sticky position

        if (nextRect.top <= overlapStart && nextRect.top > overlapEnd) {
          // Calculate progress from 0 (just touching) to 1 (fully overlapped)
          const progress = (overlapStart - nextRect.top) / (overlapStart - overlapEnd)
          // Start at 0.5 (50%) and fade to 0
          return Math.max(0, 0.5 * (1 - progress))
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
  }, [childArray.length, stickyTopStart])

  return (
    <div
      ref={containerRef}
      className={`sticky-services ${className}`}
      style={{ gap: `${gap}px`, position: "relative", zIndex: 1 }}
    >
      {childArray.map((child, index) => (
        <div
          key={index}
          ref={(el) => {
            itemRefs.current[index] = el
          }}
          className="sticky-services__item"
          style={{
            top: `${stickyTopStart}px`,
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
