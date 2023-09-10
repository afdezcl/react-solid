import { usePosts } from "./hooks/usePosts"

export function DependencyInversionBefore() {
  const { posts, loading } = usePosts()

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
