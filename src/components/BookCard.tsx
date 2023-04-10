import { Book } from "@prisma/client"
import Image from "next/image"
import { BooksContainer, Card, Informations, SubTitle, Title } from "@/styles/pages/BookCard"

export type BookWithAvgRating = Book & {
  avgRating: number
  alreadyRead: boolean
}

type BookCardProps = {
  book: BookWithAvgRating
}

export const BookCard = ({ book }: BookCardProps) => {
  
  
  return (
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
        </Informations>
      </Card>
    </BooksContainer>
  )
}
