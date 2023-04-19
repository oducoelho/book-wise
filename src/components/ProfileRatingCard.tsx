import { RatingStars } from "@/pages/initialPage/components/PopularBooks/RatingStars"
import { ProfileRating } from "@/pages/perfil/components/MyBooks"
import { BookDetails, BookImage, CardContent, Container } from "@/styles/pages/ProfileRatingCard"
import { getRelativeTimeString } from "@/utils/getRelativeTimeString"
import Link from "next/link"

type ProfileRatingCardProps = {
  rating: ProfileRating
}
export const ProfileRatingCard = ({ rating }: ProfileRatingCardProps) => {
  const distance = getRelativeTimeString(new Date(rating.created_at), "pt-BR")
  return (
    <Container>
      <span>{distance}</span>
      <CardContent>
        <BookDetails>
          <Link href={`/explore?book=${rating.book_id}`}>
            <BookImage src={rating.book.cover_url} alt={rating.book.name} width={98} height={134}/>
          </Link>
          <section>
            <div>
              <span>{rating.book.name}</span>
              <p>{rating.book.author}</p>
            </div>

            <RatingStars rating={rating.rate} />
          </section>
        </BookDetails>
        <span>{rating.description}</span>
      </CardContent>
    </Container>
  )
}
