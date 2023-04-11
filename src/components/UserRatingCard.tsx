
import { Container, UserDetains } from '@/styles/pages/UserRatingCard'
import { Rating, User } from '@prisma/client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

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
          </Link>
          <div>
            <h1>{rating.user.name}</h1>
            <p>{distance}</p>
          </div>
        </section>
      </UserDetains>
      <p></p>
    </Container>
  )
}
