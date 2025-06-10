(() => {
  "use strict";

  let allExpanded = true;
  let allMarkedViewed = false;
  let allCommentsHidden = false;

  const injectStyles = () => {
    const style = document.createElement("style");
    style.textContent = `
        .custom-ui-panel {
          position: fixed;
          background: white;
          opacity: 1;
          box-shadow: 0 0 10px rgba(0,0,0,0.15);
          z-index: 9999;
          padding: 16px;
          transition: transform 0.3s ease;
          font-family: sans-serif;
        }
        .custom-ui-panel h3 { color: black; margin-top: 0; }
        .left-panel { width: 200px; left: 0; bottom: 0; height: 33vh; border-right: 2px solid orange; transform: translateX(-100%); }
        .right-panel { width: 300px; right: 0; top: 20%; height: auto; border-left: 2px solid orange; transform: translateX(100%); }
        .panel-visible { transform: translateX(0); }
        .toggle-btn { position: fixed; top: 50%; transform: translateY(-50%); background: orange; color: white; padding: 8px 12px; font-weight: bold; cursor: pointer; border-radius: 4px; z-index: 10000; }
        .toggle-left { left: 0; }
        .toggle-right { right: 0; }
        .toggle-hidden { display: none !important; }
        .action-log { margin-top: 1rem; font-size: 14px; color: #333; max-height: 25vh; overflow-y: auto; }
        .action-btn { background: orange; color: white; padding: 8px 12px; border: none; margin-bottom: 12px; border-radius: 4px; cursor: pointer; }
        .close-btn { position: absolute; top: 8px; right: 12px; cursor: pointer; font-weight: bold; background: transparent; border: none; font-size: 16px; color: #555; }
      `;
    document.head.appendChild(style);
  };

  const logAction = (msg) => {
    const log = document.getElementById("action-log");
    if (!log) return;
    const entry = document.createElement("div");
    entry.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
    log.appendChild(entry);
    log.scrollTop = log.scrollHeight;
  };

  const createPanel = (side, contentHTML, toggleText) => {
    const panel = document.createElement("div");
    panel.className = `custom-ui-panel ${side}-panel`;
    panel.innerHTML = contentHTML;
    document.body.appendChild(panel);

    const toggle = document.createElement("div");
    toggle.className = `toggle-btn toggle-${side}`;
    toggle.textContent = toggleText;
    document.body.appendChild(toggle);

    toggle.onclick = () => {
      panel.classList.add("panel-visible");
      toggle.classList.add("toggle-hidden");
    };

    panel.querySelector(`#close-${side}`).onclick = () => {
      panel.classList.remove("panel-visible");
      toggle.classList.remove("toggle-hidden");
    };

    return panel;
  };

  const handleToggleDiffs = (btn) => {
    const buttons = document.querySelectorAll(
      "button.btn-octicon.js-details-target"
    );
    buttons.forEach((b) => {
      const expanded = b.getAttribute("aria-expanded") === "true";
      if ((allExpanded && expanded) || (!allExpanded && !expanded)) {
        b.click();
      }
    });
    logAction(`${allExpanded ? "Collapsed" : "Expanded"} all diffs`);
    btn.textContent = allExpanded ? "Expand All" : "Collapse All";
    allExpanded = !allExpanded;
  };

  const handleToggleViewed = (btn) => {
    const checkboxes = document.querySelectorAll(
      'input.js-reviewed-checkbox[type="checkbox"]'
    );
    checkboxes.forEach((cb) => {
      if (cb.checked !== allMarkedViewed) {
        cb.click();
      }
    });
    logAction(
      `${allMarkedViewed ? "Marked all as unviewed" : "Marked all as viewed"}`
    );
    btn.textContent = allMarkedViewed
      ? "Mark All as Viewed"
      : "Mark All as Unviewed";
    allMarkedViewed = !allMarkedViewed;
  };

  const handleToggleComments = (btn) => {
    const rows = document.querySelectorAll(
      "tr.inline-comments.js-inline-comments-container"
    );
    rows.forEach((row) => {
      row.style.display = allCommentsHidden ? "" : "none";
    });
    logAction(
      `${allCommentsHidden ? "Unhid all comments" : "Hid all comments"}`
    );
    btn.textContent = allCommentsHidden
      ? "Hide All Comments"
      : "Unhide All Comments";
    allCommentsHidden = !allCommentsHidden;
  };

  const bindActions = () => {
    document.addEventListener("click", (e) => {
      const { id } = e.target;
      if (id === "toggle-diffs") handleToggleDiffs(e.target);
      if (id === "toggle-viewed") handleToggleViewed(e.target);
      if (id === "toggle-comments") handleToggleComments(e.target);
    });
  };

  const init = () => {
    injectStyles();

    createPanel(
      "left",
      `
        <button class="close-btn" id="close-left">×</button>
        <h3>Live Review Status</h3>
        <div id="action-log" class="action-log"></div>
      `,
      "≡ Status"
    );

    createPanel(
      "right",
      `
        <button class="close-btn" id="close-right">×</button>
        <h3>Review Tools</h3>
        <button class="action-btn" id="toggle-diffs">Expand All</button>
        <button class="action-btn" id="toggle-viewed">Mark All as Viewed</button>
        <button class="action-btn" id="toggle-comments">Hide All Comments</button>
      `,
      "≡ Tools"
    );

    bindActions();
  };

  init();
})();
