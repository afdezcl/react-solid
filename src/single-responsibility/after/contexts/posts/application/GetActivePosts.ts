import { Post } from '../domain/Post'
import { PostRepository } from '../domain/PostRepository'

export class GetActivePostsUseCase {
  async execute(postRepository: PostRepository) {
    const data = await postRepository.getPosts()

    const posts = data.map((post: Post) => {
      return new Post(
        post.id,
        post.title,
        post.content,
        new Date(post.publishedAt)
      )
    })

    const activePosts = posts.filter((post: Post) => post.isActive())

    return activePosts
  }
}
