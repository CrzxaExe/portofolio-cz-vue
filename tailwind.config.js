/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      gridTemplateColumns: {
        techstack: 'repeat(20, minmax(0,2fr))',
      },
    },
  },
  plugins: [],
}
