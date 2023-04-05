import { FindContainer, Form, Title } from '@/styles/pages/Find'
import { Binoculars } from "phosphor-react"
import { MagnifyingGlass } from "phosphor-react"
import { InputHTMLAttributes, ReactNode } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode
}

export const Find = ({ icon, ...props }: InputProps) => {
  return (
    <FindContainer>
      <Title>
        <Binoculars size={40} />
        <span>Explorar</span>
      </Title>
      <Form>
        <input {...props} />
        <button>
          <MagnifyingGlass size={24}/>
        </button>
      </Form>
    </FindContainer>
  )
}
