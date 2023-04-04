import { styled } from "..";

export const PopularBooksContainer = styled('div', {
  marginTop: '106px',
})
export const Header = styled('div', {
 display: 'flex',
 justifyContent: 'space-between', 
  span: {
    fontSize: '$sm',
    color: '$gray100',
    paddingTop: '50px',
  },
  p: {
    color: '$purple100',
    paddingTop: '50px',
    fontSize: '$sm',
 }
})
export const Post = styled('div', {                       
  backgroundColor: '$gray700',
  borderRadius: 8,
  marginTop: '10px',
  padding: '20px',
  width: '380px',
})
export const Content = styled('div', {
  display: 'flex',
})
export const Picture = styled('div', {})
export const Resume = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  paddingLeft: '20px',
  h1: {
    color: '$gray100',
    fontSize: '$xl',
  },
  p: {
    fontSize: '$ss',
    color: '$gray400',
  },
})