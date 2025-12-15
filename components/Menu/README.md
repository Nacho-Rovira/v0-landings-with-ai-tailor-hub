# Menu Component

A responsive navigation menu component with support for starter (transparent) and scrolling (with background) variants.

## Usage

```tsx
import { Menu } from './components/Menu';
import { MenuItem } from './components/MenuItem';

function Navigation() {
  return (
    <Menu variant="starter">
      <MenuItem href="#services">SERVICES</MenuItem>
      <MenuItem href="#projects">PROJECTS</MenuItem>
      <MenuItem href="#about" isSelected>ABOUT</MenuItem>
      <MenuItem href="#contact">CONTACT</MenuItem>
    </Menu>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | The menu content (typically MenuItem components) |
| `variant` | `'starter' \| 'scrolling'` | `'starter'` | Menu variant style |

All standard HTML nav attributes are also supported.

## Variants

### Starter (Default)
- Transparent background
- Used for the initial page state before scrolling
- Inline layout with natural width

### Scrolling
- Surface background color (#F5F5F5)
- Activated when page is scrolled
- Same layout as starter with background

## Design Tokens Used

The menu uses the following design tokens from the system:

### From Primitives
- `spacing.m` - Padding (16px)
- `spacing.xl` - Gap between items (32px)
- `radius.s` - Border radius (16px)
- `color.neutral.100` - Background color for scrolling variant (#F5F5F5)

### From Semantics
- `color.background.surface` → `color.neutral.100`

### From Components
- `component.menu.padding` → `spacing.m`
- `component.menu.gap` → `spacing.xl`
- `component.menu.color.background` → `color.background.surface`

## Examples

### Basic Menu with Starter Variant
```tsx
<Menu variant="starter">
  <MenuItem href="#services">SERVICES</MenuItem>
  <MenuItem href="#projects">PROJECTS</MenuItem>
  <MenuItem href="#about">ABOUT</MenuItem>
  <MenuItem href="#contact">CONTACT</MenuItem>
</Menu>
```

### Menu with Scrolling Variant
```tsx
<Menu variant="scrolling">
  <MenuItem href="#services">SERVICES</MenuItem>
  <MenuItem href="#projects">PROJECTS</MenuItem>
  <MenuItem href="#about">ABOUT</MenuItem>
  <MenuItem href="#contact">CONTACT</MenuItem>
</Menu>
```

### Interactive Menu with Scroll Detection
```tsx
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Menu variant={isScrolled ? 'scrolling' : 'starter'}>
      <MenuItem href="#services">SERVICES</MenuItem>
      <MenuItem href="#projects">PROJECTS</MenuItem>
      <MenuItem href="#about" isSelected>ABOUT</MenuItem>
      <MenuItem href="#contact">CONTACT</MenuItem>
    </Menu>
  );
}
```

## Responsive Behavior

- On screens wider than 768px: Items are displayed horizontally with 32px gap
- On screens 768px or smaller: Items stack vertically with 16px gap
- Maintains padding and background across all screen sizes

## Accessibility

- Uses semantic `<nav>` element
- Keyboard navigable through MenuItem links
- Smooth transitions between variants
- Maintains color contrast in all variants
