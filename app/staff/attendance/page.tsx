import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AttendanceTable } from "@/components/staff/attendance-table"
import { AttendanceCalendar } from "@/components/staff/attendance-calendar"
import { AttendanceStats } from "@/components/staff/attendance-stats"

export default function AttendancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Chấm công</h1>
        <p className="text-muted-foreground">Xem lịch sử chấm công và thống kê giờ làm việc.</p>
      </div>

      <AttendanceStats />

      <Tabs defaultValue="table" className="space-y-4">
        <TabsList>
          <TabsTrigger value="table">Bảng chấm công</TabsTrigger>
          <TabsTrigger value="calendar">Lịch chấm công</TabsTrigger>
        </TabsList>
        <TabsContent value="table" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>
                Bảng chấm công tháng {new Date().getMonth() + 1}/{new Date().getFullYear()}
              </CardTitle>
              <CardDescription>Chi tiết giờ vào, giờ ra và tổng thời gian làm việc.</CardDescription>
            </CardHeader>
            <CardContent>
              <AttendanceTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Lịch chấm công</CardTitle>
              <CardDescription>Xem trạng thái chấm công theo ngày.</CardDescription>
            </CardHeader>
            <CardContent>
              <AttendanceCalendar />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
