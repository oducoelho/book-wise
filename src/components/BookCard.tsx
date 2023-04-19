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
  size?: "md" | "lg"
}

export const BookCard = ({ book, size = "md"}: BookCardProps) => {
  const IMAGE_SIZES = {
    md: {
      width: 64,
      height: 94,
    },
    lg: {
      width: 108,
      height: 152,
    },
  }
  
  return (
    <RatingsDialog bookId={book?.id}>
      <BooksContainer>
          <Card>
            <Image
            src={book.cover_url} 
            alt="Capa" 
            width={IMAGE_SIZES[size].width} 
            height={IMAGE_SIZES[size].height}
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
