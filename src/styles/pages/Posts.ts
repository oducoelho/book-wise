import { styled } from "..";

export const PostContainer = styled('div', {
  marginTop: '60px',
  marginLeft: '-330px',
})
export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  div: {
    display: 'flex',
    alignItems: 'center',
      svg: {
    marginRight: "12px",
    color: '$green100',
  },
  },
  h1: {
    fontSize: '$2xl',
    color: '$gray100'
  },
  p: {
    fontSize: '$sm',
    color: '$gray100',
    paddingTop: '50px',
  },
})
export const Post = styled('div', {
  backgroundColor: '$gray700',
  borderRadius: 8,
  padding: '20px',
  width: '80%',
  marginRight: '-800px',
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