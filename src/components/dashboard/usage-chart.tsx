"use client"

import { Line, LineChart, ResponsiveContainer } from "recharts"

const data = [
  { value: 20 },
  { value: 85 },
  { value: 40 },
  { value: 35 },
  { value: 45 },
  { value: 35 },
  { value: 90 },
  { value: 30 },
  { value: 20 },
  { value: 15 },
  { value: 10 },
  { value: 5 },
]

export function UsageChart() {
  return (
    <div className="relative h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 25 }}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="#1B4679"
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
      {/* Three tick marks spaced farther apart near the left side */}
      <svg className="absolute bottom-0 left-0 w-full" height="15" style={{ pointerEvents: "none" }}>
        {/* Horizontal line */}
        <line x1="0" y1="0" x2="100%" y2="0" stroke="#94A3B8" strokeWidth={1} />
        {/* Three tick marks spaced farther apart */}
        {[0, 1, 2].map((i) => (
          <line
            key={i}
            x1={`${5 + i * 5}%`}  
            y1="0"
            x2={`${5 + i * 5}%`}
            y2="8"
            stroke="#94A3B8"
            strokeWidth={1}
          />
        ))}
      </svg>
    </div>
  )
}
