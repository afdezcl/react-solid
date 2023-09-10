import { useEffect, useState } from "react"

export interface Post {
  id: number
  title: string
  body: string
}

export interface PostsRepository {
  getPosts(): Promise<Post[]>
}

export const usePosts = (repository: PostsRepository) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)

    repository.getPosts().then(json => setPosts(json))
    
    setLoading(false)
  }, [])

  return { posts, loading }
}

