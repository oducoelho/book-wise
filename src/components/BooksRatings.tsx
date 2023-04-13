import { Container } from "@/styles/pages/BooksRatings"
import { useSession } from "next-auth/react"
import { Fragment, useState } from "react"
import { DialogLogin } from "./DialogLogin"
import { RatingWithAuthor, UserRatingCard } from "./UserRatingCard"
import { RatingForm } from "./RatingForm"
import { Link } from "./Link"

type BookRatingsProps = {
  ratings: RatingWithAuthor[]
  bookId: string
}

export const BooksRatings = ({ bookId, ratings }: BookRatingsProps) => {
  const { status, data: session } = useSession()
  const [showForm, setShowForm ] = useState(false)

  const isAuthenticated = status === "authenticated"

  const handleRate = () => {
    if(!isAuthenticated) return
    setShowForm(true)
  }

  const RatingWrapper = isAuthenticated ? Fragment : DialogLogin

  const sortedRatingsByDate = ratings.sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  const canRate = ratings.every(x => x.user_id !== session?.user?.id)

  return (
    <Container>
      <header>
        <span>Avaliações</span>
        {canRate && (
          <RatingWrapper>
            <Link withoutIcon onClick={handleRate} text="Avaliar" color="purple" />
          </RatingWrapper>
        )}
      </header>
      <section>
        {showForm && <RatingForm bookId={bookId} onCancel={() => setShowForm(false)} />}
        {sortedRatingsByDate.map(rating => (
          <UserRatingCard key={rating.id} rating={rating} />
        ))}
      </section>
    </Container>
  )
}
