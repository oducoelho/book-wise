import { BookCard, BookWithAvgRating } from '@/components/BookCard'
import { api } from '@/lib/axios'
import { BooksContainer } from '@/styles/pages/Books'
import { useQuery } from '@tanstack/react-query'
//import Image from 'next/image'
import React, { useState } from 'react'
//import Ilustração from '../../../assets/o-hobbit.png'
//import Start from '../../../assets/Rating.png'

export const Books = () => {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

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
