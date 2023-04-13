import { getRelativeTimeString } from '@/utils/getRelativeTimeString'
import { Rating, User } from '@prisma/client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { RatingStars } from '@/pages/initialPage/components/PopularBooks/RatingStars'
import { Container, UserDetains } from '@/styles/pages/UserRatingCard'
import { Avatar } from '@/styles/pages/LoginDialog'

export type RatingWithAuthor = Rating & {
  user: User
}

type UserRatingCardProps = {
  rating: RatingWithAuthor
}

export const UserRatingCard = ({ rating }: UserRatingCardProps) => {
  const { data: session } = useSession()

  const distance = getRelativeTimeString(new Date(rating.created_at), "pt-BR")

  const isOwner = session?.user?.id === rating.user_id
  return (
    <Container variant={isOwner ? "highlight" : "primary"}>
      <UserDetains>
        <section>
          <Link href={`/profile${rating.user_id}`}>
            <Avatar src={rating.user.avatar_url!} alt={rating.user.name}/>
          </Link>
          <div>
            <h1>{rating.user.name}</h1>
            <p>{distance}</p>
          </div>
        </section>

        <RatingStars rating={rating.rate}/>
      </UserDetains>

      <p>{rating.description}</p>
    </Container>
  )
}
