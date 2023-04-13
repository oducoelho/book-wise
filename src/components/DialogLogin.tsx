import * as Dialog from '@radix-ui/react-dialog';
import GitHub from '../assets/akar-icons_github-fill.png'
import Google from '../assets/logos_google-icon.png'
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { Cross2Icon } from '@radix-ui/react-icons';
import { 
  Button, 
  Content,
  DialogContent, 
  DialogOverlay, 
  IconButton, 
  Login, 
  LoginOption 
} from '@/styles/pages/DialogLogin';
import { ReactNode } from 'react';

type LoginDialogProps = {
  children: ReactNode
}

export const DialogLogin = ({ children }: LoginDialogProps) => {
  return (
    <Dialog.Root>
    <Dialog.Trigger asChild>
      <Button>{children}</Button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
      <Dialog.Close asChild>
        <IconButton aria-label="Close">
          <Cross2Icon />
        </IconButton>
      </Dialog.Close>
      <Login>
        <Content>
          <span>Faça Login!</span>
        </Content>
        <LoginOption onClick={() => signIn('google')}>
          <Image src={Google} alt="" />
          <button>Entrar com o Google</button>
        </LoginOption>
        <LoginOption onClick={() => signIn('github')}>
          <Image src={GitHub} alt="" />
          <button>Entrar com o GitHub</button>
        </LoginOption>
      </Login>
      </DialogContent>
    </Dialog.Portal>
  </Dialog.Root>
  )
}
