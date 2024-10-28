/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customLightYellow: '#FFFBEC',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'heading-5': ['32px', '35.2px'],
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '5rem',
        },
      },
      letterSpacing: {
        tightest: '0.5px',
      },
    },
  },
  plugins: [],
};
