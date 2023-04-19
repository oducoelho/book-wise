import { Container, LatestContainer, Title } from "@/styles/pages/LatestsRating"
import { useSession } from "next-auth/react"
import { Compact, RatingWithAuthorAndBook } from "./RatingCard/Compact"
import { useQuery } from "@tanstack/react-query"
import { api } from "@/lib/axios"
import { Link } from "./Link"
import { Complet } from "./RatingCard/Complet"

export const LatestsRating = () => {
  const { data: ratings } = useQuery<RatingWithAuthorAndBook[]>(["latest-ratings"], async () => {
    const { data } = await api.get("/ratings/latest")
    return data?.ratings ?? []
  })
  
  const { data: session } = useSession()

  const userId = session?.user.id 

  const { data: latestUserRating } = useQuery<RatingWithAuthorAndBook>(['latest-user-rating', userId], async () => {
    const { data } = await api.get('/ratings/user-latest')
    return data.rating ?? null
  }, {
    enabled: !!userId
  })
  
  return (
    <Container>
      {latestUserRating && (
        <LatestContainer>
          <header>
            <p>Sua última leitura</p>
            <Link text="Ver Todas" href={`/perfil/${userId}`} />
          </header>

          <Compact rating={latestUserRating}/>
        </LatestContainer>
      )}

      <Title>Avaliações mais recentes</Title>

      <section>
        {ratings?.map(rating => (
          <Complet key={rating.id} rating={rating} />
        ))}
      </section>
    </Container>
  )
}
