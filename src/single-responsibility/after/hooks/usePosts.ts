import { useState, useEffect } from 'react'
import { GetActivePostsUseCase } from '../contexts/posts/application/GetActivePosts'
import { Post } from '../contexts/posts/domain/Post'
import { PostRepositoryImpl } from '../contexts/posts/infrastructure/PostRepositoryImpl'

export const useActivePosts = () => {
  const [activePosts, setActivePosts] = useState<Post[]>([])

  useEffect(() => {
    const getActivePostsUseCase = new GetActivePostsUseCase()
    const postRepository = new PostRepositoryImpl()

    getActivePostsUseCase.execute(postRepository).then(posts => setActivePosts(posts))
  }, [])

  return { activePosts }
}