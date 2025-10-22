import React from "react"

export interface TailorHubLogoProps extends React.SVGProps<SVGSVGElement> {
  /** Width of the logo in pixels (height scales proportionally) */
  size?: number
  /** Color of the logo (defaults to currentColor to inherit from parent) */
  color?: string
}

export const TailorHubLogo = React.forwardRef<SVGSVGElement, TailorHubLogoProps>(
  ({ size = 225, color = "currentColor", className = "", ...props }, ref) => {
    // Calculate height based on aspect ratio (201/225)
    const height = (size * 201) / 225

    return (
      <svg
        ref={ref}
        width={size}
        height={height}
        viewBox="0 0 225 201"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 225 201 V 167.499 H 174.07 C 168.749 167.499 162.668 164.522 158.108 159.31 L 136.064 133.999 H 225 V 100.5 H 162.668 L 206.757 49.1331 L 180.152 27.5443 L 129.223 86.3551 V 0 H 95.0166 V 86.3551 L 44.8478 27.5443 L 18.2432 49.1331 L 62.3308 100.5 H 0 V 133.999 H 88.9355 L 66.8917 159.31 C 62.3308 164.522 56.2498 167.499 50.929 167.499 H 0 V 201 H 53.2094 C 66.8917 201 80.5741 195.788 88.1753 186.854 L 112.5 158.566 L 136.824 186.854 C 144.425 195.044 158.108 201 171.79 201 H 225 Z"
          fill={color}
          stroke="none"
          strokeWidth="0"
        />
      </svg>
    )
  },
)

TailorHubLogo.displayName = "TailorHubLogo"
