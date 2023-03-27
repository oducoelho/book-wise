import { Categorie, CategoriesContainer } from "@/styles/pages/Categories"

const categories = [
  {
    id: '1',
    name: 'Tudo'
  },
  {
    id: '2',
    name: 'Computação'
  },
  {
    id: '3',
    name: 'Educação'
  },
  {
    id: '4',
    name: 'Fantasia'
  },
  {
    id: '5',
    name: 'Ficção cientifica'
  },
  {
    id: '6',
    name: 'Horror'
  },

]

export const Categories = () => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <Categorie>
          {category.name}
        </Categorie>
      ))}
    </CategoriesContainer>
  )
}
