import { Post } from '../contexts/posts/domain/Post'

export function PostItem({ post }: { post: Post }) {
  return (
    <li>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </li>
  )
}
