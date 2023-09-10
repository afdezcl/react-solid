import { PostContent } from "./components/PostContent"
import { PostDate } from "./components/PostDate"
import { PostTitle } from "./components/PostTItle"

interface Post {
  title: string
  author: string
  content: string
  date: Date
}

export function Post({ post }: { post: Post }) {
  return (
    <div>
      <PostTitle title={post.title} author={post.author} />
      <PostContent content={post.content} />
      <PostDate date={post.date} />
    </div>
  ) 
}
