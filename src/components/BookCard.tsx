import { Book } from "@prisma/client"
import Image from "next/image"
import { BooksContainer, Card, Informations, SubTitle, Title } from "@/styles/pages/BookCard"
import { RatingsDialog } from "./RatingsDialog/RatingsDialog"
import { RatingStars } from "@/pages/initialPage/components/PopularBooks/RatingStars"

export type BookWithAvgRating = Book & {
  avgRating: number
  alreadyRead: boolean
}

type BookCardProps = {
  book: BookWithAvgRating
}

export const BookCard = ({ book }: BookCardProps) => {
  
  
  return (
    <RatingsDialog bookId={book?.id}>
      <BooksContainer>
          <Card>
            <Image
            src={book.cover_url} 
            alt="Capa" 
            width={108}
            height={152}
            />
            <Informations>
              <div>
                <Title>
                  {book.name}
                </Title>
                <SubTitle>
                  {book.author}
                </SubTitle>
              </div>
              
              <RatingStars rating={book.avgRating} />
            </Informations>
          </Card>
      </BooksContainer>
    </RatingsDialog>
  )
}
