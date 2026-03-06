import { AppHeader } from "@/components/app-header"
import { AppSidebar } from "@/components/app-sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <AppHeader />

        <main className="flex-1 p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">1,284</p>
                <p className="text-sm text-muted-foreground">+12% vs last week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>On-time delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">96.4%</p>
                <p className="text-sm text-muted-foreground">Stable performance</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Open issues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">18</p>
                <p className="text-sm text-muted-foreground">-4 since yesterday</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Starter template</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>
                  This page defines the baseline layout and component style for Hive internal
                  apps built with Lovable.
                </p>
                <p>
                  Reuse this shell, keep spacing consistent, and extend existing components
                  instead of inventing new UI patterns.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}