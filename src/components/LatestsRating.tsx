import { Container, LatestContainer } from "@/styles/pages/LatestsRating"
import { useSession } from "next-auth/react"
import { Compact, RatingWithAuthorAndBook } from "./RatingCard/Compact"
import { useQuery } from "@tanstack/react-query"
import { api } from "@/lib/axios"
import { Link } from "./Link"
import { Complet } from "./RatingCard/Complet"

export const LatestsRating = () => {
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
            <Link text="Ver Todas" href={`/profile/${userId}`} />
          </header>

          <Compact rating={latestUserRating}/>
        </LatestContainer>
      )}

      <span>Avaliações mais recentes</span>

      <section>
        {/*ratings?.map(rating => (
          <Complet key={rating.id} />
        ))*/}
      </section>
    </Container>
  )
}
