import { AnalyticsContainer, Avatar, Border, Content, Header, Informations } from '@/styles/pages/Analytics'
import { BookOpen, BookmarkSimple, Books, UserList } from 'phosphor-react';
import { ProfileData } from '../[id].page';

type ProfileDetailsProps = {
  profile: ProfileData
}

export const Analytics = ({ profile }: ProfileDetailsProps) => {
  console.log(profile)
  const memberSinceYear = new Date(profile.user.member_since).getFullYear();

  return (
    <AnalyticsContainer>
      <Border>
        <Header>
          <div>
            <Avatar src={profile.user.avatar_url} alt={profile.user.name} width={80} height={80}/>
            <span>
              {profile.user.name}
            </span>
          </div>
          <span>{memberSinceYear}</span>
        </Header>

        <Content>
          <Informations>
            <BookOpen size={40} />
            <div>
              <span>{profile.readPages}</span>
              <p>Pagínas lidas</p>
            </div>
          </Informations>

          <Informations>
            <Books size={40} />
            <div>
              <span>{profile.ratedBooks}</span>
              <p>Livros avaliados</p>
            </div>
          </Informations>

          <Informations>
            <UserList size={40} />
            <div>
              <span>{profile.readAuthors}</span>
              <p>Autores lidos</p>
            </div>
          </Informations>

          <Informations>
            <BookmarkSimple size={40} />
            <div>
              <span>{profile.mostReadCategory}</span>
              <p>Categoria mais lida</p>
            </div>
          </Informations>
        </Content>
      </Border>
    </AnalyticsContainer>
  )
}
