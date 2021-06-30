module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    

    extend: {
     colors: {
      superlight:"#FFFAFA",
      light:'#F3F3F3',
      DEFAULT:"#CBCBCB",
      dark:"#3C352E",
      extradark:"#1A171F",
      text:"#978F85"

      // primary:{
      //   superlight:"#FFFFFF",
      //   light:"#FFF8F0",
      //   DEFAULT:"#FFEBD1",
      //   dark:"#B0A28F",
      //   extradark:"#978F85"
      // },
      // secondary:{
      //   light:"#EFEFEF",
      //   DEFAULT:"#A0A0A0",
      //   dark:"#26221D"
      // },  
     }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

