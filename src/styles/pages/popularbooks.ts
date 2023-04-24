import { styled } from "..";

export const PopularBooksContainer = styled('div', {
  marginTop: '50px',
  width: '355px',

  '@media (max-width: 994px)': {
    position: 'absolute',
    left: '60px'
  },

  section: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    paddingLeft: '100px',

    '@media (max-width: 994px)': {
      paddingLeft: '0px',
      marginTop: '40px'
    }
  }
})
export const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  paddingLeft: '50px',
  span: {
    fontSize: '$sm',
    color: '$gray100',
    paddingTop: '50px',
    marginTop: '5px'
  },
  p: {
    color: '$purple100',
    paddingTop: '50px',
    fontSize: '$lg',
    fontWeight: 'bold',
    textDecoration: 'none',
    paddingLeft: '50px',
 },

 '@media (max-width: 994px)': {
  paddingLeft: '0px',
  marginTop: '3700px',
  },
})
