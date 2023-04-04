import Head from "next/head"
import { ReactNode } from "react"
import { SideBar } from "@/components/Sidebar"
import { Container, Content } from "@/styles/pages/DefaultLayout"

type DefaultLayoutProps = {
  children: ReactNode
  title: string;
}

export const DefaultLayout = ({ title, children }: DefaultLayoutProps) => {
  return (
    <Container>
      <Head>
        <title>{`${title} | BookWise`}</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
      </Head>

      <SideBar />
      <Content>
        {children}
      </Content>
    </Container>
  )
}