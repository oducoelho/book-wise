import { styled } from "..";

export const CategoriesContainer = styled('div',{
  display: 'flex',
  gap: '20px',
  paddingTop: '20px',
})
export const Container = styled('div',{
  background: "none",
  color: "$purple100",
  border: "1px solid $purple100",
  padding: "5px 10px",
  borderRadius: 8,
  transition: "0.2s",
  cursor: "pointer",
  fontSize: "$ss",

  "&:hover": {
    color: "$gray100",
    background: "$purple200",
  },

  variants: {
    active: {
      true: {
        color: "$gray100",
        background: "$purple200",
        borderColor: "$purple200",
      }
    }
  }
})