interface CardProps {
  title: string
  type: string
  content: string
}

export function Card({ title, type, content }: CardProps) {
  return (
    <div className="card">
      <h1>{title}</h1>
      {
        type === 'video' ? <div className='flex'><video src={content} /></div>
        : type === 'image' ? <img src={content} />
        : <p>{content}</p>
      }
    </div>
  )
}
