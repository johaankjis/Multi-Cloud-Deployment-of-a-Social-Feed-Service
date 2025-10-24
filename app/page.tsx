import { FeedHeader } from "@/components/feed-header"
import { CreatePost } from "@/components/create-post"
import { FeedStats } from "@/components/feed-stats"
import { PostList } from "@/components/post-list"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <FeedHeader />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          <FeedStats />
          <CreatePost />
          <PostList />
        </div>
      </main>
    </div>
  )
}
