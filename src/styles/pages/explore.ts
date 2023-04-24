import { styled } from "..";

export const ExploreContainer = styled('div', {
  width: "100%",
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "auto 1fr",

  '@media (max-width: 994px)': {
    display: "flex",
    position: 'absolute'

  }
})
export const Content = styled('div', {
  width: "100%",
  height: "100vh",
  maxWidth: "1200px",
  margin: "0 auto",
  paddingTop: 72,
})