"use server"

import { revalidatePath } from "next/cache"
import type { Post } from "@/lib/types"

// Mock data store (in production, this would be MongoDB)
const mockPosts: Post[] = [
  {
    id: "1",
    content:
      "Just deployed our social feed microservice across AWS and GCP! The multi-cloud setup is handling 1M+ posts/day with incredible resilience. Sharding is working beautifully! 🚀",
    author: {
      name: "Sarah Chen",
      username: "sarahchen",
      avatar: "/woman-engineer.jpg",
      initials: "SC",
    },
    timestamp: "2h ago",
    likes: 342,
    comments: 28,
    shares: 15,
    region: "us-west-2",
    metrics: {
      views: 1247,
      latency: 45,
    },
  },
  {
    id: "2",
    content:
      "MongoDB sharding + replica sets = 3.2x read throughput improvement! Our feed is blazing fast now. Here's what we learned about optimizing for high-volume social data...",
    author: {
      name: "Alex Kumar",
      username: "alexkumar",
      avatar: "/man-developer.jpg",
      initials: "AK",
    },
    timestamp: "4h ago",
    likes: 567,
    comments: 43,
    shares: 31,
    region: "eu-central-1",
    metrics: {
      views: 2891,
      latency: 38,
    },
  },
  {
    id: "3",
    content:
      "GitHub Actions CI/CD pipeline is a game changer. We cut our release cycle time by 50%! Automated testing, building, and deployment across multiple K8s clusters. DevOps dream! 💪",
    author: {
      name: "Jordan Lee",
      username: "jordanlee",
      avatar: "/developer-working.png",
      initials: "JL",
    },
    timestamp: "6h ago",
    likes: 423,
    comments: 35,
    shares: 22,
    region: "ap-southeast-1",
    metrics: {
      views: 1834,
      latency: 52,
    },
  },
  {
    id: "4",
    content:
      "Achieved 99.9% uptime with our multi-cloud architecture! Kubernetes failover between AWS and GCP is seamless. Users don't even notice when we switch regions. This is the future of resilient systems.",
    author: {
      name: "Maya Patel",
      username: "mayapatel",
      avatar: "/woman-tech.jpg",
      initials: "MP",
    },
    timestamp: "8h ago",
    likes: 789,
    comments: 67,
    shares: 45,
    region: "us-east-1",
    metrics: {
      views: 3456,
      latency: 41,
    },
  },
  {
    id: "5",
    content:
      "Real-time feed updates are working perfectly! WebSocket connections handling thousands of concurrent users. The Go microservice architecture is proving its worth in production. 🔥",
    author: {
      name: "Chris Anderson",
      username: "chrisanderson",
      avatar: "/man-programmer.jpg",
      initials: "CA",
    },
    timestamp: "10h ago",
    likes: 634,
    comments: 52,
    shares: 38,
    region: "eu-west-1",
    metrics: {
      views: 2567,
      latency: 47,
    },
  },
]

export async function getPosts(): Promise<Post[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100))
  return mockPosts
}

export async function createPost(content: string): Promise<void> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  const newPost: Post = {
    id: Date.now().toString(),
    content,
    author: {
      name: "You",
      username: "youruser",
      avatar: "/abstract-geometric-shapes.png",
      initials: "YU",
    },
    timestamp: "Just now",
    likes: 0,
    comments: 0,
    shares: 0,
    region: "us-west-2",
    metrics: {
      views: 0,
      latency: 42,
    },
  }

  mockPosts.unshift(newPost)
  revalidatePath("/")
}

export async function likePost(postId: string): Promise<void> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 200))
  revalidatePath("/")
}
