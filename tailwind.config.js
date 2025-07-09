/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Hurme Geometric Sans 4', 'sans-serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

