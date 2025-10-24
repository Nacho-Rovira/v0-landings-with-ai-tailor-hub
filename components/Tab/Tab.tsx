import React from 'react'
import './Tab.css'

export interface TabProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tab label text */
  label?: string
  /** Tab state */
  state?: 'default' | 'hover' | 'selected'
  /** Click handler */
  onClick?: () => void
}

export const Tab = React.forwardRef<HTMLDivElement, TabProps>(
  ({ 
    label = 'TAB',
    state = 'default',
    onClick,
    className = '',
    ...props
  }, ref) => {
    const classes = [
      'tab',
      `tab--${state}`,
      className
    ].filter(Boolean).join(' ')

    return (
      <div 
        ref={ref} 
        className={classes}
        onClick={onClick}
        role="tab"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onClick?.()
          }
        }}
        {...props}
      >
        <span className="tab__label">{label}</span>
      </div>
    )
  }
)

Tab.displayName = 'Tab'
