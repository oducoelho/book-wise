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