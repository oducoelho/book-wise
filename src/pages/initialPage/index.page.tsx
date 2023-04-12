import { Content, InitialPageContainer } from "@/styles/pages/initialPage";
import { PopularBooks } from "./components/PopularBooks/PopularBooks";
import { Posts } from "./components/Posts";
import { SideBar } from "../../components/Sidebar";

export default function initialPage() {
  return (
    <InitialPageContainer>
      <SideBar />
      <Content>
        <Posts />
        <PopularBooks />
      </Content>
    </InitialPageContainer>
  )
}