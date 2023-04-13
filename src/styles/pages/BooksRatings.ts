import { styled } from "..";

export const Container = styled('div', {
  display: "flex",
  flexDirection: "column",
  marginTop: 40,

  "> header": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "$4",

    span: {
      color: '$gray100',
      fontSize: '$md'
    }
  },

  "> section": {
    display: "flex",
    flexDirection: "column",
    gap: "$3"
  }
})