import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BellRing, Calendar, FileText, Users } from "lucide-react"

// Mock data for notifications
const notifications = [
  {
    id: 1,
    title: "Thông báo nghỉ lễ 30/4 - 1/5",
    content: "Công ty sẽ nghỉ lễ vào ngày 30/4 và 1/5. Mọi người lưu ý sắp xếp công việc.",
    date: "25/04/2023",
    read: true,
    icon: Calendar,
  },
  {
    id: 2,
    title: "Họp phòng ban tháng 5",
    content: "Cuộc họp phòng ban sẽ diễn ra vào ngày 05/05/2023 lúc 14:00 tại phòng họp A.",
    date: "02/05/2023",
    read: false,
    icon: Users,
  },
  {
    id: 3,
    title: "Bảng lương tháng 4 đã được phát hành",
    content: "Bảng lương tháng 4 đã được phát hành. Vui lòng kiểm tra email của bạn.",
    date: "05/05/2023",
    read: false,
    icon: FileText,
  },
  {
    id: 4,
    title: "Cập nhật chính sách công ty",
    content: "Chính sách mới về chế độ làm việc từ xa đã được ban hành. Vui lòng đọc kỹ.",
    date: "10/05/2023",
    read: true,
    icon: BellRing,
  },
]

export function NotificationsList() {
  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`flex gap-4 rounded-lg border p-4 ${notification.read ? "" : "bg-gray-50"}`}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <notification.icon className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <h4 className="font-medium">{notification.title}</h4>
              {!notification.read && <Badge variant="outline">Mới</Badge>}
            </div>
            <p className="text-sm text-muted-foreground">{notification.content}</p>
            <div className="flex items-center justify-between pt-1">
              <p className="text-xs text-muted-foreground">{notification.date}</p>
              <Button variant="ghost" size="sm" className="h-7 text-xs">
                {notification.read ? "Đánh dấu chưa đọc" : "Đánh dấu đã đọc"}
              </Button>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center">
        <Button variant="outline">Xem tất cả thông báo</Button>
      </div>
    </div>
  )
}
