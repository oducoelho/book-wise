import { BooksContainer, Card, Informations, SubTitle, Title } from '@/styles/pages/Books'
import Image from 'next/image'
import React from 'react'
import Ilustração from '../../../assets/o-hobbit.png'
import Start from '../../../assets/Rating.png'

export const Books = () => {
  return (
    <BooksContainer>
      <Card>
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
      </Card>

      <Card>
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
      </Card>

      <Card>
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
      </Card>

      <Card>
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
      </Card>

      <Card>
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
      </Card>

      <Card>
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
      </Card>

      <Card>
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
      </Card>

      <Card>
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
      </Card>

      <Card>
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
      </Card>
    </BooksContainer>
  )
}
