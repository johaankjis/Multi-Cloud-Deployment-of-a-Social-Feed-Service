export interface Post {
  id: string
  content: string
  author: {
    name: string
    username: string
    avatar: string
    initials: string
  }
  timestamp: string
  likes: number
  comments: number
  shares: number
  region?: string
  metrics?: {
    views: number
    latency: number
  }
}
