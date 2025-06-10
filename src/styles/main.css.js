export function injectStyles() {
  const style = document.createElement("style");
  style.textContent = `
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    .custom-ui-panel {
      position: fixed;
      top: 0;
      height: 100vh;
      width: 300px;
      background: #ffffff;
      box-shadow: 0 0 15px rgba(255, 165, 0, 0.2);
      transition: all 0.3s ease;
      z-index: 1000;
      padding: 20px;
      box-sizing: border-box;
      border: 2px solid #FFA500;
    }

    .custom-ui-panel h3 {
      color: #FFA500;
      margin-top: 0;
      padding-bottom: 10px;
      border-bottom: 2px solid #FFA500;
    }

    .left-panel {
      left: -300px;
      border-right: 2px solid #FFA500;
    }

    .right-panel {
      right: -300px;
      border-left: 2px solid #FFA500;
    }

    .custom-ui-panel.panel-visible {
      left: 0;
    }

    .right-panel.panel-visible {
      left: auto;
      right: 0;
    }

    .action-log {
      margin-top: 20px;
      max-height: calc(100vh - 100px);
      overflow-y: auto;
      padding: 10px;
      border-radius: 8px;
      background: rgba(255, 165, 0, 0.05);
    }

    .action-btn {
      padding: 8px 16px;
      background: #FFA500;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      margin-top: 10px;
      transition: all 0.2s ease;
    }

    .action-btn:hover {
      background: #FF8C00;
      transform: translateY(-2px);
      box-shadow: 0 2px 8px rgba(255, 165, 0, 0.3);
    }

    /* Dock Panel Styles */
    .dock-panel {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #ffffff;
      padding: 10px 20px;
      border-radius: 15px;
      display: flex;
      gap: 15px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      border: 2px solid #FFA500;
      z-index: 1002;
    }

    .dock-item {
      position: relative;
      cursor: pointer;
      padding: 8px;
      border-radius: 8px;
      transition: all 0.2s ease;
      border: 2px solid transparent;
    }

    .dock-item:hover {
      background: #FFA500;
      transform: translateY(-5px);
    }

    .dock-icon {
      font-size: 24px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FFA500;
    }

    .dock-item:hover .dock-icon {
      color: #ffffff;
    }

    .dock-tooltip {
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      background: #FFA500;
      color: white;
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 12px;
      white-space: nowrap;
      opacity: 0;
      visibility: hidden;
      transition: all 0.2s ease;
      margin-bottom: 5px;
    }

    .dock-tooltip::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 5px;
      border-style: solid;
      border-color: #FFA500 transparent transparent transparent;
    }

    .dock-item:hover .dock-tooltip {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(-5px);
    }
  `;
  document.head.appendChild(style);
}
