import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Mock data for recent activities
const activities = [
  {
    id: 1,
    user: {
      name: "Nguyễn Văn A",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "NVA",
    },
    action: "đã check-in",
    time: "08:02:15",
    date: "Hôm nay",
    status: "success",
  },
  {
    id: 2,
    user: {
      name: "Trần Thị B",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "TTB",
    },
    action: "đã gửi đơn xin nghỉ phép",
    time: "09:15:30",
    date: "Hôm nay",
    status: "warning",
  },
  {
    id: 3,
    user: {
      name: "Lê Văn C",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "LVC",
    },
    action: "đã check-out",
    time: "17:30:45",
    date: "Hôm qua",
    status: "success",
  },
  {
    id: 4,
    user: {
      name: "Phạm Thị D",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "PTD",
    },
    action: "vắng mặt không báo trước",
    time: "00:00:00",
    date: "Hôm qua",
    status: "error",
  },
  {
    id: 5,
    user: {
      name: "Hoàng Văn E",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "HVE",
    },
    action: "đã cập nhật thông tin cá nhân",
    time: "14:20:10",
    date: "15/05/2023",
    status: "info",
  },
  {
    id: 6,
    user: {
      name: "Admin",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AD",
    },
    action: "đã gửi thông báo mới",
    time: "10:05:30",
    date: "15/05/2023",
    status: "info",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              <span className="font-semibold">{activity.user.name}</span> {activity.action}
            </p>
            <p className="text-sm text-muted-foreground">
              {activity.time} - {activity.date}
            </p>
          </div>
          <div className="ml-auto">
            <Badge
              variant={
                activity.status === "success"
                  ? "default"
                  : activity.status === "warning"
                    ? "secondary"
                    : activity.status === "error"
                      ? "destructive"
                      : "outline"
              }
            >
              {activity.status === "success"
                ? "Thành công"
                : activity.status === "warning"
                  ? "Chờ duyệt"
                  : activity.status === "error"
                    ? "Lỗi"
                    : "Thông tin"}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  )
}
