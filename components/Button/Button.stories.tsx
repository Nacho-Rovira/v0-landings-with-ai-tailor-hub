import React from 'react';
import { Button } from './Button';

/**
 * Button component examples
 * These can be used with Storybook or as reference examples
 */

export default {
  title: 'Components/Button',
  component: Button,
};

// Default primary button
export const Primary = () => (
  <Button variant="primary">BUTTON</Button>
);

// Disabled button
export const Disabled = () => (
  <Button variant="primary" disabled>
    BUTTON
  </Button>
);

// Interactive example
export const Interactive = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <Button variant="primary" onClick={handleClick}>
      CLICK ME
    </Button>
  );
};

// Multiple buttons
export const MultipleButtons = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <Button variant="primary">BUTTON 1</Button>
    <Button variant="primary">BUTTON 2</Button>
    <Button variant="primary">BUTTON 3</Button>
  </div>
);
