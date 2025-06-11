export function injectStyles() {
  // Base styles
  const baseStyles = `
    :root {
      /* Theme colors */
      --primary-color: #ff6b00;
      --bg-color: #ffffff;
      --text-color: #24292e;
      --border-color: #e1e4e8;
      --shadow-color: rgba(0, 0, 0, 0.1);
      --hover-color: #f6f8fa;
    }

    [data-theme="dark"] {
      --primary-color: #ff6b00;
      --bg-color: #24292e;
      --text-color: #ffffff;
      --border-color: #444d56;
      --shadow-color: rgba(0, 0, 0, 0.3);
      --hover-color: #2f363d;
    }

    .custom-ui-panel {
      position: fixed;
      top: 0;
      height: 100vh;
      width: 300px;
      background: var(--bg-color);
      box-shadow: 0 0 15px var(--shadow-color);
      transition: all 0.3s ease;
      z-index: 1000;
      padding: 20px;
      box-sizing: border-box;
      border: 2px solid var(--theme-color);
    }

    .custom-ui-panel h3 {
      color: var(--theme-color);
      margin-top: 0;
      padding-bottom: 10px;
      border-bottom: 2px solid var(--theme-color);
    }

    .left-panel {
      position: fixed;
      top: 0;
      left: 0;
      width: 300px;
      height: 100vh;
      z-index: 1000;
      transform: translateX(-100%);
      transition: transform 0.3s ease;
      background: var(--bg-color);
      border: 2px solid var(--primary-color);
      border-left:0px;
      border-top-right-radius: 140px 20px;
      border-bottom-right-radius: 120px 40px;
    }

    .left-panel.visible {
      transform: translateX(0);
    }

    .left-panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px;
      border-bottom: 2px solid var(--primary-color);
      color: var(--primary-color);
    }

    .left-panel-title {
      font-weight: 500;
      font-size: 14px;
    }

    .left-panel-content {
      padding: 12px;
      height: calc(100vh - 48px);
      overflow-y: auto;
    }

    .right-panel {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 300px;
      max-height: 400px;
      background: var(--bg-color);
      box-shadow: 0 2px 8px var(--shadow-color);
      z-index: 1000;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      overflow: hidden;
      transition: transform 0.3s ease;
      background: var(--bg-color);
      border: 2px solid var(--primary-color);
      border-right:0px;
      border-top-left-radius: 140px 20px;
      border-bottom-left-radius: 120px 40px;
    }

    .right-panel.visible {
      opacity: 1;
      visibility: visible;
    }

    .right-panel.collapsed {
      height: 40px;
    }

    .right-panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      border-bottom: 2px solid var(--primary-color);
      color: var(--primary-color);
    }

    .right-panel-title {
      font-weight: 500;
      font-size: 14px;
    }

    .right-panel-content {
      padding: 12px;
      max-height: calc(400px - 40px);
      overflow-y: auto;
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
      background: var(--primary-color);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      margin-top: 10px;
      transition: all 0.2s ease;
    }

    .action-btn:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }

    /* Dock Panel Styles */
    .dock-panel {
      position: fixed;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--bg-color);
      padding: 10px 20px;
      display: flex;
      gap: 15px;
      box-shadow: 0 4px 15px var(--shadow-color);

      z-index: 1002;
      border: 2px solid var(--primary-color); 
      border-bottom:0px;
      border-top-left-radius: 60px 80px;
      border-top-right-radius: 120px 40px;
      z-index: 2000;
      padding: 8px 20px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
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
      background: var(--hover-color);
      transform: translateY(-2px);
    }

    .dock-icon {
      font-size: 24px;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--theme-color);
    }

    .dock-item:hover .dock-icon {
      color: #ffffff;
    }

    .dock-tooltip {
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      background: var(--theme-color);
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
      border-color: var(--theme-color) transparent transparent transparent;
    }

    .dock-item:hover .dock-tooltip {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(-5px);
    }

    /* Settings Modal Styles */
    .settings-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2000;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }

    .settings-modal.visible {
      opacity: 1;
      visibility: visible;
    }

    .settings-content {
      background: var(--bg-color);
      border-radius: 8px;
      width: 90%;
      max-width: 400px;
      box-shadow: 0 4px 12px var(--shadow-color);
    }

    .settings-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      border-bottom: 1px solid var(--border-color);
    }

    .settings-header h3 {
      margin: 0;
      font-size: 18px;
      color: var(--text-color);
    }

    .settings-body {
      padding: 16px;
    }

    .settings-section {
      margin-bottom: 20px;
    }

    .settings-section:last-child {
      margin-bottom: 0;
    }

    .settings-section label {
      display: block;
      margin-bottom: 8px;
      color: var(--text-color);
      font-weight: 500;
    }

    .mode-options {
      display: flex;
      gap: 8px;
    }

    .mode-btn {
      flex: 1;
      padding: 8px 16px;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      background: var(--bg-color);
      color: var(--text-color);
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .mode-btn:hover {
      background: var(--hover-color);
    }

    .mode-btn.active {
      background: var(--primary-color);
      color: white;
      border-color: var(--primary-color);
    }

    .color-options {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
      gap: 8px;
    }

    .color-button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid var(--border-color);
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    }

    .color-button:hover {
      transform: scale(1.1);
      box-shadow: 0 2px 4px var(--shadow-color);
    }

    .color-button.active {
      border-color: var(--text-color);
      box-shadow: 0 0 0 2px var(--primary-color);
    }

    .color-button[data-color="yellow"] {
      color: black;
    }

    /* Panel close button styles */
    .panel-close-btn {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      border: none;
      color: var(--text-color);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 16px;
      line-height: 1;
    }

    .panel-close-btn:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: scale(1.1);
    }

    .right-panel .panel-close-btn {
      color: white;
    }

    /* Common button styles */
    button {
      background: var(--bg-color);
      color: var(--text-color);
      border: 1px solid var(--border-color);
      border-radius: 6px;
      padding: 8px 16px;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 14px;
      font-weight: 500;
    }

    button:hover {
      background: var(--hover-color);
      border-color: var(--primary-color);
    }

    button:active {
      transform: translateY(1px);
    }

    /* Action log styles */
    .action-log {
      padding: 12px;
      background: var(--bg-color);
      border: 1px solid var(--border-color);
      border-radius: 6px;
      margin-top: 12px;
      max-height: 300px;
      overflow-y: auto;
    }

    .action-log-item {
      padding: 8px;
      border-bottom: 1px solid var(--border-color);
      font-size: 14px;
    }

    .action-log-item:last-child {
      border-bottom: none;
    }
  `;

  // Top panel styles
  const topPanelStyles = `
    .top-panel {
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background: var(--bg-color);
      border: 2px solid var(--primary-color);
      border-top:0px;
      border-bottom-left-radius: 60px 80px;
      border-bottom-right-radius: 120px 40px;
      z-index: 2000;
      padding: 8px 20px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .top-panel-content {
      display: flex;
      gap: 16px;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: white;
    }

    .top-panel-link {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: var(--text-color);
      padding: 4px;
      border-radius: 4px;
      transition: all 0.2s ease;
    }

    .top-panel-link:hover {
      background: var(--hover-color);
      transform: translateY(-1px);
    }

    .top-panel-icon {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }

    /* Adjust other panels to account for top panel */
    .left-panel {
      top: 64px;
      height: calc(100vh - 64px);
    }

    .right-panel {
      top: 64px;
    }
  `;

  // Combine all styles
  const styles = `
    ${baseStyles}
    ${topPanelStyles}
  `;

  // Create and inject styles
  const style = document.createElement("style");
  style.textContent = styles;
  document.head.appendChild(style);
}
