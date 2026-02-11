'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface Event {
  _id: string
  category: string
  title: string
  date: string
  location: string
  image: string
  type: 'In-person' | 'Online'
  description: string
  link?: string
  embedUrl?: string
  paymentLink?: string
  createdAt: string
}

export default function EventsManagement() {
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  const [uploading, setUploading] = useState(false)

  const [formData, setFormData] = useState({
    category: '',
    title: '',
    date: '',
    location: '',
    image: '',
    type: 'Online' as 'In-person' | 'Online',
    description: '',
    link: '',
    embedUrl: '',
    paymentLink: '',
  })

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/admin/events')
      const data = await response.json()
      if (data.success) {
        setEvents(data.data)
      }
      setLoading(false)
    } catch (error) {
      console.error('Failed to fetch events:', error)
      setLoading(false)
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    const formDataUpload = new FormData()
    formDataUpload.append('file', file)

    try {
      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formDataUpload,
      })

      const data = await response.json()
      if (data.success) {
        setFormData((prev) => ({ ...prev, image: data.data.url }))
      }
    } catch (error) {
      console.error('Upload failed:', error)
      alert('Failed to upload image')
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const url = editingEvent
        ? `/api/admin/events/${editingEvent._id}`
        : '/api/admin/events'

      const response = await fetch(url, {
        method: editingEvent ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        fetchEvents()
        resetForm()
      } else {
        alert(data.error || 'Failed to save event')
      }
    } catch (error) {
      console.error('Failed to save event:', error)
      alert('Failed to save event')
    }
  }

  const handleEdit = (event: Event) => {
    setEditingEvent(event)
    setFormData({
      category: event.category,
      title: event.title,
      date: event.date,
      location: event.location,
      image: event.image,
      type: event.type,
      description: event.description,
      link: event.link || '',
      embedUrl: event.embedUrl || '',
      paymentLink: event.paymentLink || '',
    })
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return

    try {
      const response = await fetch(`/api/admin/events/${id}`, {
        method: 'DELETE',
      })

      const data = await response.json()

      if (data.success) {
        fetchEvents()
      } else {
        alert(data.error || 'Failed to delete event')
      }
    } catch (error) {
      console.error('Failed to delete event:', error)
      alert('Failed to delete event')
    }
  }

  const resetForm = () => {
    setFormData({
      category: '',
      title: '',
      date: '',
      location: '',
      image: '',
      type: 'Online',
      description: '',
      link: '',
      embedUrl: '',
      paymentLink: '',
    })
    setEditingEvent(null)
    setShowForm(false)
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Events Management</h1>
          <p className="text-gray-600">Manage your meetups and workshops</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-gradient-to-r from-brand-accent to-brand-accent-highlight text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-200"
        >
          {showForm ? 'Cancel' : '+ Add Event'}
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {editingEvent ? 'Edit Event' : 'Add New Event'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                  placeholder="MEETUP, WORKSHOP, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type *
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value as 'In-person' | 'Online' })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                >
                  <option value="Online">Online</option>
                  <option value="In-person">In-person</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                placeholder="SkillSeva Offline Meetup: Delhi"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date *
                </label>
                <input
                  type="text"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                  placeholder="31 Jan, 2026"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                  placeholder="Online or Physical address"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                placeholder="Event description..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Registration Link
                </label>
                <input
                  type="url"
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                  placeholder="https://forms.gle/..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Embed URL
                </label>
                <input
                  type="url"
                  value={formData.embedUrl}
                  onChange={(e) => setFormData({ ...formData, embedUrl: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                  placeholder="https://docs.google.com/forms/..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Link
                </label>
                <input
                  type="url"
                  value={formData.paymentLink}
                  onChange={(e) => setFormData({ ...formData, paymentLink: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                  placeholder="https://rzp.io/..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image *
              </label>
              <div className="space-y-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                />
                {uploading && <p className="text-sm text-gray-600">Uploading...</p>}
                {formData.image && (
                  <div className="relative w-40 h-40">
                    <Image
                      src={formData.image}
                      alt="Preview"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={uploading}
                className="bg-gradient-to-r from-brand-accent to-brand-accent-highlight text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50"
              >
                {editingEvent ? 'Update Event' : 'Create Event'}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-all duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Events List */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-accent mx-auto"></div>
        </div>
      ) : events.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <p className="text-gray-500">No events yet. Create your first one!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {events.map((event) => (
            <div key={event._id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-64 h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 text-xs font-semibold rounded-full mb-2">
                        {event.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span>📅 {event.date}</span>
                        <span>📍 {event.location}</span>
                        <span className={`px-2 py-1 rounded ${
                          event.type === 'Online' 
                            ? 'bg-blue-100 text-blue-600' 
                            : 'bg-green-100 text-green-600'
                        }`}>
                          {event.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(event)}
                      className="bg-blue-50 text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(event._id)}
                      className="bg-red-50 text-red-600 font-medium py-2 px-4 rounded-lg hover:bg-red-100 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
