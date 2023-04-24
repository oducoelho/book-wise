import { styled } from "..";

export const  BooksContainer = styled('div', {
  padding: '0px 85px 0px 85px',

  '@media (max-width: 994px)': {
    padding: '0px 0px 0px 0px',
  },
})
export const TagsContainer = styled('div', {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  marginTop: 40,
  marginBottom: 48,
  
  '@media (max-width: 994px)': {
    gap: "0px",
  }
})

export const BooksGrid = styled('div', {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",

  "&::-webkit-scrollbar": {
    display: "none"
  },

  '@media (max-width: 994px)': {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    marginRight: "25px",
  }
})
