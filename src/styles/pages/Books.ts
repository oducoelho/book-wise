import { styled } from "..";

export const  BooksContainer = styled('div', {
  padding: '0px 85px 0px 85px'
})
export const TagsContainer = styled('div', {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  marginTop: 40,
  marginBottom: 48,
})

export const BooksGrid = styled('div', {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",

  "&::-webkit-scrollbar": {
    display: "none"
  },
})
