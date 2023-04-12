import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "20px",

  svg: {
    width: 24,
    height: 24,
    color: "$green100"
  },
})
export const Title = styled("div", {
  fontSize: "15px",
  color: "$gray200",
})
export const Info = styled("div", {
  fontSize: "18px",
  color: "$gray100",
  fontWeight: 'bold',
})