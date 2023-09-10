import { Post } from '../InterfaceSegregationBefore'

export function PostTitle ({ post }: { post: Post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.author}</h2>
    </div>
  )
}
