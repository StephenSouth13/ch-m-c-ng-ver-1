import type React from "react"
import { StaffSidebar } from "@/components/staff/staff-sidebar"
import { UserNav } from "@/components/staff/user-nav"
import { MobileNav } from "@/components/staff/mobile-nav"

export default function StaffLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <MobileNav />
        <div className="flex-1" />
        <UserNav />
      </header>
      <div className="flex flex-1">
        <StaffSidebar />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
