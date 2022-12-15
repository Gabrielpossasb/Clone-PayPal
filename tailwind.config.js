/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#ffffff',
          100: '#ebebeb',
          200: '#dddddd',
          700: '#2c2e2f',
        },
        blue: {
          300: '#00A8EA',
          500: '#0070ba',
          700: '#0d3685',
        }
      },
      boxShadow: {
        'box': '2px 3px 8px #1f1f1fa1',
        'boxSoft': '2px 3px 4px #2e2e2e44',
      },
    },
  },
  plugins: [],
}
