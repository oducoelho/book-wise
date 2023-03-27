import { ExploreContainer } from "@/styles/pages/explore";
import { useRouter } from "next/router";
import { SideBar } from "../../components/Sidebar";

export default function explore() {
  return (
    <ExploreContainer>
      <SideBar />
    </ExploreContainer>
  )
}