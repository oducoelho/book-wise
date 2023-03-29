import { Content, HomeContainer, HomeImage, Login, LoginOption } from "@/styles/pages/Home"
import WallPaper from '../assets/HomeCover.png'
import Google from '../assets/logos_google-icon.png'
import GitHub from '../assets/akar-icons_github-fill.png'
import VisitanteIcon from '../assets/RocketLaunch.png'
import Image from "next/image"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter();
  return (
    <HomeContainer>
      <HomeImage>
        <Image src={WallPaper} alt="" />
      </HomeImage>
      <Login>
        <Content>
          <h1>Boas Vindas!</h1>
          <p>Faça login ou assece como visitante</p>
        </Content>
        <LoginOption onClick={() => signIn('google')}>
          <Image src={Google} alt="" />
          <button>Entrar com o Google</button>
        </LoginOption>
        <LoginOption>
          <Image src={GitHub} alt="" />
          <button>Entrar com o GitHub</button>
        </LoginOption>
        <LoginOption onClick={() => router.push("/initialPage")}>
          <Image src={VisitanteIcon} alt="" />
          <button>Entrar com o Visitante</button>
        </LoginOption>

      </Login>
    </HomeContainer>
  )
}
