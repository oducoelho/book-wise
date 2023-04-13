import { RatingStars } from "@/pages/initialPage/components/PopularBooks/RatingStars"
import { Avatar } from "@/styles/pages/LoginDialog"
import { Container, ActionsContainer, FormContainer, UserDetails } from "@/styles/pages/RatingForm"
import { useSession } from "next-auth/react"
import { FormEvent, useState } from "react"
import { ActionIcon } from "./ActionIcon"
import { Check, X } from "phosphor-react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "@/lib/axios"

type RatingFormProps = {
  onCancel: () => void
  bookId: string
}

export const RatingForm = ({ bookId, onCancel }: RatingFormProps) => {
  const { data: session } = useSession()

  const user = session?.user
  
  const [description, setDescription ] = useState("")
  const [currentRate, setCurrentRate] = useState(0)

  const queryClient =  useQueryClient()

  const { mutateAsync: handleRate } = useMutation(async () => {
    await api.post(`/books/${bookId}/rate`, {
      description,
      rate: currentRate
    })
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['book', bookId])
      queryClient.invalidateQueries(['books'])
      onCancel() 
    }
  })

  const submitDisabled = !description.trim() || !currentRate

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (submitDisabled) return
    await handleRate()
  }

  return (
    <Container>
      {user && (
        <UserDetails>
          <section>
            <Avatar alt={user.name} src={user.avatar_url} />
            <h1>{user.name}</h1>
          </section>

          <RatingStars size="lg" rating={currentRate} setRating={setCurrentRate} />
        </UserDetails>
      )}
      <FormContainer onSubmit={handleSubmit}>
        <textarea
          placeholder="Escreva sua avaliação"
          maxLength={450}
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
        <ActionsContainer>
          <ActionIcon type="button" onClick={onCancel} iconColor="purple100" icon={<X />} />
          <ActionIcon iconColor="green100" icon={<Check />} disabled={submitDisabled}/>
        </ActionsContainer>
      </FormContainer>
    </Container>
  )
}
