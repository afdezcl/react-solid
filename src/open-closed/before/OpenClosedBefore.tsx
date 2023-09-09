import { Card } from './Card'

export function OpenClosedBefore () {
  return (
    <div className='flex flex-col'>
      <Card title="My Video" type="video" content="https://www.youtube.com/watch?v=9bZkp7q19f0" />
      <Card title="My Video" type="image" content="https://google.com/image.png" />
      <Card title="My Video" type="normal" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
    </div>
  )
}