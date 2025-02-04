"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", usage: 30 },
  { name: "Feb", usage: 45 },
  { name: "Mar", usage: 28 },
  { name: "Apr", usage: 52 },
  { name: "May", usage: 38 },
  { name: "Jun", usage: 65 },
  { name: "Jul", usage: 35 },
]

export function UsageChart() {
  return (
    <div className="h-[300px] w-full border-r-2 border-b-2 border-gray-300">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="usage" stroke="hsl(var(--primary))" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

