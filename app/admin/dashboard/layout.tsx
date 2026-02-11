'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { 
  MdDashboard, 
  MdSchool, 
  MdEvent, 
  MdVideoLibrary, 
  MdPhotoLibrary,
  MdLogout,
  MdChevronLeft,
  MdChevronRight
} from 'react-icons/md'

interface AdminLayoutProps {
  children: React.ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [loading, setLoading] = useState(true)
  const [admin, setAdmin] = useState<any>(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/admin/me')
      const data = await response.json()

      if (!response.ok) {
        router.push('/admin/login')
        return
      }

      setAdmin(data.data.admin)
      setLoading(false)
    } catch (error) {
      router.push('/admin/login')
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' })
      router.push('/admin/login')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-accent mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: MdDashboard },
    { name: 'Cohorts', href: '/admin/dashboard/cohorts', icon: MdSchool },
    { name: 'Events', href: '/admin/dashboard/events', icon: MdEvent },
    { name: 'Media', href: '/admin/dashboard/media', icon: MdVideoLibrary },
    { name: 'Moments', href: '/admin/dashboard/moments', icon: MdPhotoLibrary },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 ${
          sidebarOpen ? 'w-64' : 'w-20'
        } z-40`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200">
            <h1 className={`font-bold text-xl text-gray-900 ${!sidebarOpen && 'text-center'}`}>
              {sidebarOpen ? 'SkillSeva Admin' : 'SS'}
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-brand-accent text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  } ${!sidebarOpen && 'justify-center'}`}
                >
                  <Icon className="text-xl" />
                  {sidebarOpen && <span className="font-medium">{item.name}</span>}
                </Link>
              )
            })}
          </nav>

          {/* Admin Info & Logout */}
          <div className="p-4 border-t border-gray-200">
            {sidebarOpen && admin && (
              <div className="mb-3 px-2">
                <p className="text-sm font-medium text-gray-900">{admin.name}</p>
                <p className="text-xs text-gray-500">{admin.email}</p>
              </div>
            )}
            <button
              onClick={handleLogout}
              className={`w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors ${
                !sidebarOpen && 'justify-center'
              }`}
            >
              <MdLogout className="text-xl" />
              {sidebarOpen && <span className="font-medium">Logout</span>}
            </button>
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute -right-3 top-6 bg-white border border-gray-200 rounded-full p-1.5 hover:bg-gray-50 transition-colors"
          >
            {sidebarOpen ? (
              <MdChevronLeft className="w-4 h-4 text-gray-600" />
            ) : (
              <MdChevronRight className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-20'
        } min-h-screen`}
      >
        {children}
      </main>
    </div>
  )
}
