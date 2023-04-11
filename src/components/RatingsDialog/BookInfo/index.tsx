import { Container } from "@/styles/pages/BookInfo"
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
        <h1>{title}</h1>
        <p>{info}</p>
      </div>
    </Container>
  )
}
