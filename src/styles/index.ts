import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches ({
  theme: {
    colors: { 
      background: '#0e1116',

      gray100: '#F8F9FC',
      gray200: '#E6E8F2',
      gray300: '#D1D6E4',
      gray400: '#8D95AF',
      gray500: '#303F73',
      gray600: '#252D4A',
      gray700: '#181C2A',
      gray800: '#0E1116',

      purple100: '#8381D9',
      purple200: '#2A2879',
      
      green100: '#50B2C0',
      green200: '#255D6A',
      green300: '#0A313C',


      white: '#FFFFFF',
      black: '#000000',

			'gradient-vertical': `linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)`,
			'gradient': `linear-gradient(60deg, #0E1116 0%, #8381D9 100%)`,
      'gradient-horizontal': `linear-gradient(90deg, #7FD1CC 0%, #9694F5 100%)`,
    },

    fontSizes: {
      ss: '1.2rem',
      sm: '1.4rem',
      md: '1.8rem',
      lg: '2.0rem',
      xl: '2.4rem',
      '2xl': '3.2rem',
      '3xl': '3.6rem',
      '4xl': '4.5rem',
    }
  }
})