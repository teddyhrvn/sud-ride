/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FAFAFA',
          card: '#FFFFFF',
          dark: '#0D1117',
          surface: '#F3F4F6',
          sun: '#FF6B00',
          leaf: '#10B981',
          muted: '#6B7280',
        },
      },
    },
  },
  plugins: [],
}