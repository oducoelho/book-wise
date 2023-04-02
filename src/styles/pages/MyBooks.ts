import { styled } from ".."

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
export const Post = styled('div', {
  backgroundColor: '$gray700',
  borderRadius: 8,
  padding: '20px',
  width: '80%',
  marginRight: '-800px',

})
export const Text = styled('div', {
  paddingTop: '20px',
  span: {
    color: '$gray300',
    fontSize: '$sm',
    lineHeight: 1.6,
    paddingTop: '20px'
  },
})
export const Stars  = styled('div', {})
export const Content = styled('div', {
  display: 'flex',
})
export const Picture = styled('div', {
  
})
export const Resume = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
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
})
export const Form = styled('div', {
  border: '1px solid $gray500',
  padding:'10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 8,
  width: '80%',
  margin: '30px 0px',

  input: {
    fontSize: '$sm',
    border: 'none',
    backgroundColor: '$background',
    color: '$white',
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