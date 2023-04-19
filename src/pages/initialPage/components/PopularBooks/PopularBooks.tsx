import { Header, PopularBooksContainer, } from "@/styles/pages/popularbooks"
import { useQuery } from "@tanstack/react-query"
import { BookCard, BookWithAvgRating } from "@/components/BookCard"
import { api } from "@/lib/axios"
import { Link } from "@/components/Link"

export const PopularBooks = () => {
  const { data: popularBooks } = useQuery<BookWithAvgRating[]>(["popular-books"], async () => {
    const { data } = await api.get("/books/popular");
    return data?.books ?? []
  })

  return (
  <PopularBooksContainer>
    <Header>
      <span>Livros populares</span>
      <p>
        <Link href="/explore" text="Ver todos" />
      </p>
    </Header>
    <section>
      {popularBooks?.map(book => (
          <BookCard key={`popular-${book.id}`} book={book} size="md" />
      ))}
    </section>
  </PopularBooksContainer>
  )
}