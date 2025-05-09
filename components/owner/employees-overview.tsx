"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

const data = [
  {
    name: "Kỹ thuật",
    total: 45,
    active: 43,
    onLeave: 2,
  },
  {
    name: "Marketing",
    total: 25,
    active: 24,
    onLeave: 1,
  },
  {
    name: "Kinh doanh",
    total: 35,
    active: 33,
    onLeave: 2,
  },
  {
    name: "Nhân sự",
    total: 15,
    active: 15,
    onLeave: 0,
  },
  {
    name: "Tài chính",
    total: 12,
    active: 11,
    onLeave: 1,
  },
  {
    name: "Sản xuất",
    total: 10,
    active: 9,
    onLeave: 1,
  },
]

export function EmployeesOverview() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="rounded-lg border p-4">
          <div className="text-2xl font-bold">142</div>
          <div className="text-sm text-muted-foreground">Tổng nhân viên</div>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-2xl font-bold">135</div>
          <div className="text-sm text-muted-foreground">Đang làm việc</div>
        </div>
        <div className="rounded-lg border p-4">
          <div className="text-2xl font-bold">7</div>
          <div className="text-sm text-muted-foreground">Đang nghỉ phép</div>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="active" name="Đang làm việc" fill="#4f46e5" radius={[4, 4, 0, 0]} />
            <Bar dataKey="onLeave" name="Đang nghỉ phép" fill="#f97316" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
