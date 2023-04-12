import { Container } from "@/styles/pages/RatingStars"
import { ComponentProps } from "@stitches/react"
import { Star } from "phosphor-react"
import { useState } from "react"

type RatingStarProps = ComponentProps<typeof Container> & {
  rating: number
  size?: "sm" | "md" | "lg"
  setRating?: (rating: number) => void
}

export const RatingStars = ({ rating, size = "sm", setRating, ...props}: RatingStarProps) => {
  const [previewValue, setPreviewValue] = useState(0)
  const isEditable = !!setRating

  const ratingValue = isEditable ? previewValue : rating

  const handleMouseEnter = (value: number) => {
    if(isEditable) setPreviewValue(value)
  }
  const handleMouseLeave = () => {
    if(isEditable) setPreviewValue(rating)
  }
  const handleSetValue = () => {
    if(isEditable) setPreviewValue(ratingValue)
  }

  return (
  <Container css={isEditable ? { cursor: "pointer" } : undefined} size={size} {...props}>
    {Array.from({ length: 5}).map((_, index) => (
      <Star
        key={`star-${index}`}
        weight={(index + 1) <= ratingValue ? "fill" : "regular"}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        onClick={handleSetValue}
      />
    ))}
  </Container>
  )
}