import { usePosts } from "./hooks/usePosts"
import { Post } from "./hooks/usePosts"

// export const fetchPosts = {
//   getPosts: (): Promise<Post[]> => {
//     return fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//   }
// }

// export const fetchPosts = {
//   getPosts: (): Promise<Post[]> => {
//     const posts = localStorage.getItem('posts')

//     return new Promise((resolve, reject) => {
//       if (posts) {
//         resolve(JSON.parse(posts))
//       } else {
//         reject('No posts found')
//       }
//     }
//     )
//   }
// }

export const fetchPosts = {
  getPosts: (): Promise<Post[]> => {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: 'Post 1', body: 'Post 1 body' },
          { id: 2, title: 'Post 2', body: 'Post 2 body' },
          { id: 3, title: 'Post 3', body: 'Post 3 body' },
        ])
      }, 500)
    })
  } 
}


export function DependencyInversionAfter() {  
  const { posts, loading } = usePosts(fetchPosts)
 
  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}