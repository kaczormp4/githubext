let allExpanded = true;

export function createRightPanel() {
  const panel = document.createElement("div");
  panel.className = "custom-ui-panel right-panel";
  panel.innerHTML = `
    <h3>Review Tools</h3>
    <button class="action-btn" id="toggle-diffs">Expand All</button>
  `;
  document.body.appendChild(panel);

  const toggleBtn = document.createElement("div");
  toggleBtn.className = "toggle-btn toggle-right";
  toggleBtn.textContent = "≡ Tools";
  toggleBtn.onclick = () => {
    panel.classList.toggle("panel-visible");
  };
  document.body.appendChild(toggleBtn);
}

export function setupDiffToggle(logFn) {
  document.addEventListener("click", (e) => {
    if (e.target.id === "toggle-diffs") {
      const buttons = document.querySelectorAll("button.js-details-target");
      buttons.forEach((btn) => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        if ((allExpanded && expanded) || (!allExpanded && !expanded)) {
          btn.click();
        }
      });
      logFn(`${allExpanded ? "Collapsed" : "Expanded"} all diffs`);
      e.target.textContent = allExpanded ? "Expand All" : "Collapse All";
      allExpanded = !allExpanded;
    }
  });
}
