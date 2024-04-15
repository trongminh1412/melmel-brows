module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '14px': '14px',
      '16px': '16px',
      '18px': '18px',
      '20px': '20px',
      '20pxim': '20px!important',
      '24px': '24px',
      '28px': '28px',
      '32px': '32px',
      '40px': '40px',
      '42px': '42px',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '52px',
    },
    extend: {
      colors: {
        primary: {
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: '#9ADDFB',
          400: '#4FC3F7',
          500: '#03A9F4',
          600: '#0398DC',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
          1000: '#D9D9D9',
          1100: '#767470',
        },
        dark: {
          100: '#272B2F',
          200: '#525560',
          300: '#414447',
          400: '#423F3A',
          500: '#EBEBEB',
          600: '#6C778D',
        },
        shadow: {
          card: '0px 0px 16px 0px #0000001A',
        },
        brown: {
          100: '#684B1E',
          200: '#E9E9E9',
          300: '#614417',
          400: '#E1E1E0',
          500: '#FCF6EF',
          600: '#94774A',
          700: '#FDFAF6',
          800: '#453113',
          900: '#322F2A',
          1000: '#4D3511',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
      screens: {
        '475px': {
          max: '475px',
        },
        '1024px': {
          max: '1024px',
        },
        1280: {
          max: '1280px',
        },
      },
    },
  },
  plugins: [],
};
