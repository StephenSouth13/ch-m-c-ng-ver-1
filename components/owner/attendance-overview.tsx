"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts"

const data = [
  { day: "01/05", present: 135, late: 5, absent: 2 },
  { day: "02/05", present: 138, late: 3, absent: 1 },
  { day: "03/05", present: 136, late: 4, absent: 2 },
  { day: "04/05", present: 134, late: 6, absent: 2 },
  { day: "05/05", present: 137, late: 3, absent: 2 },
  { day: "08/05", present: 135, late: 5, absent: 2 },
  { day: "09/05", present: 136, late: 4, absent: 2 },
  { day: "10/05", present: 138, late: 2, absent: 2 },
  { day: "11/05", present: 137, late: 3, absent: 2 },
  { day: "12/05", present: 135, late: 5, absent: 2 },
  { day: "15/05", present: 136, late: 4, absent: 2 },
]

export function AttendanceOverview() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="rounded-lg border p-4">
          <div className="text-2xl font-bold text-green-500">95%</div>
          <div className="text-sm text-muted-foreground">Tỷ lệ có mặt</div>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-2xl font-bold text-yellow-500">3%</div>
          <div className="text-sm text-muted-foreground">Tỷ lệ đi muộn</div>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-2xl font-bold text-red-500">2%</div>
          <div className="text-sm text-muted-foreground">Tỷ lệ vắng mặt</div>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="present" name="Có mặt" stroke="#22c55e" strokeWidth={2} />
            <Line type="monotone" dataKey="late" name="Đi muộn" stroke="#f59e0b" strokeWidth={2} />
            <Line type="monotone" dataKey="absent" name="Vắng mặt" stroke="#ef4444" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
