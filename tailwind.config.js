/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      colors: {
        navy: "#0B132B",
        "navy-dark": "#060A17",
        slate: "#475569",
        alabaster: "#FAF9F6",
        gold: "#B45309",
        "gold-accent": "#D97706"
      }
    }
  },
  plugins: []
};
