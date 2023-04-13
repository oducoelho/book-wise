import { styled } from "..";

export const Container = styled('div', {
  padding: "1.5rem",
  marginTop: '20px',
  borderRadius: 8,

  p: {
    color: '$gray200',
    fontSize: '$ss',
  },
  variants: {
    variant: {
      primary: {
        background: "$gray700",
      },
      highlight: {
        background: "$gray600",
      }
    }
  }
})
export const UserDetains = styled('div', {
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  marginBottom: "1.25rem",

  "> section": {
    display: "flex",
    gap: "1rem",

    div: {
      h1: {
        color: '$gray100',
        fontSize: "$sm",
      },
      p: {
        color: '$gray400',
        fontSize: '$ss',
      } 
    }
  }
})