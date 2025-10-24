import { Activity, Cloud, Database } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function FeedHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight text-balance">Social Feed Platform</h1>
            <p className="text-sm text-muted-foreground">
              Multi-cloud deployment • High availability • Real-time updates
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="gap-1.5">
              <Database className="h-3.5 w-3.5" />
              MongoDB
            </Badge>
            <Badge variant="secondary" className="gap-1.5">
              <Cloud className="h-3.5 w-3.5" />
              Multi-Cloud
            </Badge>
            <Badge variant="outline" className="gap-1.5 border-accent/50 text-accent">
              <Activity className="h-3.5 w-3.5" />
              Live
            </Badge>
          </div>
        </div>
      </div>
    </header>
  )
}
