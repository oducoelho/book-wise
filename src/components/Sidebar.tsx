import { Login, MobileIcon, MobileVersion, NavItemContainer, Options, SideBarContainer, WebVersion } from "@/styles/pages/SideBar"
import Image from "next/image"
import Logo from '../assets/Logo.png'
import { ChartLineUp, TextAlignJustify, User, X } from "phosphor-react"
import { useRouter } from "next/router"
import { Fragment, useMemo, useState } from "react"
import { Binoculars } from "phosphor-react"
import { useSession } from "next-auth/react"
import { DialogLogin } from "./DialogLogin"
import { LoginDialog } from "./LoginDialog"


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
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  const { status, data: session } = useSession();

  const router = useRouter();

  const isAuthenticated = status === "authenticated"

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

  const RatingWrapper = isAuthenticated ? Fragment : DialogLogin
  return (
    <SideBarContainer>
      <MobileIcon onClick={() => setMenuIsVisible(!menuIsVisible)}>
        {menuIsVisible ? <X size={30} color="#ffffff" /> : <TextAlignJustify size={30} color="#ffffff" />}
      </MobileIcon>

      {menuIsVisible && (
        <MobileVersion>
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
                <RatingWrapper>
                  <h3>Login</h3>
                </RatingWrapper>
              </span>
            )
            :
            (
              <LoginDialog />
            )
          }
        </Login>
        </MobileVersion>
      )}
      <WebVersion>
        <div>
          <Image src={Logo} alt="" />
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
                <RatingWrapper>
                  <h3>Login</h3>
                </RatingWrapper>
              </span>
            )
            :
            (
              <LoginDialog />
            )
          }
        </Login>
      </WebVersion>
    </SideBarContainer>
  )
}