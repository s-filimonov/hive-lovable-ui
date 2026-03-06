import { Button } from "@/components/ui/button"

type AppHeaderProps = {
  title?: string
  description?: string
  actionLabel?: string
}

export function AppHeader({
  title = "Dashboard",
  description = "Shared starter layout for Lovable-generated internal apps",
  actionLabel = "Primary action",
}: AppHeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <div>
        <h1 className="text-lg font-semibold tracking-tight">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <Button>{actionLabel}</Button>
    </header>
  )
}