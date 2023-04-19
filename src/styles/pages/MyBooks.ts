import { styled } from ".."

export const PostContainer = styled('div', {
  marginTop: '35px',
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

    input: {

    }
  },
  },
  h1: {
    fontSize: '$2xl',
    color: '$gray100'
  },
  p: {
    fontSize: '$sm',
    color: '$gray100',
    padding: '10px 0px',
  },
})
export const Form = styled('div', {
  border: '1px solid $gray500',
  padding:'10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 8,
  width: '100%',
  margin: '30px 0px',

  input: {
    fontSize: '$sm',
    border: 'none',
    backgroundColor: '$background',
    color: '$white',
    width: '100%',

    
    "&:focus": {
      outline: "none"
    }
  },
  button: {
    border: 'none',
    backgroundColor: '$background',
    cursor: 'pointer',

    svg: {
      color: '$gray500',
    }
  }
})