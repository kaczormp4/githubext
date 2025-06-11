export function createTopPanel() {
  const panel = document.createElement("div");
  panel.className = "top-panel";

  panel.innerHTML = `
    <div class="top-panel-content">
      <a href="https://github.com/kaczormp4/githubext" target="_blank" class="top-panel-link" title="GitHub Repository">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" class="top-panel-icon">
      </a>
      <a href="https://www.linkedin.com/in/herobart/" target="_blank" class="top-panel-link" title="LinkedIn Profile">
        In
      </a>
    </div>
  `;

  document.body.appendChild(panel);
  return panel;
}
// <img src="src/assets/images/linkedin-svgrepo-com.svg" alt="LinkedIn" class="top-panel-icon">
