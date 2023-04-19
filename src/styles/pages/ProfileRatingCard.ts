import Image from "next/image";
import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  span: {
    color: '$gray300',
    fontSize: '$sm',
  }
})
export const CardContent = styled('div', {
  backgroundColor: '$gray700',
  borderRadius: 8,
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  width: '100%',
})
export const BookDetails = styled('div', {
  display: 'flex',
  gap: '2.5rem',

  "> section": {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    div: {
      span: {
        color: '$gray100',
        fontSize: '$md'
      },

      p: {
        color: '$gray400',
        fontSize: '$ss'
      }
    }
  }
})
export const BookImage = styled(Image, {
  minWidth: 98,
  objectFit: 'cover',
  borderRadius: 4,
  transition: '0.2s',

  "&:hover": {
    filter: 'brightness(1.2)'
  }
})