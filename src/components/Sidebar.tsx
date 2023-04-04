import { Avatar, Login, LoginContainer, NavItemContainer, Options, SideBarContainer } from "@/styles/pages/SideBar"
import Image from "next/image"
import Logo from '../assets/Logo.png' 
import { ChartLineUp, SignOut, User } from "phosphor-react"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { Binoculars } from "phosphor-react"
import { signOut, useSession } from "next-auth/react"
import { DialogLogin } from "./DialogLogin"


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
  const { data: session } = useSession();
  const router = useRouter();

  const user = session?.user;


  console.log(session)

  const navItems = useMemo(() => {
    if (session) {
      return NAV_ITEMS.concat({
        label: 'Perfil',
        href: `/perfil/${session.user.id}`,
        icon: <User size={24} />
      })
    }

    return NAV_ITEMS;
  }, [session])
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
            <span>
              <DialogLogin />
            </span>
          )
          :
          (
            <LoginContainer>
              <div>
                <Avatar src={user.avatar_url} alt={user.name} width={80} height={80}/>
              </div>
              <span>
                {user.name}
              </span>
              <div>
                <SignOut color="#F75A68" size={20} onClick={() => signOut()} />
              </div>
            </LoginContainer>
          )
        }
      </Login>
    </SideBarContainer>
  )
}