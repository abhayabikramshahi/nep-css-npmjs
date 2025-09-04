# nep-css-framework

A simple, easy-to-learn, component-based CSS framework for modern web projects.

## Installation

```bash
npm install nep-css-framework
```

## Usage

### Vite/React/JS Projects
Import the main framework or individual components:

```js
// Import all styles
import { Nep } from 'nep-css-framework';

// Or import only what you need
import { Button, Card, Font, Responsive } from 'nep-css-framework';
```

### CSS Import (for legacy or direct CSS use)
```css
@import "nep-css-framework/dist/nep.css";
```

## Components
- **Button**: Button styles (primary, secondary, etc.)
- **Card**: Card layouts and themes
- **Font**: Utility font sizes
- **Responsive**: Responsive layout helpers
- **Nep**: All-in-one import for the full framework

## Vite Setup (like TailwindCSS)
No plugin required! Just import in your main entry file:
```js
import { Nep } from 'nep-css-framework';
```

## License
ISC

---
Developed by Abhaya Bikram Shahi
