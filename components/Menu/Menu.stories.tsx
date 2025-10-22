import React from 'react';
import { Menu } from './Menu';
import { MenuItem } from '../MenuItem';

/**
 * Menu component examples
 * These can be used with Storybook or as reference examples
 */

export default {
  title: 'Components/Menu',
  component: Menu,
};

// Starter variant (default)
export const Starter = () => (
  <Menu variant="starter">
    <MenuItem href="#services">SERVICES</MenuItem>
    <MenuItem href="#projects">PROJECTS</MenuItem>
    <MenuItem href="#about" isSelected>ABOUT</MenuItem>
    <MenuItem href="#contact">CONTACT</MenuItem>
  </Menu>
);

// Scrolling variant
export const Scrolling = () => (
  <Menu variant="scrolling">
    <MenuItem href="#services">SERVICES</MenuItem>
    <MenuItem href="#projects">PROJECTS</MenuItem>
    <MenuItem href="#about" isSelected>ABOUT</MenuItem>
    <MenuItem href="#contact">CONTACT</MenuItem>
  </Menu>
);

// Interactive example with scroll detection
export const InteractiveScrollDemo = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div style={{ position: 'sticky', top: 0 }}>
        <Menu variant={isScrolled ? 'scrolling' : 'starter'}>
          <MenuItem href="#services">SERVICES</MenuItem>
          <MenuItem href="#projects">PROJECTS</MenuItem>
          <MenuItem href="#about" isSelected>ABOUT</MenuItem>
          <MenuItem href="#contact">CONTACT</MenuItem>
        </Menu>
      </div>
      <div style={{ height: '200vh', padding: '20px' }}>
        <p>Scroll down to see the menu change to the scrolling variant!</p>
        <p style={{ marginTop: '100vh' }}>Keep scrolling...</p>
      </div>
    </div>
  );
};
