import { styled } from "@stitches/react";
import Image from "next/image";

export const Container = styled("div", {
  width: '100%',
  borderRadius: 8,
  display: 'flex',
  background: "$gray600",
  padding: '20px',
  div: {
    h1: {
      fontSize: '$lg',
    },
  },

  span: {
    color: '$gray300',
    fontSize: '$sm',
  },
})
export const Content = styled("div", {
  marginLeft: '2rem',

  h1: {
    color: '$gray100',
    fontSize: '$ss',
  },

  p: {
    color: '$gray400',
    fontSize: '14px',
    paddingBottom: '10px'
  },
})
export const CompactDetails = styled("div", {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '0.75rem',
  
  span: {
    color:'$gray300'
  },
})
export const ToggleShowMoreButton = styled("button", {
  background: "none",
  border: "none",
  fontSize: "12px",
  color: "$purple100",
  fontWeight: "$bold",
  marginLeft: "0.25rem",
  cursor: 'pointer',
})
export const BookImage = styled(Image, {
  minWidth: 108,
  objectFit: 'cover',
  transation: '0.2s',

  "&:hover": {
    filter: 'brightness(1.2)'
  }
})