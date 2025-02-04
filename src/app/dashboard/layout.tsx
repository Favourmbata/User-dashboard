// import type React from "react"
// import { SidebarProvider } from "@/components/ui/sidebar"
// import DashboardSidebar from "@/components/dashboard/sidebar"

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <SidebarProvider>
//       <div className="flex min-h-screen bg-gray-50">
//         <DashboardSidebar />
//         <main className="flex-1 p-6">{children}</main>
//       </div>
//     </SidebarProvider>
//   )
// }

// "use client"

// import { useState } from "react"
// import Sidebar from "@/components/dashboard/sidebar"
// import type React from "react" // Added import for React

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true)

//   return (
//     <div className="flex min-h-screen bg-gray-100 ">
//       <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
//       <main className="">
//         <div className="">{children}</div>
//       </main>
//     </div>
//   )
// }
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
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar with Padding */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content (Dashboard) */}
      <main className="hidden md:flex flex-1 px-4 md:px-6 lg:px-8 bg-white">
        {/* Children dashboard content */}
        <div className="w-full p-6 shadow-md">{children}</div>
      </main>
    </div>
  )
}
