import { styled } from "..";

export const Container = styled('div', {
  background: '$gray700',
  padding: '1.5rem',
  borderRadius: 8,
})
export const UserDetails = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  "> section": {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    
    h1: {
      fontSize: '$sm',
      color: '$gray100'
    }
  }
})
export const FormContainer = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  marginTop: '1.5rem',

  textarea: {
    flex: 1,
    padding: "0.875rem 1.25rem",
    background: "$gray800",
    fontSize: '1.5rem',
    borderRadius: 8,
    border: "none",
    color: "$gray100",
    resize: "none",
    minHeight: "136px",

    "&::placeholder": {
      color: "$gray400"
    },

    "&:focus": {
      outline: 'red'
    }
  }
})
export const ActionsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '0.5rem'
})
