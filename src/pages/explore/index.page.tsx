import { Content, ExploreContainer } from "@/styles/pages/explore";
import { SideBar } from "../../components/Sidebar";
import { ExploreBooks } from "./components/ExploreBooks";
import { Categories } from "./components/Categories";
import { Find } from "./components/Find";

export default function explore() {
  return (
    <ExploreContainer>
      <SideBar />
      <Content>
        <Find />
        <Categories />
        <ExploreBooks />
      </Content>
    </ExploreContainer>
  )
}