import { styled } from "..";

export const InitialPageContainer = styled('div', {
  width: "100%",
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "auto 1fr",
})
export const Content = styled('div', {
  width: "100%",
  height: "100vh",
  maxWidth: "996px",
  margin: "0 auto",
  display: "flex",

  '@media (max-width: 994px)': {
    marginTop: '50px',
    display: "flex",
    flexDirection: "column",
  }
})