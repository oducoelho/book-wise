import { RatingStars } from "@/pages/initialPage/components/PopularBooks/RatingStars"
import { BookImage, CompactDetails, Container, Content, ToggleShowMoreButton } from "./style"
import { getRelativeTimeString } from "@/utils/getRelativeTimeString"
import { Book, Rating, User } from "@prisma/client"
import { useToggleShowMore } from "@/hooks/useToggleShowMore"

export type RatingWithAuthorAndBook = Rating & {
  user: User
  book: Book
}

type RatingCardProps = {
  rating: RatingWithAuthorAndBook
}

const MAX_SUMMARY_LENGTH = 180

export const Compact = ({ rating }: RatingCardProps) => {
  const distance = getRelativeTimeString(new Date(rating.created_at), "pt-BR")

  const { text: bookSummary, toggleShowMore, isShowingMore } = useToggleShowMore(rating.book.summary, MAX_SUMMARY_LENGTH)

  return (
    <Container>
      <div>
        <BookImage width={108} height={152} alt="book" src={rating.book.cover_url} />
      </div>
      <Content>
        <div>
          <CompactDetails>
            <span>{distance}</span>
            <RatingStars rating={rating.rate} />
          </CompactDetails>
        </div>
        <h1>{rating.book.name}</h1>
        <p>{rating.book.author}</p>
        <span>
          {bookSummary}
          {rating.book.summary.length > MAX_SUMMARY_LENGTH && (
            <ToggleShowMoreButton onClick={toggleShowMore}>
              {isShowingMore ? 'Ver menos' : 'Ver mais'}
            </ToggleShowMoreButton>
          )}
        </span>
      </Content>
    </Container>
  )
}
