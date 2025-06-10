const THEME_COLORS = {
  orange: "#ff6b00",
  blue: "#0066cc",
  green: "#2ea44f",
  yellow: "#ffd700",
  grey: "#6c757d",
  purple: "#6f42c1",
  red: "#dc3545",
  lightblue: "#17a2b8",
};

let modal = null;

export function createSettingsModal() {
  if (modal) return modal;

  modal = document.createElement("div");
  modal.className = "settings-modal";

  // Get current theme settings
  const currentMode = localStorage.getItem("theme-mode") || "light";
  const currentColor = localStorage.getItem("theme-color") || "orange";

  modal.innerHTML = `
    <div class="settings-content">
      <div class="settings-header">
        <h3>Settings</h3>
        <button class="panel-close-btn" title="Close settings">×</button>
      </div>
      <div class="settings-body">
        <div class="settings-section">
          <label>Theme Mode</label>
          <div class="mode-options">
            <button class="mode-btn ${
              currentMode === "light" ? "active" : ""
            }" data-mode="light">
              Light
            </button>
            <button class="mode-btn ${
              currentMode === "dark" ? "active" : ""
            }" data-mode="dark">
              Dark
            </button>
          </div>
        </div>
        <div class="settings-section">
          <label>Theme Color</label>
          <div class="color-options">
            ${Object.entries(THEME_COLORS)
              .map(
                ([name, color]) => `
              <button class="color-button ${
                name === currentColor ? "active" : ""
              }" 
                      data-color="${name}" 
                      style="background-color: ${color}">
                ${name === currentColor ? "✓" : ""}
              </button>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  `;

  // Add close button functionality
  const closeBtn = modal.querySelector(".panel-close-btn");
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("visible");
  });

  // Theme mode selection
  const modeBtns = modal.querySelectorAll(".mode-btn");
  modeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      document.documentElement.setAttribute("data-theme", mode);
      localStorage.setItem("theme-mode", mode);

      // Update active state
      modeBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // Color selection
  const colorBtns = modal.querySelectorAll(".color-button");
  colorBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const color = btn.dataset.color;
      document.documentElement.style.setProperty(
        "--primary-color",
        THEME_COLORS[color]
      );
      localStorage.setItem("theme-color", color);

      // Update active state
      colorBtns.forEach((b) => {
        b.classList.remove("active");
        b.innerHTML = "";
      });
      btn.classList.add("active");
      btn.innerHTML = "✓";
    });
  });

  document.body.appendChild(modal);
  return modal;
}

export function showSettingsModal() {
  if (!modal) {
    createSettingsModal();
  }
  modal.classList.add("visible");
}
