import React from 'react';
import './Menu.css';

export interface MenuProps extends React.HTMLAttributes<HTMLElement> {
  /** The menu content (typically MenuItem components) */
  children: React.ReactNode;
  /** Menu variant - starter is default, scrolling is shown when page scrolls */
  variant?: 'starter' | 'scrolling';
}

export const Menu = React.forwardRef<HTMLElement, MenuProps>(
  ({ children, variant = 'starter', className = '', ...props }, ref) => {
    const classes = [
      'menu',
      `menu--${variant}`,
      className
    ].filter(Boolean).join(' ');

    return (
      <nav ref={ref} className={classes} {...props}>
        {children}
      </nav>
    );
  }
);

Menu.displayName = 'Menu';

