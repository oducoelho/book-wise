import { Content, HomeContainer, HomeImage, Login, LoginOption } from "@/styles/pages/Home"
import WallPaper from '../assets/HomeCover.png'
import Google from '../assets/logos_google-icon.png'
import GitHub from '../assets/akar-icons_github-fill.png'
import Visitante from '../assets/RocketLaunch.png'
import Image from "next/image"

export default function Home() {
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
        <LoginOption>
          <Image src={Google} alt="" />
          <span>Entrar com o Google</span>
        </LoginOption>
        <LoginOption>
          <Image src={GitHub} alt="" />
          <span>Entrar com o Google</span>
        </LoginOption>
        <LoginOption>
          <Image src={Visitante} alt="" />
          <span>Entrar com o Google</span>
        </LoginOption>

      </Login>
    </HomeContainer>
  )
}
