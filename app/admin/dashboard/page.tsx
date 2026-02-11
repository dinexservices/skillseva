'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { MdSchool, MdEvent, MdVideoLibrary, MdPhotoLibrary, MdAdd } from 'react-icons/md'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    cohorts: 0,
    events: 0,
    media: 0,
    moments: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const [cohortsRes, eventsRes, mediaRes, momentsRes] = await Promise.all([
        fetch('/api/admin/cohorts'),
        fetch('/api/admin/events'),
        fetch('/api/admin/media'),
        fetch('/api/admin/moments'),
      ])

      const [cohorts, events, media, moments] = await Promise.all([
        cohortsRes.json(),
        eventsRes.json(),
        mediaRes.json(),
        momentsRes.json(),
      ])

      setStats({
        cohorts: cohorts.data?.length || 0,
        events: events.data?.length || 0,
        media: media.data?.length || 0,
        moments: moments.data?.length || 0,
      })
      setLoading(false)
    } catch (error) {
      console.error('Failed to fetch stats:', error)
      setLoading(false)
    }
  }

  const cards = [
    {
      title: 'Cohorts',
      count: stats.cohorts,
      icon: MdSchool,
      color: 'from-blue-500 to-blue-600',
      href: '/admin/dashboard/cohorts',
    },
    {
      title: 'Events',
      count: stats.events,
      icon: MdEvent,
      color: 'from-purple-500 to-purple-600',
      href: '/admin/dashboard/events',
    },
    {
      title: 'Media',
      count: stats.media,
      icon: MdVideoLibrary,
      color: 'from-green-500 to-green-600',
      href: '/admin/dashboard/media',
    },
    {
      title: 'Moments',
      count: stats.moments,
      icon: MdPhotoLibrary,
      color: 'from-pink-500 to-pink-600',
      href: '/admin/dashboard/moments',
    },
  ]

  const quickActions = [
    {
      title: 'Add Cohort',
      description: 'Create a new cohort program',
      href: '/admin/dashboard/cohorts',
      icon: MdSchool,
    },
    {
      title: 'Add Event',
      description: 'Schedule a new event',
      href: '/admin/dashboard/events',
      icon: MdEvent,
    },
    {
      title: 'Add Media',
      description: 'Upload new video content',
      href: '/admin/dashboard/media',
      icon: MdVideoLibrary,
    },
    {
      title: 'Add Moment',
      description: 'Share gallery photos',
      href: '/admin/dashboard/moments',
      icon: MdPhotoLibrary,
    },
  ]

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Manage your SkillSeva platform</p>
      </div>

      {/* Stats Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 animate-pulse">
              <div className="h-8 w-8 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>
              <div className="h-8 w-16 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <Link key={card.title} href={card.href}>
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer">
                  <div className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-lg flex items-center justify-center text-white text-2xl mb-4`}>
                    <Icon />
                  </div>
                  <h3 className="text-gray-600 font-medium mb-2">{card.title}</h3>
                  <p className="text-3xl font-bold text-gray-900">{card.count}</p>
                </div>
              </Link>
            )
          })}
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon
            return (
              <Link
                key={action.title}
                href={action.href}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Icon className="text-xl text-gray-700" />
                  </div>
                  <MdAdd className="text-2xl text-gray-400" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
                <p className="text-sm text-gray-600">{action.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
