import { AppHeader } from "@/components/app-header"
import { AppSidebar } from "@/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />

      <div className="flex flex-1 flex-col">
        <AppHeader
          title="Settings"
          description="Reference form layout for internal tools"
          actionLabel="Save changes"
        />

        <main className="flex-1 p-6">
          <div className="max-w-xl space-y-6">

            <Card>
              <CardHeader>
                <CardTitle>Store settings</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">

                <div className="space-y-2">
                  <Label htmlFor="storeName">Store name</Label>
                  <Input id="storeName" defaultValue="Hive Demo Store" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="supportEmail">Support email</Label>
                  <Input id="supportEmail" defaultValue="support@hive.app" />
                </div>

              </CardContent>
            </Card>

            <Card>
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
  </CardHeader>

  <CardContent className="space-y-3">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium">Order alerts</p>
        <p className="text-sm text-muted-foreground">
          Notify when new orders arrive
        </p>
      </div>

      <Switch defaultChecked />
    </div>
    <Separator />
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium">Delivery delays</p>
        <p className="text-sm text-muted-foreground">
          Notify when shipments are delayed
        </p>
      </div>

      <Switch />
    </div>
  </CardContent>
</Card>

          </div>
        </main>
      </div>
    </div>
  )
}