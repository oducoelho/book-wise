import { Content, ExploreContainer } from "@/styles/pages/explore";
import { SideBar } from "../../components/Sidebar";
import { ExploreBooks } from "./components/ExploreBooks";

export default function explore() {
  return (
    <ExploreContainer>
      <SideBar />
      <Content>
        <ExploreBooks />
      </Content>
    </ExploreContainer>
  )
}