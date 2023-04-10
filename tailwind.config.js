/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.{html,js}'],
  theme: {
    screens: {
      sm: '450px',
      md: '860px',
      lg: '960px',
      xl: '1170px',
      tophidden: { max: '900px' },
      topLghidden: { min: '900px' },
      topSmHidden: { max: '450px' },
      topMdHidden: { min: '451px', max: '899px' },
    },
    extend: {
      colors: {
        primary: '#e0f2ed',
        secondary: '#fff101',
      },
    },
  },
  plugins: [],
};
