// Light/Dark toggle (optional feature)
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.createElement("button");
    toggle.textContent = "🌙 Toggle Theme";
    toggle.style.margin = "1rem";
    document.body.insertBefore(toggle, document.body.firstChild);
  
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  });
  