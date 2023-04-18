import Image from 'next/image'
import { Container, Content, Picture, Post, Resume, Stars, Usuario } from './style'
import React from 'react'
import { Book, Rating, User } from '@prisma/client'
import { getRelativeTimeString } from '@/utils/getRelativeTimeString'
import { useToggleShowMore } from '@/hooks/useToggleShowMore'
import { RatingStars } from '@/pages/initialPage/components/PopularBooks/RatingStars'
import { Avatar } from '@/styles/pages/LoginDialog'

export type RatingWithAuthorAndBook = Rating & {
  user: User
  book: Book
}

type RatingCardProps = {
  rating: RatingWithAuthorAndBook
  variant?: "default" | "compact"
}

const MAX_SUMMARY_LENGTH = 180


export const Complet = ({ rating }: RatingCardProps) => {
  const distance = getRelativeTimeString(new Date(rating.created_at), "pt-BR")

  const { text: bookSummary, toggleShowMore, isShowingMore } = useToggleShowMore(rating.book.summary, MAX_SUMMARY_LENGTH)

  return (
    <Container>
      <Post>
        <Usuario>
          <div>
            <Avatar src={rating?.user?.avatar_url!} alt="" />
            <div>
              <span>{rating.user.name}</span>
              <strong>{distance}</strong>
            </div>
          </div>
          <Stars>
            <RatingStars rating={rating.rate} />
          </Stars>
        </Usuario>
        <Content>
          <Picture>
            <Image
              src={rating.book.cover_url}
              alt=""
              width={108}
              height={152}
            />
          </Picture>
          <Resume>
            <h1>O Hobbit</h1>
            <p>J.R.R Tolkien</p>
            <span>
              Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh... ver mais
            </span>
          </Resume>
        </Content>
      </Post>
    </Container>
  )
}
