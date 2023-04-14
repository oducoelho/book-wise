import { Content, Header, Picture, Post, PostContainer, Resume, Stars, User } from "@/styles/pages/Posts"
import { ChartLineUp } from "phosphor-react"
import { LatestsRating } from "@/components/LatestsRating"

export const Posts = () => {
  return (
  <PostContainer>
    <Header>
      <div>
        <ChartLineUp  size={30} />
        <h1>Inicio</h1>
      </div>
    </Header>
    <LatestsRating />
  </PostContainer>
  )
}