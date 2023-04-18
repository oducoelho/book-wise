import Image from 'next/image'
import { Container, Content, Picture, Post, Resume, Stars, Usuario } from './style'
import React from 'react'
import { Book, Rating, User } from '@prisma/client'
import { getRelativeTimeString } from '@/utils/getRelativeTimeString'
import { useToggleShowMore } from '@/hooks/useToggleShowMore'
import { RatingStars } from '@/pages/initialPage/components/PopularBooks/RatingStars'
import { Avatar } from '@/styles/pages/LoginDialog'
import { ToggleShowMoreButton } from '../Compact/style'

export type RatingWithAuthorAndBook = Rating & {
  user: User
  book: Book
}

type RatingCardProps = {
  rating: RatingWithAuthorAndBook
  variant?: "default" | "compact"
}

const MAX_SUMMARY_LENGTH = 160


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
          <RatingStars rating={rating.rate} />
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
          </Resume>
        </Content>
      </Post>
    </Container>
  )
}
