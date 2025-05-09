import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CalendarDays, Clock, FileCheck, UserCheck } from "lucide-react"

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Ngày công tháng này</CardTitle>
          <CalendarDays className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">15/22</div>
          <div className="mt-2 space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span>Tiến độ</span>
              <span>68%</span>
            </div>
            <Progress value={68} className="h-2" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Giờ làm việc hôm nay</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">6h 30m</div>
          <div className="mt-2 space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span>Tiến độ</span>
              <span>72%</span>
            </div>
            <Progress value={72} className="h-2" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Ngày phép đã dùng</CardTitle>
          <UserCheck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2/12</div>
          <div className="mt-2 space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span>Đã sử dụng</span>
              <span>17%</span>
            </div>
            <Progress value={17} className="h-2" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Nhiệm vụ hoàn thành</CardTitle>
          <FileCheck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">8/10</div>
          <div className="mt-2 space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span>Tiến độ</span>
              <span>80%</span>
            </div>
            <Progress value={80} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
