'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface Moment {
  _id: string
  image: string
  alt: string
  order: number
  createdAt: string
}

export default function MomentsManagement() {
  const [moments, setMoments] = useState<Moment[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [uploading, setUploading] = useState(false)

  const [formData, setFormData] = useState({
    image: '',
    alt: '',
    order: 0,
  })

  useEffect(() => {
    fetchMoments()
  }, [])

  const fetchMoments = async () => {
    try {
      const response = await fetch('/api/admin/moments')
      const data = await response.json()
      if (data.success) {
        setMoments(data.data)
      }
      setLoading(false)
    } catch (error) {
      console.error('Failed to fetch moments:', error)
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
      const response = await fetch('/api/admin/moments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        fetchMoments()
        resetForm()
      } else {
        alert(data.error || 'Failed to add moment')
      }
    } catch (error) {
      console.error('Failed to add moment:', error)
      alert('Failed to add moment')
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this moment?')) return

    try {
      const response = await fetch(`/api/admin/moments/${id}`, {
        method: 'DELETE',
      })

      const data = await response.json()

      if (data.success) {
        fetchMoments()
      } else {
        alert(data.error || 'Failed to delete moment')
      }
    } catch (error) {
      console.error('Failed to delete moment:', error)
      alert('Failed to delete moment')
    }
  }

  const resetForm = () => {
    setFormData({
      image: '',
      alt: '',
      order: 0,
    })
    setShowForm(false)
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Moments Gallery</h1>
          <p className="text-gray-600">Manage your photo gallery</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-gradient-to-r from-brand-accent to-brand-accent-highlight text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-200"
        >
          {showForm ? 'Cancel' : '+ Add Photo'}
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Add New Photo</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Alt Text *
              </label>
              <input
                type="text"
                value={formData.alt}
                onChange={(e) => setFormData({ ...formData, alt: e.target.value })}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                placeholder="Life at SkillSeva moment"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Display Order
              </label>
              <input
                type="number"
                value={formData.order}
                onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                placeholder="0"
              />
              <p className="text-xs text-gray-500 mt-1">
                Lower numbers appear first. Use 0 for default ordering.
              </p>
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
                  <div className="relative w-64 h-64">
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
                disabled={uploading || !formData.image}
                className="bg-gradient-to-r from-brand-accent to-brand-accent-highlight text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50"
              >
                Add Photo
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

      {/* Moments Grid */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-accent mx-auto"></div>
        </div>
      ) : moments.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <p className="text-gray-500">No photos yet. Add your first one!</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {moments.map((moment) => (
            <div key={moment._id} className="relative group">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <Image
                  src={moment.image}
                  alt={moment.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => handleDelete(moment._id)}
                    className="bg-red-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
              {moment.order > 0 && (
                <span className="absolute top-2 left-2 bg-white/90 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                  #{moment.order}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
