module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {
      margin: ['first'],
    },
  },
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // moveRight: {
        //   '0%:{transform:'
        // }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
      },
      colors: {
        primary: {
          superlight: '#F1F4FF',
          light: '#4A4F60',
          DEFAULT: '#B5B1AD',
          dark: '#514D4F',
          superdark: '#353535',
        },
        secondary: {
          superlight: '#FCEEE0',
          light: '#FFA133',
          DEFAULT: '#F95F09',
          dark: '#AE4408',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
