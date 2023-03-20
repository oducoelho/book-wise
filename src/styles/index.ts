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
      gray600: '#252D4A',
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