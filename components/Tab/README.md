# Tab Component

A tab component for navigation and content organization. Features three states (default, hover, selected) with proper accessibility support. Built using design tokens for consistency.

## Usage

```tsx
import { Tab } from './components/Tab';

function App() {
  return (
    <div>
      <Tab label="OVERVIEW" state="default" />
      <Tab label="DETAILS" state="selected" />
      <Tab label="SETTINGS" state="default" />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `'TAB'` | Tab label text |
| `state` | `'default' \| 'hover' \| 'selected'` | `'default'` | Tab state |
| `onClick` | `() => void` | - | Click handler |

## States

### Default State
- Background: Light grey (#F5F5F5)
- Text: Secondary grey (#828086)
- Hover: Darker background (#E5E5E5) with dark text (#362C2C)

### Hover State
- Background: Medium grey (#E5E5E5)
- Text: Dark grey (#362C2C)
- Used for programmatic hover state

### Selected State
- Background: Dark grey (#828086)
- Text: White (#FFFFFF)
- Maintains appearance on hover

## Examples

### Basic Usage
```tsx
<Tab label="OVERVIEW" />
<Tab label="DETAILS" state="selected" />
<Tab label="SETTINGS" />
```

### With Click Handler
```tsx
<Tab 
  label="CLICK ME" 
  onClick={() => console.log('Tab clicked!')} 
/>
```

### Different States
```tsx
<Tab label="DEFAULT" state="default" />
<Tab label="HOVER" state="hover" />
<Tab label="SELECTED" state="selected" />
```

## Design Tokens Used

### Spacing & Layout
- `--tab-padding` (8px): Internal padding
- `--tab-gap` (10px): Gap between elements
- `--radius-xs` (8px): Corner radius

### Typography
- Font: `--font-tech` (PP Neue Montreal Mono)
- Size: `--tab-text-size` (14px)
- Weight: 400
- Line height: normal

### Colors

#### Default State
- Background: `--tab-color-background` (#F5F5F5)
- Text: `--tab-color-text` (#828086)
- Hover background: `--tab-color-background-hover` (#E5E5E5)
- Hover text: `--tab-color-text-hover` (#362C2C)

#### Selected State
- Background: `--tab-color-background-selected` (#828086)
- Text: `--tab-color-text-selected` (#FFFFFF)

## Accessibility

- **Keyboard Navigation**: Supports Enter and Space key activation
- **Focus Management**: Visible focus outline with blue color
- **ARIA**: Uses `role="tab"` for screen readers
- **Semantic HTML**: Proper tabIndex and keyboard event handling

## Dimensions

- **Padding**: 8px (tab-padding)
- **Gap**: 10px (tab-gap)
- **Border Radius**: 8px (radius-xs)
- **Font Size**: 14px (tab-text-size)

## Interactive Behavior

- **Hover**: Smooth transition (0.2s ease)
- **Click**: Triggers onClick handler
- **Focus**: Blue outline for keyboard navigation
- **Disabled**: 50% opacity, no interaction

## Responsive Behavior

The Tab component maintains consistent sizing across all screen sizes. The text remains readable and the interactive area is appropriately sized for touch devices.

