(function () {
  "use strict";

  // Inject styles
  const style = document.createElement("style");
  style.textContent = `
      .custom-ui-panel {
        position: fixed;
        top: 0;
        bottom: 0;
        width: 300px;
        background: white;
        box-shadow: 0 0 10px rgba(0,0,0,0.15);
        z-index: 9999;
        padding: 16px;
        transition: transform 0.3s ease;
        font-family: sans-serif;
      }
  
      .left-panel {
        left: 0;
        border-right: 2px solid orange;
        transform: translateX(-100%);
      }
  
      .right-panel {
        right: 0;
        border-left: 2px solid orange;
        transform: translateX(100%);
      }
  
      .panel-visible {
        transform: translateX(0);
      }
  
      .toggle-btn {
        position: fixed;
        top: 20px;
        background: orange;
        color: white;
        padding: 8px 12px;
        font-weight: bold;
        cursor: pointer;
        border-radius: 4px;
        z-index: 10000;
      }
  
      .toggle-left {
        left: 310px;
      }
  
      .toggle-right {
        right: 310px;
      }
  
      .action-log {
        margin-top: 1rem;
        font-size: 14px;
        color: #333;
        max-height: 80vh;
        overflow-y: auto;
      }
  
      .action-btn {
        background: orange;
        color: white;
        padding: 8px 12px;
        border: none;
        margin-bottom: 12px;
        border-radius: 4px;
        cursor: pointer;
      }
    `;
  document.head.appendChild(style);

  // Logger
  function logAction(msg) {
    const log = document.getElementById("action-log");
    if (!log) return;
    const entry = document.createElement("div");
    entry.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
    log.appendChild(entry);
    log.scrollTop = log.scrollHeight;
  }

  // Left Panel
  const leftPanel = document.createElement("div");
  leftPanel.className = "custom-ui-panel left-panel";
  leftPanel.innerHTML = `
      <h3>Live Review Status</h3>
      <div id="action-log" class="action-log"></div>
    `;
  document.body.appendChild(leftPanel);

  const leftToggle = document.createElement("div");
  leftToggle.className = "toggle-btn toggle-left";
  leftToggle.textContent = "≡ Status";
  leftToggle.onclick = () => {
    leftPanel.classList.toggle("panel-visible");
  };
  document.body.appendChild(leftToggle);

  // Right Panel
  let allExpanded = true;
  const rightPanel = document.createElement("div");
  rightPanel.className = "custom-ui-panel right-panel";
  rightPanel.innerHTML = `
      <h3>Review Tools</h3>
      <button class="action-btn" id="toggle-diffs">Expand All</button>
    `;
  document.body.appendChild(rightPanel);

  const rightToggle = document.createElement("div");
  rightToggle.className = "toggle-btn toggle-right";
  rightToggle.textContent = "≡ Tools";
  rightToggle.onclick = () => {
    rightPanel.classList.toggle("panel-visible");
  };
  document.body.appendChild(rightToggle);

  // Diff toggle handler
  document.addEventListener("click", (e) => {
    if (e.target.id === "toggle-diffs") {
      const buttons = document.querySelectorAll("button.js-details-target");
      buttons.forEach((btn) => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        if ((allExpanded && expanded) || (!allExpanded && !expanded)) {
          btn.click();
        }
      });
      logAction(`${allExpanded ? "Collapsed" : "Expanded"} all diffs`);
      e.target.textContent = allExpanded ? "Expand All" : "Collapse All";
      allExpanded = !allExpanded;
    }
  });
})();
