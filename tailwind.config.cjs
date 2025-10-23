module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#06b6d4',
        accent: '#00FFA3',
        surface: '#0b0f11',
        card: '#0f1517',
        muted: '#94a3b8',
      },
      boxShadow: {
        'card': '0 6px 24px rgba(2,6,23,0.6)'
      }
    },
  },
  plugins: [],
}