import { AnalyticsContainer, Avatar, Border, Content, Header, Informations } from '@/styles/pages/Analytics'
import { useSession } from 'next-auth/react';
import { BookOpen, BookmarkSimple, Books, UserList } from 'phosphor-react';
import React from 'react'

export const Analytics = () => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <AnalyticsContainer>
      <Border>
        <Header>
          <div>
            <Avatar src={user?.avatar_url} alt={user?.name} width={80} height={80}/>
            <span>
              {user?.name}
            </span>
          </div>
          <span>membro desde 2023</span>
        </Header>

        <Content>
          <Informations>
            <BookOpen size={40} />
            <div>
              <span>3853</span>
              <p>Pagínas lidas</p>
            </div>
          </Informations>

          <Informations>
            <Books size={40} />
            <div>
              <span>10</span>
              <p>Livros avaliados</p>
            </div>
          </Informations>

          <Informations>
            <UserList size={40} />
            <div>
              <span>8</span>
              <p>Autores lidos</p>
            </div>
          </Informations>

          <Informations>
            <BookmarkSimple size={40} />
            <div>
              <span>Computação</span>
              <p>Categoria mais lida</p>
            </div>
          </Informations>
        </Content>
      </Border>
    </AnalyticsContainer>
  )
}
