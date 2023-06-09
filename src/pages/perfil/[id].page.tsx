import { api } from "@/lib/axios"
import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"
import { NextPageWithLayout } from "../_app.page"
import { useRouter } from "next/router"
import { ReactElement } from "react"
import { DefaultLayout } from "@/layouts/DefaultLayout"
import { PerfilContainer, Content, ProfilePageContainer } from "@/styles/pages/Perfil"
import { MyBooks, ProfileRating } from "./components/MyBooks"
import { Analytics } from "./components/Analytics"

export type ProfileData  = {
  ratings: ProfileRating[]
  user: {
    avatar_url: string
    name: string
    member_since: string
  }
  readPages: number
  ratedBooks: number
  readAuthors: number
  mostReadCategory?: string
}

export const ProfilePage: NextPageWithLayout = () => {
  const router = useRouter();
  const userId = router.query.id as string;

  const { data: session } = useSession();

  const isOwnProfile = session?.user?.id === userId;

  const { data: profile } = useQuery<ProfileData>(["profile", userId], async () => {
    const { data } = await api.get(`/perfil/${userId}`)
    console.log(data)
    return data?.profile ?? {}
  }, {
    enabled: !!userId
  })

  return (
    <ProfilePageContainer>
      <title>Perfil | BookWise</title>
      {!!profile? (
        <>
        <PerfilContainer>
          <Content>
            <MyBooks isOwnProfile={isOwnProfile} ratings={profile?.ratings} />
            <Analytics profile={profile} key={profile?.user.name}/>
          </Content>
        </PerfilContainer>
        </>
      ) : (
        <h1>Carregando...</h1>
      )}
    </ProfilePageContainer>
  )

}

ProfilePage.getLayout = (page: ReactElement) => {
  return (
    <DefaultLayout title="Perfil">
      {page}
    </DefaultLayout>
  )
}

export default ProfilePage