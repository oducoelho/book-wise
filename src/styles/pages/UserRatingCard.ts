import { styled } from "..";

export const Container = styled('div', {
  padding: "$6",
  borderRadius: 8,

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
  marginBottom: "$5",

  "> section": {
    display: "flex",
    gap: "$4",
  }
})