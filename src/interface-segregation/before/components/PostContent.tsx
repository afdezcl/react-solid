import { Post } from '../InterfaceSegregationBefore'

export function PostContent({ post }: { post: Post }) {
  return <p>{post.content}</p>
}
