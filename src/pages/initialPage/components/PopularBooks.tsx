import Image from "next/image"
import Rating from "../../../assets/Rating.png"
import BookPoster from "../../../assets/o-hobbit.png"
import { Content, Header, Picture, PopularBooksContainer, Post, Resume } from "@/styles/pages/popularbooks"

export const PopularBooks = () => {
  return (
  <PopularBooksContainer>
    <Header>
      <span>Livros populares</span>
      <p>Ver todos</p>
    </Header>
    <Post>
      <Content>
        <Picture>
          <Image 
            src={BookPoster} 
            alt=""
            width={80}
          />
        </Picture>
        <Resume>
          <div>
            <h1>O Hobbit</h1>
            <p>J.R.R Tolkien</p>
          </div>
          <div>
            <Image src={Rating} alt="" />
          </div>
        </Resume>
      </Content>
    </Post>

    <Post>
      <Content>
        <Picture>
          <Image 
            src={BookPoster} 
            alt=""
            width={80}
          />
        </Picture>
        <Resume>
          <div>
            <h1>O Hobbit</h1>
            <p>J.R.R Tolkien</p>
          </div>
          <div>
            <Image src={Rating} alt="" />
          </div>
        </Resume>
      </Content>
    </Post>

    <Post>
      <Content>
        <Picture>
          <Image 
            src={BookPoster} 
            alt=""
            width={80}
          />
        </Picture>
        <Resume>
          <div>
            <h1>O Hobbit</h1>
            <p>J.R.R Tolkien</p>
          </div>
          <div>
            <Image src={Rating} alt="" />
          </div>
        </Resume>
      </Content>
    </Post>



    <Post>
      <Content>
        <Picture>
          <Image 
            src={BookPoster} 
            alt=""
            width={80}
          />
        </Picture>
        <Resume>
          <div>
            <h1>O Hobbit</h1>
            <p>J.R.R Tolkien</p>
          </div>
          <div>
            <Image src={Rating} alt="" />
          </div>
        </Resume>
      </Content>
    </Post>
  </PopularBooksContainer>
  )
}