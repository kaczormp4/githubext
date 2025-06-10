import { showLeftPanel } from "./leftPanel";
import { showRightPanel } from "./rightPanel";
import { showSettingsModal } from "./settingsModal";

export function createDockPanel() {
  const dock = document.createElement("div");
  dock.className = "dock-panel";

  const items = [
    {
      icon: "📊",
      tooltip: "Status",
      action: showLeftPanel,
    },
    {
      icon: "⚙️",
      tooltip: "Settings",
      action: showSettingsModal,
    },
    {
      icon: "🛠️",
      tooltip: "Tools",
      action: showRightPanel,
    },
  ];

  dock.innerHTML = items
    .map(
      (item) => `
    <button class="dock-item" title="${item.tooltip}">
      ${item.icon}
    </button>
  `
    )
    .join("");

  // Add click handlers
  const buttons = dock.querySelectorAll(".dock-item");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      items[index].action();
    });
  });

  document.body.appendChild(dock);
  return dock;
}
