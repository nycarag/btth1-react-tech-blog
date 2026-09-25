/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canva: {
          canvas: '#f7f7f7',
          blue: '#2657c1',
          'blue-dark': '#1d4499',
          'blue-light': '#ebf2ff',
          card: '#ffffff',
          slate: '#1e293b',
          muted: '#64748b',
          border: '#e2e8f0',
          darkbg: '#0b1120',
          darkcard: '#1e293b',
          darkborder: '#334155'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        mono: ['Consolas', 'monospace', 'Courier New']
      }
    },
  },
  plugins: [],
}
