import * as Dialog from '@radix-ui/react-dialog';
import { styled } from ".."
import Image from 'next/image';

export const DialogOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
  background: "#00000099"
})
export const DialogContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  width: 660,
  height: "100%",
  background: "$gray800",
  boxShadow: "-4px 0px 30px 0px #00000080",
  padding: "24px 48px",
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",

  "&::-webkit-scrollbar": {
    width: 6
  },

  "&::-webkit-scrollbar-track": {
    background: "$gray700"
  },

  "&::-webkit-scrollbar-thumb": {
    background: "$gray600"
  }
})
export const DialogClose = styled(Dialog.Close, {
  color: "$gray400",
  background: "transparent",
  border: "none",
  marginLeft: "auto",
  marginBottom: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})
export const BookDetailsWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  background: "$gray700",
  padding: "24px 32px",
  borderRadius: "16px",
})
export const BookDetailsContainer = styled("div", {
  display: "flex",
  gap: "32px"
})
export const BookImage = styled(Image, {
  borderRadius: "16px",
  objectFit: "cover",
  minWidth: 171
})
export const BookContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
})
export const BookInfos = styled("div", {
  marginTop: 40,
  paddingTop: 24,
  borderTop: "1px solid $gray600",
  display: "flex",
  gap: 60
})
export const BookName = styled("div", {
  fontSize: "18px",
  color: "$gray100",
  fontWeight: 'bold'
})
export const BookAuthor = styled("div", {
  color: '$gray300',
  marginTop: '8px',
  fontSize: "15px",
})
export const Assessments = styled("div", {
  color: '$gray400',
  marginTop: '8px',
  fontSize: "12px",
})
