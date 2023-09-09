import { Card } from '../Card'

interface ImageCardProps {
  title: string
  imageURL: string
}

export function ImageCard({ title, imageURL }: ImageCardProps) {
  return ( 
    <Card title={title}>
      <img src={imageURL} />
    </Card>
  )
}
