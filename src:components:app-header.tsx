import { Button } from "@/components/ui/button"

export function AppHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <div>
        <h1 className="text-lg font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Shared starter layout for Lovable-generated internal apps
        </p>
      </div>

      <Button>Primary action</Button>
    </header>
  )
}