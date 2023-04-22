import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { styled } from "..";

export const SideBarContainer = styled('aside', {
  height: '95vh',
  width: '232px',
  background: "$gray700 url('https://github.com/oducoelho/book-wise/blob/main/src/assets/sidebar-bg.png?raw=true')",
  margin: '20px',
  borderRadius: 8,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: '30px 0px',

  '@media (max-width: 994px)': {
    background: "transparent",
    width: '50px',
  }
})

export const Options = styled('div', {
  display: "flex",
  flexDirection: "column",
  gap: "28px",
  paddingTop: "40px",

})

export const Login = styled('div', {
  paddingTop: '680px',
  span: {
    fontSize: '$sm',
    color: '$gray200',
    fontWeight: 700,
    cursor: "pointer",
  },

  '@media (max-width: 994px)': {
    paddingTop: '80px',
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
})
export const WebVersion = styled('div', {
  cursor: 'pointer',
  paddingRight: '16px',
  zIndex: 10,
  color: '$gray100',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@media (max-width: 994px)': {
    display: 'none',
  }
})
export const MobileVersion = styled(Dialog.Content, {
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  width: "22rem",
  background: "url('https://github.com/oducoelho/book-wise/blob/main/src/assets/sidebar-bg.png?raw=true')",
  padding: "3rem",
  paddingTop: "4.5rem",
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
  
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const CartClose = styled(Dialog.Close, {
  background: "none",
  border: "none",
  color: "$gray100",
  position: "absolute",
  top: "1.75rem",
  left: "18rem",
})

export const MobileOptions = styled('div', {
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
export const DialogOpenWhenMobileOptionActivated = styled('div', {
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