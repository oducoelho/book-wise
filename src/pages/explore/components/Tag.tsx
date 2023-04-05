import {  CategoriesContainer, Container } from "@/styles/pages/Tag"
import { ComponentProps, ReactNode } from "react"

type TagProps = ComponentProps<typeof Container> & {
  children: ReactNode
  active?: boolean
}

export const Tag = ({ children, active, ...props }: TagProps) => {
  return (
    <CategoriesContainer {...props}>
      <Container>
        {children}
      </Container>
    </CategoriesContainer>
  )
}
