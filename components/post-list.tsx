import { PostCard } from "@/components/post-card"
import { getPosts } from "@/app/actions"

export async function PostList() {
  const posts = await getPosts()

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Recent Posts</h2>
        <p className="text-sm text-muted-foreground">{posts.length} posts loaded</p>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
