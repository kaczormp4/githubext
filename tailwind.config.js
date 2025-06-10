/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ext-primary": "#ff6b00",
        "ext-bg": "#ffffff",
        "ext-text": "#24292e",
        "ext-border": "#e1e4e8",
        "ext-shadow": "rgba(0, 0, 0, 0.1)",
        "ext-hover": "#f6f8fa",
      },
    },
  },
  plugins: [],
};
