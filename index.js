// ---------------- Inject CSS directly ----------------
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    /* ---------------- Reset ---------------- */
    * { margin:0; padding:0; box-sizing:border-box; }

    /* ---------------- Typography ---------------- */
    .nep-font-sans { font-family: Arial, sans-serif; }
    .nep-font-serif { font-family: Georgia, serif; }

    /* ---------------- Spacing ---------------- */
    .nep-p-1 { padding: 0.25rem; }
    .nep-p-2 { padding: 0.5rem; }
    .nep-p-3 { padding: 1rem; }
    .nep-m-1 { margin: 0.25rem; }
    .nep-m-2 { margin: 0.5rem; }
    .nep-m-3 { margin: 1rem; }

    /* ---------------- Colors ---------------- */
    .nep-bg-rato { background-color: #ff4d4f; }
    .nep-bg-nilo { background-color: #1890ff; }
    .nep-text-seto { color: #fff; }

    /* ---------------- Buttons ---------------- */
    .nep-btn {
      padding: 0.5rem 1rem;
      border-radius: 0.375rem;
      border: none;
      cursor: pointer;
      font-weight: 500;
      transition: 0.2s;
    }
    .nep-btn-rato { background-color: #ff4d4f; color: #fff; }
    .nep-btn-nilo { background-color: #1890ff; color: #fff; }
    .nep-btn:hover { opacity: 0.8; }

    /* ---------------- Cards ---------------- */
    .nep-card {
      background-color: #fff;
      padding: 1rem;
      border-radius: 0.5rem;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    /* ---------------- Flex Utilities ---------------- */
    .nep-flex { display: flex; }
    .nep-flex-row { flex-direction: row; }
    .nep-flex-col { flex-direction: column; }
    .nep-justify-center { justify-content: center; }
    .nep-items-center { align-items: center; }

    /* ---------------- Width & Height ---------------- */
    .nep-w-full { width: 100%; }
    .nep-w-1/2 { width: 50%; }
    .nep-h-full { height: 100%; }
  `;
  document.head.appendChild(style);
}

// ---------------- Optional JS Components ----------------
export const Nep = () => { console.log("Nep component"); };
export const Button = () => { console.log("Button component"); };
export const Card = () => { console.log("Card component"); };
export const Font = () => { console.log("Font component"); };
export const Responsive = () => { console.log("Responsive component"); };
