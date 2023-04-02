import { Content, PerfilContainer } from "@/styles/pages/Perfil";
import { SideBar } from "../../components/Sidebar";
import { MyBooks } from "./components/MyBooks";

export default function Perfil() {
  return (
    <PerfilContainer>
      <SideBar />
      <Content>
        <MyBooks />
      </Content>
    </PerfilContainer>
  )
}