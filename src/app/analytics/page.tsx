import { AppHeader } from "@/components/app-header"
import { AppSidebar } from "@/components/app-sidebar"

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />

      <div className="flex flex-1 flex-col">
        <AppHeader
          title="Analytics"
          description="Example metrics page for Lovable-generated apps"
          actionLabel="Export report"
        />

        <main className="flex-1 p-6">
          <div className="text-sm text-muted-foreground">
            Analytics reference page.
          </div>
        </main>
      </div>
    </div>
  )
}