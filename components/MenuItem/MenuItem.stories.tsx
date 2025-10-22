import React from 'react';
import { MenuItem } from './MenuItem';

/**
 * MenuItem component examples
 * These can be used with Storybook or as reference examples
 */

export default {
  title: 'Components/MenuItem',
  component: MenuItem,
};

// Default menu item
export const Default = () => (
  <MenuItem href="#services">SERVICES</MenuItem>
);

// Hover state (simulated)
export const Hover = () => (
  <MenuItem href="#projects" style={{ color: '#D4D4D4' }}>
    PROJECTS
  </MenuItem>
);

// Selected/active menu item
export const Selected = () => (
  <MenuItem href="#about" isSelected>
    ABOUT
  </MenuItem>
);

// Multiple menu items together
export const MultipleItems = () => (
  <div style={{ display: 'flex', gap: '32px' }}>
    <MenuItem href="#services">SERVICES</MenuItem>
    <MenuItem href="#projects">PROJECTS</MenuItem>
    <MenuItem href="#about" isSelected>ABOUT</MenuItem>
    <MenuItem href="#contact">CONTACT</MenuItem>
  </div>
);

