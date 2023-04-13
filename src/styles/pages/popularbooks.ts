import { styled } from "..";

export const PopularBooksContainer = styled('div', {
  marginTop: '106px',
  width: '355px',

  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  }
})
export const Header = styled('div', {
 display: 'flex',
 justifyContent: 'space-between', 
 //paddingLeft: '-210px',
  span: {
    fontSize: '$sm',
    color: '$gray100',
    paddingTop: '50px',
  },
  p: {
    color: '$purple100',
    paddingTop: '50px',
    fontSize: '$sm',
    paddingRight: '40px',
    textDecoration: 'none',
 }
})
