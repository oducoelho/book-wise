
import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    fontSize: '62.5%',
    fontFamily: 'Nunito Sans'
  },

  body: {
    backgroundColor: '$background',
  },

  'body, input, textarea, button': {

  },
})