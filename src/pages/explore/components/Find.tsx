import { FindContainer, Form, Title } from '@/styles/pages/Find'
import { Binoculars } from "phosphor-react"
import { MagnifyingGlass } from "phosphor-react"

export const Find = () => {
  return (
    <FindContainer>
      <Title>
        <Binoculars size={40} />
        <span>Explorar</span>
      </Title>
      <Form>
        <input 
          type="text" 
          placeholder='Buscar livro ou autor' 
        />
        <button>
          <MagnifyingGlass size={24}/>
        </button>
      </Form>
    </FindContainer>
  )
}
