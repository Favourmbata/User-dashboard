"use client"

interface CircularProgressProps {
  value: number
  size?: number
}

export function CircularProgress({ value, size = 200 }: CircularProgressProps) {
  const strokeWidth = 12
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (value / 100) * circumference

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        {/* Background circle */}
        <circle className="stroke-muted" fill="none" strokeWidth={strokeWidth} r={radius} cx={size / 2} cy={size / 2} />
        {/* Progress circle */}
        <circle
          className="stroke-[#1B4679] transition-all duration-300 ease-in-out"
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-semibold">{Math.round(value)}</span>
      </div>
    </div>
  )
}
