interface PostTitleProps {
  title: string
  author: string
}

export function PostTitle({ title, author }: PostTitleProps) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
    </div>
  )
}
