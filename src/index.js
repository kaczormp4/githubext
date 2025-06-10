import { createLeftPanel } from "./ui/leftPanel";
import { createRightPanel, setupDiffToggle } from "./ui/rightPanel";
import { createDockPanel } from "./ui/dockPanel";
import { injectStyles } from "./styles/main.css";
import { logAction } from "./core/logger";

// Auto-execute when imported
(function () {
  "use strict";

  // Initialize the extension
  function init() {
    console.log("Initializing GitHub Extension...");
    injectStyles();
    createLeftPanel();
    createRightPanel();
    createDockPanel();
    setupDiffToggle(logAction);
  }

  // Run initialization
  init();
})();
