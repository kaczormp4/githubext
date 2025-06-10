import { createLeftPanel } from "./ui/leftPanel";
import {
  createRightPanel,
  setupDiffToggle,
  setupViewAllToggle,
  setupCommentsToggle,
} from "./ui/rightPanel";
import { createDockPanel } from "./ui/dockPanel";
import { createSettingsModal } from "./ui/settingsModal";
import { createTopPanel } from "./ui/topPanel";
import { injectStyles } from "./styles/main.css";
import { logAction } from "./core/logger";

// Auto-execute when imported
(function () {
  "use strict";

  // Initialize the extension
  function init() {
    console.log("Initializing GitHub Extension...");
    injectStyles();
    createTopPanel();
    createLeftPanel();
    createRightPanel();
    createDockPanel();
    createSettingsModal();
    setupDiffToggle(logAction);
    setupViewAllToggle(logAction);
    setupCommentsToggle(logAction);
  }

  // Run initialization
  init();
})();
