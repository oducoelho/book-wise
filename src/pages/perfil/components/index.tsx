import { Content, PerfilContainer } from "@/styles/pages/Perfil";
import { MyBooks } from "./MyBooks";
import { Analytics } from "./Analytics";

export default function Perfil() {
  return (
    <PerfilContainer>
      <Content>
        <MyBooks />
        <Analytics />
      </Content>
    </PerfilContainer>
  )
}