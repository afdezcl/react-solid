import { Post } from './Post'

export interface PostRepository {
  getPosts(): Promise<Post[]>
}
