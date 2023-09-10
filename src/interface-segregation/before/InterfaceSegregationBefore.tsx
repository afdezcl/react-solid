import { PostContent } from './components/PostContent'
import { PostDate } from './components/PostDate'
import { PostTitle } from './components/PostTitle'

export interface Post {
  title: string
  author: string
  content: string
  date: Date
}

export function Post ({ post }: { post: Post }) {
  return (
    <div>
      <PostTitle post={post} />
      <PostContent post={post} />
      <PostDate post={post} />
    </div>
  )
}

