import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

// Mock data for attendance records
const attendanceRecords = [
  {
    date: "01/05/2023",
    day: "Thứ Hai",
    checkin: "08:02:15",
    checkout: "17:30:45",
    workingHours: "9h 28m",
    status: "present",
  },
  {
    date: "02/05/2023",
    day: "Thứ Ba",
    checkin: "08:00:05",
    checkout: "17:32:10",
    workingHours: "9h 32m",
    status: "present",
  },
  {
    date: "03/05/2023",
    day: "Thứ Tư",
    checkin: "08:05:30",
    checkout: "17:35:22",
    workingHours: "9h 30m",
    status: "present",
  },
  {
    date: "04/05/2023",
    day: "Thứ Năm",
    checkin: "08:15:45",
    checkout: "17:40:12",
    workingHours: "9h 25m",
    status: "late",
  },
  {
    date: "05/05/2023",
    day: "Thứ Sáu",
    checkin: "08:01:20",
    checkout: "17:30:00",
    workingHours: "9h 29m",
    status: "present",
  },
  {
    date: "08/05/2023",
    day: "Thứ Hai",
    checkin: "08:00:00",
    checkout: "17:30:00",
    workingHours: "9h 30m",
    status: "present",
  },
  {
    date: "09/05/2023",
    day: "Thứ Ba",
    checkin: "08:30:15",
    checkout: "17:45:30",
    workingHours: "9h 15m",
    status: "late",
  },
  {
    date: "10/05/2023",
    day: "Thứ Tư",
    checkin: "-",
    checkout: "-",
    workingHours: "-",
    status: "absent",
  },
]

export function AttendanceTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Ngày</TableHead>
            <TableHead>Thứ</TableHead>
            <TableHead>Giờ vào</TableHead>
            <TableHead>Giờ ra</TableHead>
            <TableHead>Thời gian làm việc</TableHead>
            <TableHead>Trạng thái</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {attendanceRecords.map((record, index) => (
            <TableRow key={index}>
              <TableCell>{record.date}</TableCell>
              <TableCell>{record.day}</TableCell>
              <TableCell>{record.checkin}</TableCell>
              <TableCell>{record.checkout}</TableCell>
              <TableCell>{record.workingHours}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    record.status === "present" ? "default" : record.status === "late" ? "secondary" : "destructive"
                  }
                >
                  {record.status === "present" ? "Có mặt" : record.status === "late" ? "Đi muộn" : "Vắng mặt"}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
