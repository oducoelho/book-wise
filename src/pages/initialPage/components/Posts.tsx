import { Content, Header, Picture, Post, PostContainer, Resume, Stars, User } from "@/styles/pages/Posts"
import Image from "next/image"
import Avatar from "../../../assets/Avatar.png"
import Rating from "../../../assets/Rating.png"
import BookPoster from "../../../assets/o-hobbit.png"

export const Posts = () => {
  return (
  <PostContainer>
    <Header>
      <h1>Inicio</h1>
      <p>Avaliação mais recente</p>
    </Header>
    <Post>
      <User>
        <div>
          <Image src={Avatar} alt="" />
          <div>
            <span>Jaxson Dias</span>
            <strong>Hoje</strong>
          </div>
        </div>
        <Stars>
          <Image src={Rating} alt="" />
        </Stars>
      </User>
      <Content>
        <Picture>
          <Image 
            src={BookPoster} 
            alt=""
            width={150}
          />
        </Picture>
        <Resume>
          <h1>O Hobbit</h1>
          <p>J.R.R Tolkien</p>
          <span>
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh... ver mais
          </span>
        </Resume>
      </Content>
    </Post>


    <Post>
      <User>
        <div>
          <Image src={Avatar} alt="" />
          <div>
            <span>Jaxson Dias</span>
            <strong>Hoje</strong>
          </div>
        </div>
        <Stars>
          <Image src={Rating} alt="" />
        </Stars>
      </User>
      <Content>
        <Picture>
          <Image 
            src={BookPoster} 
            alt=""
            width={150}
          />
        </Picture>
        <Resume>
          <h1>O Hobbit</h1>
          <p>J.R.R Tolkien</p>
          <span>
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh... ver mais
          </span>
        </Resume>
      </Content>
    </Post>


    <Post>
      <User>
        <div>
          <Image src={Avatar} alt="" />
          <div>
            <span>Jaxson Dias</span>
            <strong>Hoje</strong>
          </div>
        </div>
        <Stars>
          <Image src={Rating} alt="" />
        </Stars>
      </User>
      <Content>
        <Picture>
          <Image 
            src={BookPoster} 
            alt=""
            width={150}
          />
        </Picture>
        <Resume>
          <h1>O Hobbit</h1>
          <p>J.R.R Tolkien</p>
          <span>
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh... ver mais
          </span>
        </Resume>
      </Content>
    </Post>
  </PostContainer>
  )
}