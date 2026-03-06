import { AppHeader } from "@/components/app-header"
import { AppSidebar } from "@/components/app-sidebar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const orders = [
  {
    id: "ORD-10241",
    customer: "Acme GmbH",
    status: "Delivered",
    channel: "Shopify",
    value: "€124.00",
  },
  {
    id: "ORD-10242",
    customer: "Northwind",
    status: "In transit",
    channel: "Amazon",
    value: "€89.00",
  },
  {
    id: "ORD-10243",
    customer: "Studio Mono",
    status: "Delayed",
    channel: "Shopify",
    value: "€214.00",
  },
  {
    id: "ORD-10244",
    customer: "Berg & Co",
    status: "Pending",
    channel: "WooCommerce",
    value: "€64.00",
  },
]

function StatusBadge({ status }: { status: string }) {
  if (status === "Delivered") {
    return <Badge variant="secondary">{status}</Badge>
  }

  if (status === "In transit") {
    return <Badge>{status}</Badge>
  }

  if (status === "Delayed") {
    return <Badge variant="destructive">{status}</Badge>
  }

  return <Badge variant="outline">{status}</Badge>
}

export default function OrdersPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />

      <div className="flex min-w-0 flex-1 flex-col">
      <AppHeader
  title="Orders"
  description="Reference table layout for Lovable-generated internal tools"
  actionLabel="Create order"
/>

        <main className="flex-1 p-6">
          <div className="space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold tracking-tight">Orders</h2>
                <p className="text-sm text-muted-foreground">
                  Reference table layout for Lovable-generated internal tools
                </p>
              </div>

              <Button>Create order</Button>
            </div>

            <Card>
              <CardHeader className="gap-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <CardTitle>All orders</CardTitle>

                  <div className="flex flex-col gap-3 md:flex-row md:items-center">
                    <Input
                      placeholder="Search orders..."
                      className="w-full md:w-64"
                    />
                    <div className="flex gap-2">
                      <Button variant="outline">Export</Button>
                      <Button variant="outline">Filters</Button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">All</Badge>
                  <Badge variant="outline">Pending</Badge>
                  <Badge variant="outline">In transit</Badge>
                  <Badge variant="outline">Delivered</Badge>
                  <Badge variant="outline">Delayed</Badge>
                </div>
              </CardHeader>

              <CardContent>
                <div className="overflow-hidden rounded-md border">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/60">
                      <tr className="border-b">
                        <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                          Order ID
                        </th>
                        <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                          Customer
                        </th>
                        <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                          Status
                        </th>
                        <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                          Channel
                        </th>
                        <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                          Value
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {orders.map((order) => (
                        <tr
                          key={order.id}
                          className="border-b last:border-b-0 hover:bg-muted/40"
                        >
                          <td className="px-4 py-3 font-medium">{order.id}</td>
                          <td className="px-4 py-3">{order.customer}</td>
                          <td className="px-4 py-3">
                            <StatusBadge status={order.status} />
                          </td>
                          <td className="px-4 py-3">{order.channel}</td>
                          <td className="px-4 py-3">{order.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    Showing 4 of 124 orders
                  </p>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}