import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OwnerStatsCards } from "@/components/owner/owner-stats-cards"
import { EmployeesOverview } from "@/components/owner/employees-overview"
import { AttendanceOverview } from "@/components/owner/attendance-overview"
import { RecentActivity } from "@/components/owner/recent-activity"

export default function OwnerDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard Quản lý</h1>
        <p className="text-muted-foreground">Tổng quan về nhân sự, chấm công và hoạt động của công ty.</p>
      </div>

      <OwnerStatsCards />

      <Tabs defaultValue="employees" className="space-y-4">
        <TabsList>
          <TabsTrigger value="employees">Nhân viên</TabsTrigger>
          <TabsTrigger value="attendance">Chấm công</TabsTrigger>
          <TabsTrigger value="activity">Hoạt động gần đây</TabsTrigger>
        </TabsList>
        <TabsContent value="employees" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tổng quan nhân viên</CardTitle>
              <CardDescription>Phân bố nhân viên theo phòng ban và trạng thái.</CardDescription>
            </CardHeader>
            <CardContent>
              <EmployeesOverview />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="attendance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tổng quan chấm công</CardTitle>
              <CardDescription>Thống kê chấm công theo ngày trong tháng hiện tại.</CardDescription>
            </CardHeader>
            <CardContent>
              <AttendanceOverview />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hoạt động gần đây</CardTitle>
              <CardDescription>Các hoạt động gần đây trong hệ thống.</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentActivity />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
