import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AttendanceCard } from "@/components/staff/attendance-card"
import { AttendanceCalendar } from "@/components/staff/attendance-calendar"
import { NotificationsList } from "@/components/staff/notifications-list"
import { StatsCards } from "@/components/staff/stats-cards"

export default function StaffDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Xin chào, Nguyễn Văn A</h1>
        <p className="text-muted-foreground">
          Hôm nay là{" "}
          {new Date().toLocaleDateString("vi-VN", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>

      <AttendanceCard />

      <StatsCards />

      <Tabs defaultValue="calendar" className="space-y-4">
        <TabsList>
          <TabsTrigger value="calendar">Lịch chấm công</TabsTrigger>
          <TabsTrigger value="notifications">Thông báo</TabsTrigger>
        </TabsList>
        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>
                Lịch chấm công tháng {new Date().getMonth() + 1}/{new Date().getFullYear()}
              </CardTitle>
              <CardDescription>Xem lịch sử chấm công và trạng thái các ngày làm việc trong tháng.</CardDescription>
            </CardHeader>
            <CardContent>
              <AttendanceCalendar />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Thông báo nội bộ</CardTitle>
              <CardDescription>Các thông báo từ quản lý và hệ thống.</CardDescription>
            </CardHeader>
            <CardContent>
              <NotificationsList />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
