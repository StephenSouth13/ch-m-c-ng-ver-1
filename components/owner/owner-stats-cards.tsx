import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart, Clock, Users, UserCheck } from "lucide-react"

export function OwnerStatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Tổng nhân viên</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">142</div>
          <div className="mt-2 space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span>Tăng trưởng</span>
              <span className="text-green-500">+4%</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Tỷ lệ đi làm hôm nay</CardTitle>
          <UserCheck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">95%</div>
          <div className="mt-2 space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span>135/142 nhân viên</span>
              <span className="text-green-500">+2%</span>
            </div>
            <Progress value={95} className="h-2" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Tổng giờ làm việc</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,245h</div>
          <div className="mt-2 space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span>Tháng này</span>
              <span className="text-green-500">+5%</span>
            </div>
            <Progress value={68} className="h-2" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Tổng chi phí lương</CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1.25 tỷ</div>
          <div className="mt-2 space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span>Dự kiến tháng này</span>
              <span className="text-red-500">+3%</span>
            </div>
            <Progress value={85} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
