import { InitialPageContainer } from "@/styles/pages/initialPage";
import { Posts } from "./components/Posts";
import { SideBar } from "./components/Sidebar";

export default function initialPage() {
  return (
    <InitialPageContainer>
      <SideBar />
      <Posts />
    </InitialPageContainer>
  )
}