import { useEffect, useState } from "react"

export interface Post {
  id: number
  title: string
  body: string
}

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
    
    setLoading(false)
  }, [])

  return { posts, loading }
}

