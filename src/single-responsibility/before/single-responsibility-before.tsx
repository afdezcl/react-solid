import { useState, useEffect } from 'react'

interface Post {
  id: number
  title: string
  content: string
  publishedAt: Date
}

export function SingleResponsibilityBefore() {
  const [posts, setPosts] = useState<Post[]>([])
  
  useEffect(() => {
    const loadPosts = async () => {  
      const response = await fetch('/some-api')
      const data = await response.json()
      setPosts(data)
    }
    loadPosts()
  }, [])
  
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  return (
    <ul>
      {posts.filter(post => post.publishedAt >= weekAgo).map(post => 
        <li key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </li>
      )}
    </ul>    
  )
}