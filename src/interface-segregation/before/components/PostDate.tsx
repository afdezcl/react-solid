import { Post } from '../InterfaceSegregationBefore'

export function PostDate({post }: { post: Post }) {
  return <p>{post.date.toDateString()}</p>;
}
