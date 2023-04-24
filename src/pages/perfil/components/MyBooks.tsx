import { ProfileRatingCard } from "@/components/ProfileRatingCard"
import { Form, Header, PostContainer } from "@/styles/pages/MyBooks"
import { Book, CategoriesOnBooks, Category, Rating } from "@prisma/client"
import { MagnifyingGlass, User } from "phosphor-react"
import { useMemo, useState } from "react"

export type ProfileRating = Rating & {
  book: Book & {
    categories: CategoriesOnBooks & {
      category: Category
    }[]
  }
}

type ProfileRatingsProps = {
  ratings: ProfileRating[]
  isOwnProfile?: boolean
}

export const MyBooks = ({ ratings, isOwnProfile }: ProfileRatingsProps) => {
  const [search, setSearch] = useState("")
  
  const filteredRatings = useMemo(() => {
    return ratings.filter(rating => {
      return rating.book.name.toLowerCase().includes(search.toLowerCase())
    })
  }, [ratings, search])

  return (
    <PostContainer>
      <Header>
        <div>
          <User size={30} />
          <h1>Perfil</h1>
        </div>
        <Form>
          <input 
            type="text" 
            placeholder="Buscar livro avaliado" 
            value={search}
            onChange={({ target}) => setSearch(target.value)}
          />

          <button>
            <MagnifyingGlass size={24}/>
          </button>
        </Form>
      </Header>
      <div>
        {filteredRatings.map(rating => (
          <ProfileRatingCard key={rating.id} rating={rating} />
        ))}
        {filteredRatings.length <= 0 && (
          <>
            <span>
              {search ? "Nenhum resultado encontrado" : "Nenhuma avaliação encontrada"}
            </span>
          </>
        )}
        
      </div>
  </PostContainer>
  )
}
