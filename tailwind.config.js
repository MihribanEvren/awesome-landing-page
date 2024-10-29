/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgDark: '#0F172A',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'heading-5': ['32px', '35.2px'],
      },
      container: {
        padding: {
          DEFAULT: '5rem',
        },
      },
      letterSpacing: {
        tightest: '0.5px',
      },
    },
  },
  plugins: [],
};
