"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BarChart, Calendar, ClipboardList, Home, LogOut, Menu, MessageSquare, Settings, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  {
    title: "Dashboard",
    href: "/owner/dashboard",
    icon: Home,
  },
  {
    title: "Nhân viên",
    href: "/owner/employees",
    icon: Users,
  },
  {
    title: "Chấm công",
    href: "/owner/attendance",
    icon: ClipboardList,
  },
  {
    title: "Tính lương",
    href: "/owner/payroll",
    icon: BarChart,
  },
  {
    title: "Lịch",
    href: "/owner/calendar",
    icon: Calendar,
  },
  {
    title: "Thông báo",
    href: "/owner/notifications",
    icon: MessageSquare,
  },
  {
    title: "Cài đặt",
    href: "/owner/settings",
    icon: Settings,
  },
]

export function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
        <div className="flex h-full flex-col gap-2">
          <div className="flex h-14 items-center border-b px-6">
            <h2 className="text-lg font-semibold">HRM Pro - Admin</h2>
          </div>
          <nav className="grid gap-1 px-4 py-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100",
                  pathname === item.href ? "bg-gray-100" : "text-gray-500",
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.title}
              </Link>
            ))}
          </nav>
          <div className="mt-auto p-4">
            <Button variant="outline" className="w-full justify-start gap-2" asChild>
              <Link href="/login" onClick={() => setOpen(false)}>
                <LogOut className="h-4 w-4" />
                Đăng xuất
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
