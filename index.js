// Automatically injects the CSS when imported in JS environments
if (typeof document !== "undefined") {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = require("./dist/nep.css");
  document.head.appendChild(link);
}
export { Nep } from './components/Nep.js';
export { Button } from './components/Button.js';
export { Card } from './components/Card.js';
export { Font } from './components/Font.js';
export { Responsive } from './components/Responsive.js';