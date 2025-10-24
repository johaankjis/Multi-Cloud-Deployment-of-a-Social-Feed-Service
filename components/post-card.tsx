"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Share2, BarChart3 } from "lucide-react"
import { likePost } from "@/app/actions"
import type { Post } from "@/lib/types"

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const [likes, setLikes] = useState(post.likes)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = async () => {
    try {
      await likePost(post.id)
      setLikes(isLiked ? likes - 1 : likes + 1)
      setIsLiked(!isLiked)
    } catch (error) {
      console.error("Failed to like post:", error)
    }
  }

  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={post.author.avatar || "/placeholder.svg"} />
            <AvatarFallback>{post.author.initials}</AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold">{post.author.name}</span>
              <span className="text-sm text-muted-foreground">@{post.author.username}</span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{post.timestamp}</span>
              {post.region && (
                <Badge variant="outline" className="text-xs">
                  {post.region}
                </Badge>
              )}
            </div>

            <p className="text-sm leading-relaxed text-pretty">{post.content}</p>

            {post.metrics && (
              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <BarChart3 className="h-3.5 w-3.5" />
                  <span>{post.metrics.views} views</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span>Latency: {post.metrics.latency}ms</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <Button variant="ghost" size="sm" className="gap-2 hover:text-destructive" onClick={handleLike}>
            <Heart className={`h-4 w-4 ${isLiked ? "fill-current text-destructive" : ""}`} />
            <span className="text-sm">{likes}</span>
          </Button>

          <Button variant="ghost" size="sm" className="gap-2">
            <MessageCircle className="h-4 w-4" />
            <span className="text-sm">{post.comments}</span>
          </Button>

          <Button variant="ghost" size="sm" className="gap-2">
            <Share2 className="h-4 w-4" />
            <span className="text-sm">{post.shares}</span>
          </Button>
        </div>
      </div>
    </Card>
  )
}
