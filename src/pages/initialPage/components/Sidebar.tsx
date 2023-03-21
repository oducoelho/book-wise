import { Login, Options, SideBarContainer } from "@/styles/pages/SideBar"
import Image from "next/image"
import Logo from '../../../assets/Logo.png' 
import Inicio from '../../../assets/Inicio.png' 
import Explorar from '../../../assets/Explorar.png' 

export const SideBar = () => {
  return (
    <SideBarContainer>
      <div>
        <Image src={Logo} alt=""/>
        <Options>
          <div>
            <Image src={Inicio} alt=""/>        
          </div>
          <div>
            <Image src={Explorar} alt=""/>
          </div>
        </Options>
      </div>
      <Login>
        <span>Fazer login</span>
      </Login>
    </SideBarContainer>
  )
}