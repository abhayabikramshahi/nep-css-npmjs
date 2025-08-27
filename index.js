// Automatically injects the CSS when imported in JS environments
if (typeof document !== "undefined") {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = require("./dist/nep.css");
  document.head.appendChild(link);
}