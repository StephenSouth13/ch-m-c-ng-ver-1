"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin } from "lucide-react"

export function AttendanceCard() {
  const [checkedIn, setCheckedIn] = useState(false)
  const [checkedOut, setCheckedOut] = useState(false)
  const [checkinTime, setCheckinTime] = useState<string | null>(null)
  const [checkoutTime, setCheckoutTime] = useState<string | null>(null)

  const handleCheckin = () => {
    const now = new Date()
    setCheckinTime(now.toLocaleTimeString())
    setCheckedIn(true)
  }

  const handleCheckout = () => {
    const now = new Date()
    setCheckoutTime(now.toLocaleTimeString())
    setCheckedOut(true)
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Chấm công hôm nay</CardTitle>
            <CardDescription>
              {new Date().toLocaleDateString("vi-VN", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </CardDescription>
          </div>
          <Badge variant={checkedIn && !checkedOut ? "default" : checkedOut ? "secondary" : "outline"}>
            {!checkedIn ? "Chưa check-in" : !checkedOut ? "Đang làm việc" : "Đã check-out"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-2 rounded-lg border p-4 text-center">
          <Clock className="h-6 w-6 text-primary" />
          <h3 className="text-sm font-medium">Giờ vào</h3>
          <p className="text-2xl font-bold">{checkinTime || "--:--:--"}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 rounded-lg border p-4 text-center">
          <Clock className="h-6 w-6 text-primary" />
          <h3 className="text-sm font-medium">Giờ ra</h3>
          <p className="text-2xl font-bold">{checkoutTime || "--:--:--"}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <div className="flex w-full items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Vị trí: Văn phòng công ty</span>
        </div>
        <div className="flex w-full gap-4">
          <Button className="flex-1" onClick={handleCheckin} disabled={checkedIn}>
            Check-in
          </Button>
          <Button
            className="flex-1"
            onClick={handleCheckout}
            disabled={!checkedIn || checkedOut}
            variant={checkedIn && !checkedOut ? "default" : "outline"}
          >
            Check-out
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
