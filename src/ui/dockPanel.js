export function createDockPanel() {
  const dock = document.createElement("div");
  dock.className = "dock-panel";

  // Create dock items
  const items = [
    {
      icon: "📊",
      tooltip: "Status Panel",
      action: () => {
        const leftPanel = document.querySelector(".left-panel");
        if (leftPanel) {
          leftPanel.classList.toggle("panel-visible");
        }
      },
    },
    {
      icon: "🛠️",
      tooltip: "Tools Panel",
      action: () => {
        const rightPanel = document.querySelector(".right-panel");
        if (rightPanel) {
          rightPanel.classList.toggle("panel-visible");
        }
      },
    },
  ];

  // Create dock items
  items.forEach((item) => {
    const dockItem = document.createElement("div");
    dockItem.className = "dock-item";
    dockItem.innerHTML = `
      <div class="dock-icon">${item.icon}</div>
      <div class="dock-tooltip">${item.tooltip}</div>
    `;
    dockItem.onclick = item.action;
    dock.appendChild(dockItem);
  });

  document.body.appendChild(dock);
}
