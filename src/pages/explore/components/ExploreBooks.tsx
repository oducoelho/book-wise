import { BookCard, BookWithAvgRating } from "@/components/BookCard"
import { useQuery } from "@tanstack/react-query"
import { api } from "@/lib/axios"
import { Category } from "@prisma/client"
import { useState } from "react"
import { BooksContainer } from "@/styles/pages/Books"
export const ExploreBooks = () => {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const { data: categories } = useQuery<Category[]>(["categories"], async () => {
    const { data } = await api.get("/books/categories");
    return data?.categories ?? []
  })

  const { data: books } = useQuery<BookWithAvgRating[]>(["books", selectedCategory], async () => {
    const { data } = await api.get("/books", {
      params: {
        category: selectedCategory
      }
    });
    return data?.books ?? []
  })

  const filteredBooks = books?.filter((book) => {
    return book.name.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <BooksContainer>
      {filteredBooks?.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
      {categories?.map((category, i) => (
          <div>
            {category?.name}
          </div>
      ))}

      {/*<Card>
        <Image 
          src={Ilustração} 
          alt="Capa" 
          width={108}
        />
        <Informations>
          <div>
            <Title>O Hobbit</Title>
            <SubTitle>J.R.R. Tolkien</SubTitle>
          </div>
          <div>
            <Image src={Start} alt="" />  
          </div>
        </Informations>
      </Card>*/}
    </BooksContainer>
  )
}
