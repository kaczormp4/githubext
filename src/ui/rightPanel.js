let allExpanded = true;

function areAllDiffsExpanded() {
  const buttons = document.querySelectorAll(
    "button.btn-octicon.js-details-target"
  );
  if (!buttons.length) return false;
  return Array.from(buttons).every(
    (b) => b.getAttribute("aria-expanded") === "true"
  );
}

function areAllDiffsCollapsed() {
  const buttons = document.querySelectorAll(
    "button.btn-octicon.js-details-target"
  );
  if (!buttons.length) return false;
  return Array.from(buttons).every(
    (b) => b.getAttribute("aria-expanded") === "false"
  );
}

function areAllViewed() {
  const checkboxes = document.querySelectorAll(
    'input.js-reviewed-checkbox[type="checkbox"]'
  );
  if (!checkboxes.length) return false;
  return Array.from(checkboxes).every((cb) => cb.checked);
}

function areAllCommentsHidden() {
  const rows = document.querySelectorAll("tr.js-inline-comments-container");
  if (!rows.length) return false;
  return Array.from(rows).every((row) => row.style.display === "none");
}

export function createRightPanel() {
  const panel = document.createElement("div");
  panel.className = "right-panel";
  panel.style.position = "fixed";
  panel.style.right = "0";
  panel.style.bottom = "0";
  panel.style.zIndex = "9999";
  panel.style.backgroundColor = "white";
  panel.style.boxShadow = "0 0 10px rgba(0,0,0,0.15)";
  panel.style.padding = "16px";
  panel.style.transition = "transform 0.3s ease";
  panel.style.fontFamily = "sans-serif";
  panel.style.width = "300px";
  panel.style.height = "auto";
  panel.style.borderLeft = "2px solid orange";

  // Determine initial state for Expand/Collapse All
  let initialLabel = "Expand All";
  if (areAllDiffsExpanded()) initialLabel = "Collapse All";

  // Determine initial state for View All/Unview All
  let viewAllLabel = "View All";
  if (areAllViewed()) viewAllLabel = "Unview All";

  // Determine initial state for Hide All Comments/Show All Comments
  let commentsLabel = "Hide All Comments";
  if (areAllCommentsHidden()) commentsLabel = "Show All Comments";

  panel.innerHTML = `
    <div class="right-panel-header">
      <span class="right-panel-title">Diff View</span>
      <button class="panel-close-btn" title="Close panel">×</button>
    </div>
    <div class="right-panel-content">
      <button class="action-btn" id="toggle-diffs">${initialLabel}</button>
      <button class="action-btn" id="toggle-view-all">${viewAllLabel}</button>
      <button class="action-btn" id="toggle-comments">${commentsLabel}</button>
    </div>
  `;

  // Add close button functionality
  const closeBtn = panel.querySelector(".panel-close-btn");
  closeBtn.addEventListener("click", () => {
    panel.classList.remove("visible");
  });

  document.body.appendChild(panel);
  return panel;
}

// Function to show the right panel
export function showRightPanel() {
  const panel = document.querySelector(".right-panel");
  if (panel) {
    panel.classList.add("visible");
  }
}

export function setupDiffToggle(logAction) {
  const toggleBtn = document.getElementById("toggle-diffs");
  if (toggleBtn) {
    const updateLabel = () => {
      if (areAllDiffsExpanded()) {
        toggleBtn.textContent = "Collapse All";
        allExpanded = true;
      } else {
        toggleBtn.textContent = "Expand All";
        allExpanded = false;
      }
    };
    updateLabel();
    toggleBtn.addEventListener("click", () => {
      const buttons = document.querySelectorAll(
        "button.btn-octicon.js-details-target"
      );
      const expand = !areAllDiffsExpanded();
      buttons.forEach((b) => {
        const isExpanded = b.getAttribute("aria-expanded") === "true";
        if (expand && !isExpanded) b.click();
        if (!expand && isExpanded) b.click();
      });
      logAction(`${expand ? "Expanded" : "Collapsed"} all diffs`);
      updateLabel();
    });
    // Optionally, observe DOM changes to keep label in sync
    const observer = new MutationObserver(updateLabel);
    observer.observe(document.body, {
      subtree: true,
      attributes: true,
      attributeFilter: ["aria-expanded"],
    });
  }
}

export function setupViewAllToggle(logAction) {
  const toggleBtn = document.getElementById("toggle-view-all");
  if (toggleBtn) {
    const updateLabel = () => {
      if (areAllViewed()) {
        toggleBtn.textContent = "Unview All";
      } else {
        toggleBtn.textContent = "View All";
      }
    };
    updateLabel();
    toggleBtn.addEventListener("click", () => {
      const checkboxes = document.querySelectorAll(
        'input.js-reviewed-checkbox[type="checkbox"]'
      );
      const viewAll = !areAllViewed();
      checkboxes.forEach((cb) => {
        if (cb.checked !== viewAll) {
          cb.click();
        }
      });
      logAction(
        `${viewAll ? "Marked all as viewed" : "Marked all as unviewed"}`
      );
      updateLabel();
    });
    // Observe DOM changes to keep label in sync
    const observer = new MutationObserver(updateLabel);
    observer.observe(document.body, {
      subtree: true,
      attributes: true,
      attributeFilter: ["checked"],
    });
  }
}

export function setupCommentsToggle(logAction) {
  const toggleBtn = document.getElementById("toggle-comments");
  if (toggleBtn) {
    const updateLabel = () => {
      if (areAllCommentsHidden()) {
        toggleBtn.textContent = "Show All Comments";
      } else {
        toggleBtn.textContent = "Hide All Comments";
      }
    };
    updateLabel();
    toggleBtn.addEventListener("click", () => {
      const rows = document.querySelectorAll("tr.js-inline-comments-container");
      const hideAll = !areAllCommentsHidden();
      rows.forEach((row) => {
        row.style.display = hideAll ? "none" : "";
      });
      logAction(`${hideAll ? "Hid all comments" : "Showed all comments"}`);
      updateLabel();
    });
    // Observe DOM changes to keep label in sync
    const observer = new MutationObserver(updateLabel);
    observer.observe(document.body, {
      subtree: true,
      attributes: true,
      attributeFilter: ["style"],
    });
  }
}
