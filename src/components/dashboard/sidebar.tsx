
  
"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeft, ChevronRight, Home, Bell, Users, ShoppingCart, LifeBuoy, Settings } from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const menuItems = [
  { icon: Home, label: "Home", href: "/dashboard" },
  { icon: Bell, label: "Notification", href: "/dashboard/notifications" },
  { icon: Users, label: "My Contacts", href: "/dashboard/contacts" },
  { icon: ShoppingCart, label: "Purchases", href: "/dashboard/purchases" },
  { icon: LifeBuoy, label: "Support", href: "/dashboard/support" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
]

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div
      className={`${
        isOpen ? "w-72" : "w-20"
      } transition-all duration-300 ease-in-out bg-white   flex flex-col md:w-1/2 lg:w-1/4 px-7`}>
      {/* Sidebar Header */}
      <div className="p-4 flex items-center justify-between">
        <h2 className={`text-2xl font-bold ${isOpen ? "" : "hidden"}`}>Roaotech</h2>
        {/* Sidebar Toggle Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="ml-auto md:hidden">
          {isOpen ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </div>

      {/* Sidebar Navigation Menu */}
      <nav className="mt-6 h-[200px]">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <span
              className={`flex items-center py-3 px-6 hover:bg-gray-100 ${
                pathname === item.href ? "bg-[#EBF4FF] font-semibold" : ""
              }`}>
              <item.icon className="h-5 w-5 mr-4 text-gray-500" />
              {isOpen && <span>{item.label}</span>}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
