import { Home, Package, Users, Settings, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const nav = [
  { icon: Home, label: "Overview", active: true },
  { icon: Package, label: "Orders" },
  { icon: Users, label: "Customers" },
  { icon: Settings, label: "Settings" },
];

const orders = [
  { id: "HIV-1042", customer: "Northwind Traders", total: "$1,240.00", status: "Fulfilled" as const },
  { id: "HIV-1041", customer: "Globex Corp", total: "$820.50", status: "Processing" as const },
  { id: "HIV-1039", customer: "Soylent Foods", total: "$312.00", status: "On hold" as const },
  { id: "HIV-1038", customer: "Initech", total: "$4,905.75", status: "Fulfilled" as const },
];

const statusBadge = (s: string) =>
  s === "Fulfilled" ? <Badge variant="success" dot>{s}</Badge>
  : s === "On hold" ? <Badge variant="danger" dot>{s}</Badge>
  : <Badge variant="info" dot>{s}</Badge>;

export default function App() {
  return (
    <div className="flex min-h-screen bg-background text-foreground font-sans">
      {/* Sidebar */}
      <aside className="w-60 shrink-0 border-r border-sidebar-border bg-sidebar px-3 py-4">
        <div className="flex items-center gap-2 px-2 pb-6">
          <div className="h-6 w-6 rounded-md bg-primary" />
          <span className="font-medium text-[var(--text-title-default)]">Hive tools</span>
        </div>
        <nav className="space-y-1">
          {nav.map(({ icon: Icon, label, active }) => (
            <a
              key={label}
              className={`flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm ${
                active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                  : "text-sidebar-foreground hover:bg-secondary"
              }`}
            >
              <Icon className="size-4" />
              {label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex h-14 items-center justify-between border-b border-border bg-card px-6">
          <h1 className="text-base font-medium text-[var(--text-title-default)]">Overview</h1>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-[var(--text-tertiary-default)]" />
              <Input placeholder="Search orders" className="w-56 pl-8" />
            </div>
            <Button><Plus className="size-4" /> Create order</Button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 space-y-6 p-6">
          {/* Metric cards */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Open orders", value: "128", note: "+12 today" },
              { label: "Revenue (30d)", value: "$84,250", note: "+4.2%" },
              { label: "Avg. fulfilment", value: "1.8 days", note: "−0.3 vs last wk" },
            ].map((m) => (
              <Card key={m.label}>
                <CardContent className="pt-4">
                  <p className="text-sm text-[var(--text-secondary-default)]">{m.label}</p>
                  <p className="mt-1 text-2xl font-medium text-[var(--text-title-default)]">{m.value}</p>
                  <p className="mt-1 text-xs text-[var(--text-tertiary-default)]">{m.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Orders table */}
          <Card>
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Recent orders</CardTitle>
                <CardDescription>Latest activity across all channels</CardDescription>
              </div>
              <Button variant="secondary" size="sm">View all</Button>
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((o) => (
                    <TableRow key={o.id}>
                      <TableCell className="font-medium">{o.id}</TableCell>
                      <TableCell>{o.customer}</TableCell>
                      <TableCell>{o.total}</TableCell>
                      <TableCell>{statusBadge(o.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Button + badge specimen rows */}
          <Card>
            <CardHeader><CardTitle>Components</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Button>Create shipment</Button>
                <Button variant="secondary">Cancel</Button>
                <Button variant="destructive">Delete order</Button>
                <Button variant="destructiveOutline">Archive</Button>
                <Button variant="external">Open in Shopify ↗</Button>
                <Button variant="tertiary">Learn more</Button>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="success" dot>Paid</Badge>
                <Badge variant="warning" dot>Pending</Badge>
                <Badge variant="danger" dot>Failed</Badge>
                <Badge variant="info" dot>Processing</Badge>
                <span className="mx-1 h-4 w-px bg-border" />
                <Badge variant="cherry">Priority</Badge>
                <Badge variant="forest">Organic</Badge>
                <Badge variant="blue">B2B</Badge>
                <Badge variant="fjord">Cold chain</Badge>
                <Badge variant="teal">Subscription</Badge>
                <Badge variant="plum">Vintage</Badge>
                <Badge variant="outline" onDismiss={() => {}}>Custom</Badge>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
