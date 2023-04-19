import { styled } from "..";

export const Container = styled('div', {
})
export const LatestContainer = styled('div', {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '30px 0px',
    
    p: {
      color: '$gray100',
      fontSize: '$sm'
    },
  }
})

export const Title = styled('div', {
  color: '$gray100',
  fontSize: '$sm',
  padding: '40px 0px 10px 0px'
})