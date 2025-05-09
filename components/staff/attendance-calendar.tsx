"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"

// Mock data for attendance status
const mockAttendanceData: Record<string, string> = {
  "2023-05-01": "present",
  "2023-05-02": "present",
  "2023-05-03": "present",
  "2023-05-04": "present",
  "2023-05-05": "present",
  "2023-05-08": "present",
  "2023-05-09": "present",
  "2023-05-10": "late",
  "2023-05-11": "present",
  "2023-05-12": "present",
  "2023-05-15": "present",
  "2023-05-16": "present",
  "2023-05-17": "present",
  "2023-05-18": "absent",
  "2023-05-19": "present",
  "2023-05-22": "present",
  "2023-05-23": "present",
  "2023-05-24": "late",
  "2023-05-25": "present",
  "2023-05-26": "present",
  "2023-05-29": "present",
  "2023-05-30": "present",
  "2023-05-31": "present",
}

export function AttendanceCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Function to format date as YYYY-MM-DD for lookup
  const formatDate = (date: Date): string => {
    return date.toISOString().split("T")[0]
  }

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          modifiers={{
            present: (date) => mockAttendanceData[formatDate(date)] === "present",
            late: (date) => mockAttendanceData[formatDate(date)] === "late",
            absent: (date) => mockAttendanceData[formatDate(date)] === "absent",
          }}
          modifiersClassNames={{
            present: "bg-green-100 text-green-900",
            late: "bg-yellow-100 text-yellow-900",
            absent: "bg-red-100 text-red-900",
          }}
          components={{
            DayContent: ({ date, ...props }) => (
              <div {...props} className={cn("relative flex h-9 w-9 items-center justify-center", props.className)}>
                {date.getDate()}
                {mockAttendanceData[formatDate(date)] && (
                  <div
                    className={cn(
                      "absolute -bottom-1 h-1 w-4 rounded-full",
                      mockAttendanceData[formatDate(date)] === "present" && "bg-green-500",
                      mockAttendanceData[formatDate(date)] === "late" && "bg-yellow-500",
                      mockAttendanceData[formatDate(date)] === "absent" && "bg-red-500",
                    )}
                  />
                )}
              </div>
            ),
          }}
        />
      </div>
      <div className="flex justify-center gap-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <span className="text-sm">Có mặt</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="text-sm">Đi muộn</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <span className="text-sm">Vắng mặt</span>
        </div>
      </div>
    </div>
  )
}
