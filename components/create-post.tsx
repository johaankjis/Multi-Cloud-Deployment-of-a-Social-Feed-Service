"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ImageIcon, Send } from "lucide-react"
import { createPost } from "@/app/actions"
import { useToast } from "@/hooks/use-toast"

export function CreatePost() {
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!content.trim()) return

    setIsSubmitting(true)
    try {
      await createPost(content)
      setContent("")
      toast({
        title: "Post created",
        description: "Your post has been published successfully.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create post. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/abstract-geometric-shapes.png" />
            <AvatarFallback>YU</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-3">
            <Textarea
              placeholder="What's happening in your multi-cloud deployment?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[100px] resize-none"
            />
            <div className="flex items-center justify-between">
              <Button type="button" variant="ghost" size="sm" className="gap-2">
                <ImageIcon className="h-4 w-4" />
                Media
              </Button>
              <Button type="submit" disabled={!content.trim() || isSubmitting} className="gap-2">
                <Send className="h-4 w-4" />
                {isSubmitting ? "Publishing..." : "Publish"}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Card>
  )
}
