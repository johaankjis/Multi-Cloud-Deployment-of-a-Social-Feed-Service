import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Zap, Globe } from "lucide-react"

export function FeedStats() {
  const stats = [
    {
      label: "Posts Today",
      value: "1.2M",
      change: "+12.5%",
      icon: TrendingUp,
      color: "text-chart-1",
    },
    {
      label: "Active Users",
      value: "847K",
      change: "+8.2%",
      icon: Users,
      color: "text-chart-2",
    },
    {
      label: "Throughput",
      value: "3.2x",
      change: "vs baseline",
      icon: Zap,
      color: "text-chart-3",
    },
    {
      label: "Uptime",
      value: "99.9%",
      change: "Multi-region",
      icon: Globe,
      color: "text-primary",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.label} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </div>
              <div className={`p-2 rounded-lg bg-muted ${stat.color}`}>
                <Icon className="h-5 w-5" />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
