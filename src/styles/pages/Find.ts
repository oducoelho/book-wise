import { styled } from "..";

export const FindContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  
  '@media (max-width: 994px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    left:'25px',
    marginRight: '25px',
  }
})
export const Title = styled('div', {
  display: 'flex',
  alignItems: 'center',

  svg: {
    marginRight: "12px",
    color: '$green100',
  },

  span: {
    fontSize: '$2xl',
    color: '$gray100'
  },

  '@media (max-width: 994px)': {
    paddingBottom: '10px'
  }
})
export const Form = styled('form', {
  border: '1px solid $gray500',
  padding:'10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 8,
  
  input: {
    fontSize: '$sm',
    border: 'none',
    backgroundColor: '$background',
    marginRight: '200px',
    color: '$white',
    
    "&:focus": {
      outline: "none"
    },

    '@media (max-width: 994px)': {
      marginRight: '100px',
    }
  },
  button: {
    border: 'none',
    backgroundColor: '$background',
    cursor: 'pointer',

    svg: {
      color: '$gray500',
      marginRRight: '20px',
    }
  },

})