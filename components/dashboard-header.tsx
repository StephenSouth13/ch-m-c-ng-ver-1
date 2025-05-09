import type React from "react"

interface DashboardHeaderProps {
  heading: string
  description: string
  children?: React.ReactNode
}

export function DashboardHeader({ heading, description, children }: DashboardHeaderProps) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="grid gap-1">
        <h1 className="text-2xl font-bold tracking-tight">{heading}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="flex items-center gap-2">{children}</div>
    </div>
  )
}
