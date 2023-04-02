import { Content, Form, Header, Picture, Post, PostContainer, Resume, Stars, Text } from "@/styles/pages/MyBooks"
import Image from "next/image"
import { MagnifyingGlass, User } from "phosphor-react"
import Rating from "../../../assets/Rating.png"
import BookPoster from "../../../assets/o-hobbit.png"

export const MyBooks = () => {
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
        />

        <button>
          <MagnifyingGlass size={24}/>
        </button>
      </Form>
      <p>Há 2 dias</p>
    </Header>
    <Post>
      <Content>
        <Picture>
          <Image 
            src={BookPoster} 
            alt=""
            width={100}
          />
        </Picture>
        <Resume>
          <div>
            <h1>O Hobbit</h1>
            <p>J.R.R Tolkien</p>
          </div>
          <Stars>
            <Image src={Rating} alt="" />
          </Stars>
        </Resume>
      </Content>
      <Text>
        <span>
          Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh... ver mais
        </span>
      </Text>
    </Post>
  </PostContainer>
  )
}
