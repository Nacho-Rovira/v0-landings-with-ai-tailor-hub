# MenuSidebar Component

A vertical sidebar navigation menu component with support for active, disabled, and hover states.

## Usage

\`\`\`tsx
import { MenuSidebar, MenuSidebarItem } from './components/MenuSidebar';

function Navigation() {
  return (
    <MenuSidebar>
      <MenuSidebarItem href="#services">SERVICES</MenuSidebarItem>
      <MenuSidebarItem href="#projects">PROJECTS</MenuSidebarItem>
      <MenuSidebarItem href="#about" isActive>ABOUT</MenuSidebarItem>
      <MenuSidebarItem href="#contact">CONTACT</MenuSidebarItem>
      <MenuSidebarItem href="#disabled" isDisabled>DISABLED</MenuSidebarItem>
    </MenuSidebar>
  );
}
\`\`\`

## Props

### MenuSidebar

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | The menu content (typically MenuSidebarItem components) |

All standard HTML aside attributes are also supported.

### MenuSidebarItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | The menu item content |
| `href` | `string` | `"#"` | The href for the menu item link |
| `isActive` | `boolean` | `false` | Whether the menu item is currently active/selected |
| `isDisabled` | `boolean` | `false` | Whether the menu item is disabled |
| `number` | `number` | `undefined` | The number to display before the content (e.g., 1 for "01.", 2 for "02.") |

All standard HTML anchor attributes are also supported.

## States

### Default
- Uses primary text color
- Hover state changes to accent color

### Active
- Uses accent text color (#2C54FF)
- Font weight: 500

### Disabled
- Uses hover text color (grayed out)
- Cursor: not-allowed
- Pointer events disabled

## Dimensions

- **Width**: 322px (default), 206px (minimum on smaller screens)
- The sidebar uses `flex-shrink: 0` to maintain its width and will shrink down to 206px on smaller viewports

## Design Tokens Used

The menu sidebar uses the following design tokens from the system:

### From Primitives
- `spacing.m` - Gap between items (16px)
- `text.size.small` - Font size (16px)
- `text.line.small` - Line height (22px)
- `font.tech` - Font family ("PP Neue Montreal Mono", monospace)

### From Semantics
- `color.text.primary` - Default text color
- `color.text.accent` - Active/hover text color (#2C54FF)
- `color.text.hover` - Disabled text color

## Examples

### Proposal Navigation with Numbering

\`\`\`tsx
<MenuSidebar>
  <MenuSidebarItem href="#challenge" number={1}>THE CHALLENGE</MenuSidebarItem>
  <MenuSidebarItem href="#solution" number={2}>THE SOLUTION</MenuSidebarItem>
  <MenuSidebarItem href="#approach" number={3} isActive>THE APPROACH</MenuSidebarItem>
  <MenuSidebarItem href="#results" number={4}>RESULTS</MenuSidebarItem>
</MenuSidebar>
\`\`\`

This will display as:
- 01. THE CHALLENGE
- 02. THE SOLUTION
- 03. THE APPROACH (active)
- 04. RESULTS

Note: Menu items are automatically displayed in uppercase letters via CSS `text-transform: uppercase`.

### Basic Menu Sidebar

\`\`\`tsx
<MenuSidebar>
  <MenuSidebarItem href="#services">SERVICES</MenuSidebarItem>
  <MenuSidebarItem href="#projects">PROJECTS</MenuSidebarItem>
  <MenuSidebarItem href="#about">ABOUT</MenuSidebarItem>
  <MenuSidebarItem href="#contact">CONTACT</MenuSidebarItem>
</MenuSidebar>
\`\`\`

### Menu Sidebar with Active Item

\`\`\`tsx
<MenuSidebar>
  <MenuSidebarItem href="#services">SERVICES</MenuSidebarItem>
  <MenuSidebarItem href="#projects">PROJECTS</MenuSidebarItem>
  <MenuSidebarItem href="#about" isActive>ABOUT</MenuSidebarItem>
  <MenuSidebarItem href="#contact">CONTACT</MenuSidebarItem>
</MenuSidebar>
\`\`\`

### Menu Sidebar with Disabled Item

\`\`\`tsx
<MenuSidebar>
  <MenuSidebarItem href="#services">SERVICES</MenuSidebarItem>
  <MenuSidebarItem href="#projects">PROJECTS</MenuSidebarItem>
  <MenuSidebarItem href="#about" isActive>ABOUT</MenuSidebarItem>
  <MenuSidebarItem href="#contact">CONTACT</MenuSidebarItem>
  <MenuSidebarItem href="#coming-soon" isDisabled>COMING SOON</MenuSidebarItem>
</MenuSidebar>
\`\`\`

## Accessibility

- Supports keyboard navigation
- Proper ARIA attributes for disabled state
- Respects `prefers-reduced-motion` for reduced animation
