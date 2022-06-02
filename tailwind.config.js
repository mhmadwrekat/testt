module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    colors: {
      BLUE: '#1d62a5',
      Purp: '#45378B',
      GREEN: '#07ad76',
      YELLOW: '#ffab00',
      SKY: '#17C1BC',
      RED: '#EB5353',
      GRAY100: '#F5F5F5',
      GRAY200: '#DDDDDD',
      GRAY300: '#7F7F7F',
      GRAY400: '#686767',
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
