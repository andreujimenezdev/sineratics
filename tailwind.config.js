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
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        'gray-light': '#f5f5f5',
        'gray-medium': '#dadada',
        'border': '#e5e5e5',
        'blue-primary': '#0A66C2',
        'blue-dark': '#1C4266',
      },
    },
  },
  plugins: [],
}

