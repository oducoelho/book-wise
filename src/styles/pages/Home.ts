import { styled } from "..";

export const HomeContainer = styled('div', {
  height: '100vh',
  display: 'flex',
})

export const Login = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  paddingLeft: ' 500px',
})

export const HomeImage = styled('div', {
  padding: '25px 0px 10px 25px'
})

export const Content = styled('div', {
  h1: {
    color: '$gray100',
    fontSize: '$3xl',
  },
  p: {
    color: '$gray200',
    fontSize: '$md',
    marginBottom: '20px',
  },
})

export const LoginOption = styled('div', {
  backgroundColor: '$gray600',
  marginTop: '15px',
  borderRadius: 8,
  padding: '10px 20px',
  width: '350px',
  fontSize: '$sm',
  color: '$gray200',

  cursor: 'pointer',
  
  display: 'flex',
  alignItems: 'center',

  Image: {
    width: '130px',
  },
  button: {
    paddingLeft: '10px',
    border: 'none',
    backgroundColor: 'transparent',
    color: '$gray100',
    cursor: 'pointer',
  },

  '&:hover': {
    backgroundColor: '$gray500',
  },
})