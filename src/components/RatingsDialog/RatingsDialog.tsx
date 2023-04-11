import { ReactNode, useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { BookContent, BookDetailsContainer, BookDetailsWrapper, BookImage, BookInfos, DialogClose, DialogContent, DialogOverlay } from '@/styles/pages/RatingsDialog';
import { BookOpen, BookmarkSimple, X } from 'phosphor-react';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/axios';
import { BookWithAvgRating } from '../BookCard';
import { CategoriesOnBooks, Category } from '@prisma/client';
import { BookInfo } from './BookInfo';

type BookDetails = BookWithAvgRating & {
  ratings: RatingWithAuthor[]
  categories: (CategoriesOnBooks & {
    category: Category
  })[]
}

type RatingsDialogProps = {
  bookId: string
  children: ReactNode
}

export const RatingsDialog = ({ bookId, children }: RatingsDialogProps) => {
  const [ open, setOpen] = useState(false)

  const router = useRouter()
  const paramBookId = router.query.book as string

  useEffect(() => {
    if(paramBookId === bookId) {
      setOpen(true)
    }
  }, [bookId, paramBookId])

  const { data: book } = useQuery<BookDetails>(['book', bookId], async () => {
    const { data } = await api.get(`/books/details/${bookId}`)
    return data.book ?? {}
  }, {
    enabled: open
  })

  const ratingsLength = book?.ratings.length ?? 0

  const categories = book?.categories.map(x => x.category.name)?.join(", ") ?? ""

  const onOpenChange = (open: boolean) => {
    if (open) {
      router.push(`/explore?book=${bookId}`, undefined, { shallow: true})
    } else {
      router.push(`/explore`, undefined, { shallow: true})
    }
    setOpen(open)
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange} >
    <Dialog.Trigger asChild>
      {children}
    </Dialog.Trigger>
    <Dialog.Portal>

      <DialogOverlay />
      <DialogContent>
        <DialogClose>
          <X size={24} />
        </DialogClose>
        {!book ? (
            <p>
              Carregando...
            </p>
          ) : (
            <>
              <BookDetailsWrapper>
                <BookDetailsContainer>
                  <BookImage width={171} height={242} alt={book.name} src={book.cover_url} />
                    <BookContent>
                      <div>
                        <h1>{book.name}</h1>
                        <p>{book?.author}</p>
                      </div>
                      <div>
                        <p>{ratingsLength} {ratingsLength === 1 ? "avaliação" : "avaliações"}</p>
                      </div>
                    </BookContent>
                </BookDetailsContainer>
                <BookInfos>
                  <BookInfo icon={<BookmarkSimple />} title="Categorias" info={categories} />
                  <BookInfo icon={<BookOpen />} title="Páginas" info={String(book.total_pages)} />
                </BookInfos>
              </BookDetailsWrapper>
            </>
          )
        }
      </DialogContent>
    </Dialog.Portal>
  </Dialog.Root>
  )
}
