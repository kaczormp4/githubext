export function injectStyles() {
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
}
