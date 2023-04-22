import * as Dialog from "@radix-ui/react-dialog";
import { CartClose, DialogOpenWhenMobileOptionActivated, Login, MobileVersion, NavItemContainer, Options, SideBarContainer, WebVersion } from "@/styles/pages/SideBar"
import Image from "next/image"
import Logo from '../assets/Logo.png'
import { ChartLineUp, TextAlignJustify, User, X } from "phosphor-react"
import { useRouter } from "next/router"
import { Fragment, useMemo } from "react"
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
      <DialogOpenWhenMobileOptionActivated>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <TextAlignJustify size={30} color="#fff" />
          </Dialog.Trigger>
          <Dialog.Portal>
            <MobileVersion>
              <div>
                <CartClose>
                  <X size={24} weight="bold" />
                </CartClose>
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
            </MobileVersion>
          </Dialog.Portal>
        </Dialog.Root>
      </DialogOpenWhenMobileOptionActivated>

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