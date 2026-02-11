'use client'

import { useEffect, useState } from 'react'

interface Media {
  _id: string
  title: string
  videoId: string
  description: string
  createdAt: string
}

export default function MediaManagement() {
  const [mediaList, setMediaList] = useState<Media[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingMedia, setEditingMedia] = useState<Media | null>(null)

  const [formData, setFormData] = useState({
    title: '',
    videoId: '',
    description: '',
  })

  useEffect(() => {
    fetchMedia()
  }, [])

  const fetchMedia = async () => {
    try {
      const response = await fetch('/api/admin/media')
      const data = await response.json()
      if (data.success) {
        setMediaList(data.data)
      }
      setLoading(false)
    } catch (error) {
      console.error('Failed to fetch media:', error)
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const url = editingMedia
        ? `/api/admin/media/${editingMedia._id}`
        : '/api/admin/media'

      const response = await fetch(url, {
        method: editingMedia ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        fetchMedia()
        resetForm()
      } else {
        alert(data.error || 'Failed to save media')
      }
    } catch (error) {
      console.error('Failed to save media:', error)
      alert('Failed to save media')
    }
  }

  const handleEdit = (media: Media) => {
    setEditingMedia(media)
    setFormData({
      title: media.title,
      videoId: media.videoId,
      description: media.description,
    })
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this media?')) return

    try {
      const response = await fetch(`/api/admin/media/${id}`, {
        method: 'DELETE',
      })

      const data = await response.json()

      if (data.success) {
        fetchMedia()
      } else {
        alert(data.error || 'Failed to delete media')
      }
    } catch (error) {
      console.error('Failed to delete media:', error)
      alert('Failed to delete media')
    }
  }

  const resetForm = () => {
    setFormData({
      title: '',
      videoId: '',
      description: '',
    })
    setEditingMedia(null)
    setShowForm(false)
  }

  const extractVideoId = (input: string) => {
    // Extract video ID from various YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/,
    ]

    for (const pattern of patterns) {
      const match = input.match(pattern)
      if (match) {
        return match[1]
      }
    }
    return input
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Media Management</h1>
          <p className="text-gray-600">Manage your YouTube videos</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-gradient-to-r from-brand-accent to-brand-accent-highlight text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-200"
        >
          {showForm ? 'Cancel' : '+ Add Video'}
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            {editingMedia ? 'Edit Video' : 'Add New Video'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
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
                placeholder="How Can UX/UI Designers Earn More Than ₹2 Lakh Per Month?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                YouTube Video ID or URL *
              </label>
              <input
                type="text"
                value={formData.videoId}
                onChange={(e) => {
                  const extracted = extractVideoId(e.target.value)
                  setFormData({ ...formData, videoId: extracted })
                }}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                placeholder="JmLnowJattQ or https://www.youtube.com/watch?v=..."
              />
              <p className="text-xs text-gray-500 mt-1">
                Enter YouTube video ID or paste full URL
              </p>
              {formData.videoId && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${formData.videoId}`}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                placeholder="Brief description of the video content..."
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-brand-accent to-brand-accent-highlight text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-200"
              >
                {editingMedia ? 'Update Video' : 'Add Video'}
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

      {/* Media List */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-accent mx-auto"></div>
        </div>
      ) : mediaList.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <p className="text-gray-500">No videos yet. Add your first one!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaList.map((media) => (
            <div key={media._id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="relative w-full aspect-video bg-gray-900">
                <img
                  src={`https://img.youtube.com/vi/${media.videoId}/maxresdefault.jpg`}
                  alt={media.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                    <svg className="w-6 h-6 fill-red-600 ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{media.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{media.description}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(media)}
                    className="flex-1 bg-blue-50 text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(media._id)}
                    className="flex-1 bg-red-50 text-red-600 font-medium py-2 px-4 rounded-lg hover:bg-red-100 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
