import { Card } from '../Card'

interface VideoCardProps {
  title: string
  videoURL: string
}

export function VideoCard({ title, videoURL }: VideoCardProps) {
  return ( 
    <Card title={title}>
      <div className='flex'>
        <video src={videoURL} />  
      </div>
    </Card>
  )
}
