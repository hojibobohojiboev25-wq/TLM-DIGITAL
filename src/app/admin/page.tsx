import { prisma } from '@/lib/db'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Briefcase, FileText, MessageSquare } from 'lucide-react'

async function getDashboardStats() {
  try {
    const [servicesCount, contentPages, ordersCount] = await Promise.all([
      prisma.service.count(),
      prisma.pageContent.findMany({
        select: { page: true },
        distinct: ['page'],
      }),
      prisma.order.count(),
    ])

    return {
      services: servicesCount,
      contentPages: contentPages.length,
      orders: ordersCount,
    }
  } catch (error) {
    console.error('Failed to fetch dashboard stats:', error)
    return {
      services: 0,
      contentPages: 0,
      orders: 0,
    }
  }
}

export default async function AdminDashboard() {
  const stats = await getDashboardStats()

  const statCards = [
    {
      title: 'Services',
      value: stats.services,
      description: 'Active services offered',
      icon: Briefcase,
    },
    {
      title: 'Content Pages',
      value: stats.contentPages,
      description: 'Pages with editable content',
      icon: FileText,
    },
    {
      title: 'Orders',
      value: stats.orders,
      description: 'Total orders received',
      icon: MessageSquare,
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your admin panel. Manage your services, content, and view orders.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {statCards.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common administrative tasks
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <a
                href="/admin/services"
                className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent transition-colors"
              >
                <div>
                  <p className="font-medium">Manage Services</p>
                  <p className="text-sm text-muted-foreground">Add, edit, or remove services</p>
                </div>
                <Briefcase className="h-5 w-5 text-muted-foreground" />
              </a>

              <a
                href="/admin/content"
                className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent transition-colors"
              >
                <div>
                  <p className="font-medium">Edit Content</p>
                  <p className="text-sm text-muted-foreground">Update page content</p>
                </div>
                <FileText className="h-5 w-5 text-muted-foreground" />
              </a>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest orders and updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              No recent activity to display.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}