import { violet, blackA, mauve, green } from '@radix-ui/colors';
import { keyframes } from '@stitches/react';
import * as Dialog from '@radix-ui/react-dialog';
import { styled } from '..';

export const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

export const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

export const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

export const DialogContent = styled(Dialog.Content, {
  backgroundColor: '$gray700',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
});

export const Button = styled('div', {
  fontSize: '$md',
});

export const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray100',
  position: 'absolute',
  top: 10,
  right: 10,
  cursor: 'pointer',
});

export const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingBottom: '20px',
  span: {
    fontSize: '$sm',
    color: '$gray100',
  }
})

export const Login = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

export const LoginOption = styled('div', {
  backgroundColor: '$gray600',
  marginTop: '15px',
  borderRadius: 8,
  padding: '10px 20px',
  width: '350px',
  fontSize: '$sm',
  color: '$gray200',

  cursor: 'pointer',
  
  display: 'flex',
  alignItems: 'center',

  Image: {
    width: '130px',
  },
  button: {
    paddingLeft: '10px',
    border: 'none',
    backgroundColor: 'transparent',
    color: '$gray100',
  },

  '&:hover': {
    backgroundColor: '$gray500',
  },
})