import Image from 'next/image'
import { Container, Content, Picture, Post, Resume, Stars, User } from './style'
import React from 'react'

export const Complet = () => {
  return (
    <Container>
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
    </Container>
  )
}
