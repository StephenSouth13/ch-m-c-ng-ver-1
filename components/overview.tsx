"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Engineering",
    total: 45,
  },
  {
    name: "Design",
    total: 18,
  },
  {
    name: "Product",
    total: 12,
  },
  {
    name: "Marketing",
    total: 15,
  },
  {
    name: "Sales",
    total: 22,
  },
  {
    name: "HR",
    total: 8,
  },
  {
    name: "Finance",
    total: 10,
  },
  {
    name: "Operations",
    total: 12,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BarChart>
    </ResponsiveContainer>
  )
}
