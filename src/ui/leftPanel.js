export function createLeftPanel() {
  const panel = document.createElement("div");
  panel.className = "left-panel";

  panel.innerHTML = `
    <div class="left-panel-header">
      <span class="left-panel-title">GitHub Extension</span>
      <button class="panel-close-btn" title="Close panel">×</button>
    </div>
    <div class="left-panel-content">
      <div id="action-log" class="action-log"></div>
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

// Function to show the left panel
export function showLeftPanel() {
  const panel = document.querySelector(".left-panel");
  if (panel) {
    panel.classList.add("visible");
  }
}
