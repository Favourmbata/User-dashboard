"use client"

import { useState } from "react"
import Sidebar from "@/components/dashboard/sidebar"
import type React from "react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="flex min-h-screen px-5 bg-gray-100 shadow-lg rounded-lg">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main className="hidden md:flex flex-1 px-4 md:px-6 lg:px-8 bg-white">
        
        <div className="w-full p-6 ">{children}</div>
      </main>
    </div>
  )
}
