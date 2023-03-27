import { Content, ExploreContainer } from "@/styles/pages/explore";
import { SideBar } from "../../components/Sidebar";
import { Books } from "./components/Books";
import { Categories } from "./components/Categories";
import { Find } from "./components/Find";

export default function explore() {
  return (
    <ExploreContainer>
      <SideBar />
      <Content>
        <Find />
        <Categories />
        <Books />
      </Content>
    </ExploreContainer>
  )
}