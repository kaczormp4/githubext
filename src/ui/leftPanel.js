export function createLeftPanel() {
  const panel = document.createElement("div");
  panel.className = "custom-ui-panel left-panel";
  panel.innerHTML = `
    <h3>Live Review Status</h3>
    <div id="action-log" class="action-log"></div>
  `;
  document.body.appendChild(panel);
}
