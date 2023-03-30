import { Login, NavItemContainer, Options, SideBarContainer } from "@/styles/pages/SideBar"
import Image from "next/image"
import Logo from '../assets/Logo.png' 
import { ChartLineUp, SignOut } from "phosphor-react"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { Binoculars } from "phosphor-react"
import { signOut, useSession } from "next-auth/react"


const NAV_ITEMS = [
  {
    label: 'Início',
    href: '/initialPage',
    icon: <ChartLineUp size={24} />
  },
  {
    label: 'Explorar',
    href: '/explore',
    icon: <Binoculars size={24} />
  }
]

export const SideBar = () => {
  const { data: session } = useSession()
  const router = useRouter();

  const user = session?.user;

  console.log(user)

  const navItems = useMemo(() => {
    return NAV_ITEMS;
  }, [])
  return (
    <SideBarContainer>
      <div>
        <Image src={Logo} alt=""/>
        <Options>
          {navItems.map(({ href, label, icon }) => (
            <NavItemContainer href={href} key={label} active={router.asPath === href}>
              {icon}
              {label}
            </NavItemContainer>
          ))}
        </Options>
      </div>
      <Login>
        {
          !user  
          ?
          (
            <span 
              onClick={() => router.push("/")} 
            >
              Fazer login
            </span>
          )
          : 
          (
            <div>
              <span>
                {user?.name}
              </span>
              <SignOut color="#F75A68" size={20} onClick={() => signOut()} />
            </div>
          )
        }
      </Login>
    </SideBarContainer>
  )
}