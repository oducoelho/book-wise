import { Container } from "@/styles/pages/LatestsRating"
import { useSession } from "next-auth/react"

export const LatestsRating = () => {
  const { data: session } = useSession()

  const userId = session?.user.id 
  
  return (
    <Container>
      <section>

      </section>
    </Container>
  )
}
