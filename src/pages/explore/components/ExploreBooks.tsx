import { BookCard, BookWithAvgRating } from "@/components/BookCard"
import { useQuery } from "@tanstack/react-query"
import { api } from "@/lib/axios"
import { Category } from "@prisma/client"
import { useState } from "react"
import { BooksContainer, BooksGrid, TagsContainer } from "@/styles/pages/Books"
import { MagnifyingGlass } from "phosphor-react"
import { Find } from "./Find"
import { Tag } from "./Tag"

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
      <Find
        placeholder="Buscar livro ou autor"
        icon={<MagnifyingGlass size={20} />}
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />

      <TagsContainer>
        <Tag active={selectedCategory === null} onClick={() => setSelectedCategory(null)}>
          Tudo
        </Tag>
        {categories?.map((category, i) => (
          <Tag key={category?.id} active={selectedCategory === category.id} onClick={() => setSelectedCategory(category.id)}>
            {category?.name}
          </Tag>
        ))}
      </TagsContainer>

      <BooksGrid>
        {filteredBooks?.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </BooksGrid>
    </BooksContainer>
  )
}
