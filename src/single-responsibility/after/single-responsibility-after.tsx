import { useActivePosts } from './hooks/usePosts'
import { PostItem } from './components/PostItem'

export function SingleResponsibilityAfter() {
  const { activePosts } = useActivePosts()

  return (
    <ul>
      {activePosts.map(post => 
        <PostItem key={post.id} post={post} />
      )}
    </ul>    
  )
}
