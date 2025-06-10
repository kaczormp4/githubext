let allExpanded = true;

export function createRightPanel() {
  const panel = document.createElement("div");
  panel.className = "right-panel";

  panel.innerHTML = `
    <div class="right-panel-header">
      <span class="right-panel-title">Diff View</span>
      <button class="panel-close-btn" title="Close panel">×</button>
    </div>
    <div class="right-panel-content">
      <button class="action-btn" id="toggle-diffs">Expand All</button>
    </div>
  `;

  // Add close button functionality
  const closeBtn = panel.querySelector(".panel-close-btn");
  closeBtn.addEventListener("click", () => {
    panel.classList.remove("visible");
  });

  document.body.appendChild(panel);
  return panel;
}

// Function to show the right panel
export function showRightPanel() {
  const panel = document.querySelector(".right-panel");
  if (panel) {
    panel.classList.add("visible");
  }
}

export function setupDiffToggle(callback) {
  const toggleBtn = document.getElementById("toggle-diffs");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      callback("toggle-diffs");
    });
  }
}
