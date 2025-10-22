import React from 'react';
import { Header } from './Header';

/**
 * Header component examples
 * These can be used with Storybook or as reference examples
 */

export default {
  title: 'Components/Header',
  component: Header,
};

// Starter variant (default)
export const Starter = () => (
  <div style={{ padding: '40px', minHeight: '400px' }}>
    <Header variant="starter" />
  </div>
);

// Scrolling variant
export const Scrolling = () => (
  <div style={{ padding: '40px', minHeight: '400px' }}>
    <Header variant="scrolling" />
  </div>
);

// Custom menu items
export const CustomMenuItems = () => {
  const customItems = [
    { label: 'HOME', href: '#home', isSelected: true },
    { label: 'ABOUT', href: '#about' },
    { label: 'TEAM', href: '#team' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <div style={{ padding: '40px', minHeight: '400px' }}>
      <Header variant="starter" menuItems={customItems} />
    </div>
  );
};

// Interactive scroll demo
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
      <div style={{ position: 'sticky', top: 0, background: 'white', zIndex: 10, padding: '40px' }}>
        <Header variant={isScrolled ? 'scrolling' : 'starter'} />
      </div>
      <div style={{ height: '200vh', padding: '40px' }}>
        <p>Scroll down to see the header menu change from starter to scrolling variant!</p>
        <p style={{ marginTop: '100vh' }}>Keep scrolling...</p>
      </div>
    </div>
  );
};
