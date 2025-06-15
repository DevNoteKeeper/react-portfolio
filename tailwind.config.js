module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        bgDark: '#171A35',
        gTitle: '#CCD6F6',
        gDesc: '#8892B0',
        point: '#64FFDA',
      },
      fontFamily: {
        noto: ['"Noto Sans"', 'sans-serif'],
      },
      fontSize: {
        sectionTitle: ['1.8rem', {  fontWeight: '700' }], // 32px, 44.8px(140%)
        sectionSubTitle: ['1.5rem', {fontWeight: '700' }], // 24px, 33.6px(140%)
        sectionDescription: ['1.5rem', { fontWeight: '400' }], // 24px, 33.6px(140%)
      }
    },
  },
  plugins: [],
};
