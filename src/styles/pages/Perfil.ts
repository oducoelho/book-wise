import { styled } from "..";

export const ProfilePageContainer = styled('div', {
  h1: {
    color: '$gray100',
    fontSize: '$lg',
    minWidth: '624px',
  }
})
export const PerfilContainer = styled('div', {
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
    display: "block",
    flexDirection: "column",
  }
})