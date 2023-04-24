import { Content, InitialPageContainer } from "@/styles/pages/initialPage";
import { PopularBooks } from "./components/PopularBooks/PopularBooks";
import { Posts } from "./components/Posts";
import { SideBar } from "../../components/Sidebar";

export default function initialPage() {
  return (
    <InitialPageContainer>
      <title>Início | BookWise</title>
      <SideBar />
      <Content>
        <Posts />
        <PopularBooks />
      </Content>
    </InitialPageContainer>
  )
}