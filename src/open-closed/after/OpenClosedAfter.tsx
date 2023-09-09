import { Card } from './Card'
import { ImageCard } from './components/ImageCard'
import { VideoCard } from './components/VideoCard'

export function OpenClosedAfter () {
  return (
    <div className='flex flex-col'>
      <VideoCard title="My Video" videoURL="https://www.youtube.com/watch?v=9bZkp7q19f0" />
      <ImageCard title="My Image" imageURL="https://google.com/image.png" />
      <Card title="My Image">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </Card>
    </div>
  )
}
