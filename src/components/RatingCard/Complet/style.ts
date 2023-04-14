import { styled } from "@stitches/react";

export const Container = styled("div", {})
export const Post = styled('div', {
  backgroundColor: '$gray700',
  borderRadius: 8,
  padding: '20px',
  width: '80%',
  marginTop: '10px',
})
export const User = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  div: {
    display: 'flex',
    div: {
      display: 'flex',
      justifyContent: 'center',
      paddingLeft: '20px',
      flexDirection: 'column',
      span: {
        color: '$gray100',
        fontSize: '$sm',
      },
      strong: {
        fontSize: '$ss',
        fontWeight: 'normal',
        color: '$gray400',
      },
    }
  }
})
export const Stars  = styled('div', {})
export const Content = styled('div', {
  display: 'flex',
  paddingTop: '20px',
})
export const Picture = styled('div', {
  
})
export const Resume = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  paddingLeft: '20px',
  h1: {
    color: '$gray100',
    fontSize: '$xl',
  },
  p: {
    fontSize: '$ss',
    color: '$gray400',
  },
  span: {
    color: '$gray100',
    fontSize: '$sm',
    lineHeight: 1.6,
    paddingTop: '20px'
  },
})