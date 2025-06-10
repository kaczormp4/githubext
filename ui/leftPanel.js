export function createLeftPanel() {
  const panel = document.createElement("div");
  panel.className = "custom-ui-panel left-panel";
  panel.innerHTML = `
      <h3>Live Review Status</h3>
      <div id="action-log" class="action-log"></div>
    `;
  document.body.appendChild(panel);

  const toggleBtn = document.createElement("div");
  toggleBtn.className = "toggle-btn toggle-left";
  toggleBtn.textContent = "≡ Status";
  toggleBtn.onclick = () => {
    panel.classList.toggle("panel-visible");
  };
  document.body.appendChild(toggleBtn);
}
