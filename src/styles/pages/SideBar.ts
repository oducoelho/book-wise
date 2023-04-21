import Link from "next/link";
import { styled } from "..";

export const SideBarContainer = styled('aside', {
  height: '95vh',
  width: '232px',
  background: "$gray700 url('https://github.com/oducoelho/book-wise/blob/main/src/assets/sidebar-bg.png?raw=true')",
  margin: '20px',
  borderRadius: 8,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '30px 0px',
  alignItems: 'center',

  '@media (max-width: 994px)': {
    display: 'block',
    left: '1rem',
    cursor: 'pointer',
    background: "none",
  }
})

export const Options = styled('div', {
  display: "flex",
  flexDirection: "column",
  gap: "28px",
  paddingTop: "40px",

})

export const Login = styled('div', {
  span: {
    fontSize: '$sm',
    color: '$gray200',
    fontWeight: 700,
    cursor: "pointer",
  }
})

export const NavItemContainer = styled(Link, {
  textDecoration: "none",
  display: "flex",
  transition: "0.2s",
  fontSize: '$md',
  fontWeight: 'bold',
  color: '$gray200',

  svg: {
    marginRight: "12px"
  },

  "&:hover": {
    color: "$gray100",
  },


  "&::before": {
    content: "''",
    width: 4,
    height: 24,
    background: "$gradient-vertical",
    marginRight: "16px",
    borderRadius: "50px",
    transition: "0.2s",
    opacity: 0,
  },

  variants: {
    active: {
      true: {
        color: "$gray100",
        fontWeight: "bold",

        "&::before": {
          opacity: 1,
        }
      }
    }
  }
})

export const MobileIcon = styled('div', {
  display: 'none',
  cursor: 'pointer',
  paddingRight: '16px',
  zIndex: 10,
  color: '$gray100',

  '@media (max-width: 994px)': {
    display: 'block',
    left: '1rem',
    cursor: 'pointer',
  }
})
export const WebVersion = styled('div', {
  display: 'none',
  cursor: 'pointer',
  paddingRight: '16px',
  zIndex: 10,
  color: '$gray100',

  '@media (max-width: 1024px)': {
    display: 'none',
    backgroundColor: 'transparent',
  }
})
export const MobileVersion = styled('div', {
  height: '100%',
  width: '232px',
  background: "$gray700 url('https://github.com/oducoelho/book-wise/blob/main/src/assets/sidebar-bg.png?raw=true')",
})