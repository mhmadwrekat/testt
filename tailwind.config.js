module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      BLUE: '#1d62a5',
      LogoPurp: '#453087',
    },
    extend: {
      fontFamily: {
        TSExtra: ['TsExtrabold'],
        TSSemi: ['TsSemibold'],
        TSbold: ['Tsbold'],
        TSmedium: ['TsMed'],
        TSthin: ['TsThin'],
        TSlight: ['TsLight'],
        NTbold: ['NotoBold'],
        NTsemibold: ['NotoSemiBold'],
        NTmedium: ['NotoMedium'],
        NTregular: ['NotoRegular'],
      },
    },
  },
  plugins: [require('tailwindcss-rtl')],
}
