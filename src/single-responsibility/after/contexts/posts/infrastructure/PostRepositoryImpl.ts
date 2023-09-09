import { Post } from '../domain/Post'
import { PostRepository } from '../domain/PostRepository'

export class PostRepositoryImpl implements PostRepository {
  async getPosts(): Promise<Post[]> {
    const response = await fetch('/some-api')

    const data = await response.json()

    return data
  }
}
