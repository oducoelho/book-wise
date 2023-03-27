import Link from "next/link";
import { styled } from "..";

export const SideBarContainer = styled('div', {
  height: '95vh',
  width: '250px',
  background: "$gray700 url('/images/sidebar-bg.png') no-repeat center",
  margin: '20px',
  borderRadius: 8,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '30px 0px',
  alignItems: 'center',
})

export const Options = styled('div', {
  display: "flex",
  flexDirection: "column",
  gap: "28px",
  paddingTop: "40px",

})

export const Login = styled('div', {
  span: {
    fontSize: '$md',
    color: '$gray200',
    fontWeight: 700,
  }
})

export const NavItemContainer = styled(Link, {
  textDecoration: "none",
  display: "flex",
  transition: "0.2s",
  fontSize: '$md',
  fontWeight: 'bold',

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
