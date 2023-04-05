import { styled } from "..";

export const  BooksContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',

  marginTop: '20px',
})
export const Card = styled('div', {
  display: 'flex',

  backgroundColor: '$gray700',
  padding: '20px',
  width: '318px',
  borderRadius: 8,
})
export const Informations = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  paddingLeft: '20px',
})
export const Title = styled('div', {
  fontSize: '20px',
  color: '$gray100',
})
export const SubTitle = styled('div', {
  fontSize: '12px',
  color: '$gray400',
})