import React from 'react';
import './MenuItem.css';

export interface MenuItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** The menu item content */
  children: React.ReactNode;
  /** Whether the menu item is currently selected/active */
  isSelected?: boolean;
  /** The href for the menu item link */
  href?: string;
}

export const MenuItem = React.forwardRef<HTMLAnchorElement, MenuItemProps>(
  ({ children, isSelected = false, href = '#', className = '', ...props }, ref) => {
    const classes = [
      'menu-item',
      isSelected ? 'menu-item--selected' : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <a ref={ref} href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }
);

MenuItem.displayName = 'MenuItem';
