import { styled } from "..";

export const SideBarContainer = styled('div', {
  height: '95vh',
  width: '250px',
  background: '$gradient',
  margin: '20px',
  borderRadius: 8,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '30px 0px',


  div: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  }
})

export const Options = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingTop: '50px',

})

export const Login = styled('div', {
  span: {
    fontSize: '$md',
    color: '$gray200',
    fontWeight: 700,
  }
})