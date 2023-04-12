import { Container, Info, Title } from "@/styles/pages/BookInfo"
import { ReactNode } from "react"

type BoookIngoProps = {
  icon: ReactNode
  title: string
  info: string
}

export const BookInfo = ({ icon, title, info  }: BoookIngoProps) => {
  return (
    <Container>
      {icon}
      <div>
        <Title>{title}</Title>
        <Info>{info}</Info>
      </div>
    </Container>
  )
}
