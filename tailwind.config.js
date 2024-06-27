/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'simple-gray': '#FCFCFC',
        'gray-border': '#E7E7E7',
        'light-or': '#FEF4F2',
        'simple-orange': '#DC4A2D',
        'skill-text': '#4F4F4F',
        'header-text': '#B0B0B0',
        'header-text-2': '#888888',
        'all-black': '#3D3D3D',
        'title-text': '#5D5D5D',
        'open': '#ABEFC6',
        'not-open': '#ECFDF3',
        'skill-text': '#6E6D6D',
      },
      fontFamily: {
        sans: ['"General Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
