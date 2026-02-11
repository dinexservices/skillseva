'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { MdAdd, MdDelete, MdEdit, MdClose, MdInfo, MdViewModule, MdStar, MdPeople } from 'react-icons/md'

interface Module {
  title: string
  content: string
}

interface Mentor {
  name: string
  role: string
  company: string
  image: string
}

interface Cohort {
  _id: string
  title: string
  subtitle: string
  description: string
  image: string
  alt: string
  status: 'ongoing' | 'upcoming'
  duration: string
  format: string
  price: string
  button: string
  link: string
  modules: Module[]
  features: string[]
  mentors: Mentor[]
  createdAt: string
}

type TabType = 'basic' | 'modules' | 'features' | 'mentors'

export default function CohortsManagement() {
  const [cohorts, setCohorts] = useState<Cohort[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingCohort, setEditingCohort] = useState<Cohort | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadingMentor, setUploadingMentor] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<TabType>('basic')

  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    image: '',
    alt: '',
    status: 'upcoming' as 'ongoing' | 'upcoming',
    duration: '',
    format: '',
    price: '',
    button: '',
    link: '',
    modules: [] as Module[],
    features: [] as string[],
    mentors: [] as Mentor[],
  })

  const [newFeature, setNewFeature] = useState('')
  const [newModule, setNewModule] = useState<Module>({ title: '', content: '' })
  const [newMentor, setNewMentor] = useState<Mentor>({ name: '', role: '', company: '', image: '' })

  useEffect(() => {
    fetchCohorts()
  }, [])

  const fetchCohorts = async () => {
    try {
      const response = await fetch('/api/admin/cohorts')
      const data = await response.json()
      if (data.success) {
        setCohorts(data.data)
      }
      setLoading(false)
    } catch (error) {
      console.error('Failed to fetch cohorts:', error)
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

  const handleMentorImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, index?: number) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (index !== undefined) {
      setUploadingMentor(index)
    }

    const formDataUpload = new FormData()
    formDataUpload.append('file', file)

    try {
      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formDataUpload,
      })

      const data = await response.json()
      if (data.success) {
        if (index !== undefined) {
          const updatedMentors = [...formData.mentors]
          updatedMentors[index].image = data.data.url
          setFormData((prev) => ({ ...prev, mentors: updatedMentors }))
        } else {
          setNewMentor((prev) => ({ ...prev, image: data.data.url }))
        }
      }
    } catch (error) {
      console.error('Upload failed:', error)
      alert('Failed to upload image')
    } finally {
      setUploadingMentor(null)
    }
  }

  const addFeature = () => {
    if (newFeature.trim()) {
      setFormData((prev) => ({
        ...prev,
        features: [...prev.features, newFeature.trim()],
      }))
      setNewFeature('')
    }
  }

  const removeFeature = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }))
  }

  const addModule = () => {
    if (newModule.title.trim() && newModule.content.trim()) {
      setFormData((prev) => ({
        ...prev,
        modules: [...prev.modules, newModule],
      }))
      setNewModule({ title: '', content: '' })
    } else {
      alert('Please fill both module title and content')
    }
  }

  const removeModule = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      modules: prev.modules.filter((_, i) => i !== index),
    }))
  }

  const addMentor = () => {
    if (newMentor.name.trim() && newMentor.role.trim() && newMentor.company.trim() && newMentor.image) {
      setFormData((prev) => ({
        ...prev,
        mentors: [...prev.mentors, newMentor],
      }))
      setNewMentor({ name: '', role: '', company: '', image: '' })
    } else {
      alert('Please fill all mentor fields including image')
    }
  }

  const removeMentor = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      mentors: prev.mentors.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const url = editingCohort
        ? `/api/admin/cohorts/${editingCohort._id}`
        : '/api/admin/cohorts'

      const response = await fetch(url, {
        method: editingCohort ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        fetchCohorts()
        resetForm()
        alert('Cohort saved successfully!')
      } else {
        alert(data.error || 'Failed to save cohort')
      }
    } catch (error) {
      console.error('Failed to save cohort:', error)
      alert('Failed to save cohort')
    }
  }

  const handleEdit = (cohort: Cohort) => {
    setEditingCohort(cohort)
    setFormData({
      title: cohort.title,
      subtitle: cohort.subtitle,
      description: cohort.description,
      image: cohort.image,
      alt: cohort.alt,
      status: cohort.status,
      duration: cohort.duration,
      format: cohort.format,
      price: cohort.price,
      button: cohort.button,
      link: cohort.link,
      modules: cohort.modules || [],
      features: cohort.features || [],
      mentors: cohort.mentors || [],
    })
    setActiveTab('basic')
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this cohort?')) return

    try {
      const response = await fetch(`/api/admin/cohorts/${id}`, {
        method: 'DELETE',
      })

      const data = await response.json()

      if (data.success) {
        fetchCohorts()
        alert('Cohort deleted successfully!')
      } else {
        alert(data.error || 'Failed to delete cohort')
      }
    } catch (error) {
      console.error('Failed to delete cohort:', error)
      alert('Failed to delete cohort')
    }
  }

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      description: '',
      image: '',
      alt: '',
      status: 'upcoming',
      duration: '',
      format: '',
      price: '',
      button: '',
      link: '',
      modules: [],
      features: [],
      mentors: [],
    })
    setNewFeature('')
    setNewModule({ title: '', content: '' })
    setNewMentor({ name: '', role: '', company: '', image: '' })
    setEditingCohort(null)
    setShowForm(false)
    setActiveTab('basic')
  }

  const tabs = [
    { id: 'basic' as TabType, label: 'Basic Info', icon: MdInfo },
    { id: 'modules' as TabType, label: 'Curriculum', icon: MdViewModule, count: formData.modules.length },
    { id: 'features' as TabType, label: 'Features', icon: MdStar, count: formData.features.length },
    { id: 'mentors' as TabType, label: 'Mentors', icon: MdPeople, count: formData.mentors.length },
  ]

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Cohorts Management</h1>
          <p className="text-gray-600">Manage your cohort programs</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-gradient-to-r from-brand-accent to-brand-accent-highlight text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center gap-2"
        >
          {showForm ? <MdClose /> : <MdAdd />}
          {showForm ? 'Cancel' : 'Add Cohort'}
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl w-full max-w-4xl my-8">
            {/* Form Header */}
            <div className="p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-xl z-10">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingCohort ? 'Edit Cohort' : 'Create New Cohort'}
                </h2>
                <button
                  onClick={resetForm}
                  className="text-gray-500 hover:text-gray-700 p-2"
                >
                  <MdClose className="text-2xl" />
                </button>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mt-4 overflow-x-auto">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                        activeTab === tab.id
                          ? 'bg-brand-accent text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Icon />
                      {tab.label}
                      {tab.count !== undefined && tab.count > 0 && (
                        <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                          {tab.count}
                        </span>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-6 max-h-[calc(100vh-300px)] overflow-y-auto">
              {/* Basic Info Tab */}
              {activeTab === 'basic' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                        placeholder="MERN Stack Cohort"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle *</label>
                      <input
                        type="text"
                        value={formData.subtitle}
                        onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                        placeholder="Master Full Stack Development"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                      placeholder="A comprehensive program covering..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Duration *</label>
                      <input
                        type="text"
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                        placeholder="12 Weeks"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Format *</label>
                      <input
                        type="text"
                        value={formData.format}
                        onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                        placeholder="Live"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Price *</label>
                      <input
                        type="text"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                        placeholder="₹5310"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Button Text *</label>
                      <input
                        type="text"
                        value={formData.button}
                        onChange={(e) => setFormData({ ...formData, button: e.target.value })}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                        placeholder="Apply for Cohort"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Status *</label>
                      <select
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value as 'ongoing' | 'upcoming' })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                      >
                        <option value="upcoming">Upcoming</option>
                        <option value="ongoing">Ongoing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Registration Link *</label>
                    <input
                      type="url"
                      value={formData.link}
                      onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                      placeholder="https://rzp.io/..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Alt Text *</label>
                    <input
                      type="text"
                      value={formData.alt}
                      onChange={(e) => setFormData({ ...formData, alt: e.target.value })}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                      placeholder="MERN Stack Cohort"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Banner Image *</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={uploading}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                    />
                    {uploading && <p className="text-sm text-gray-600 mt-2">Uploading...</p>}
                    {formData.image && (
                      <div className="relative w-full h-48 mt-4 rounded-lg overflow-hidden">
                        <Image src={formData.image} alt="Preview" fill className="object-cover" />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Modules Tab */}
              {activeTab === 'modules' && (
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-blue-800">
                      Add curriculum modules that will be displayed in a weekly breakdown format
                    </p>
                  </div>

                  <div className="space-y-4">
                    <input
                      type="text"
                      value={newModule.title}
                      onChange={(e) => setNewModule({ ...newModule, title: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                      placeholder="Week 1: WEB & JAVASCRIPT FOUNDATION"
                    />
                    <textarea
                      value={newModule.content}
                      onChange={(e) => setNewModule({ ...newModule, content: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                      placeholder="- How the web works&#10;- HTML basics&#10;- CSS fundamentals"
                    />
                    <button
                      type="button"
                      onClick={addModule}
                      className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2"
                    >
                      <MdAdd /> Add Module
                    </button>
                  </div>

                  <div className="space-y-3 mt-6">
                    {formData.modules.map((module, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-2">{module.title}</h4>
                            <p className="text-sm text-gray-600 whitespace-pre-line">{module.content}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeModule(index)}
                            className="text-red-600 hover:text-red-700 ml-4 p-2"
                          >
                            <MdDelete className="text-xl" />
                          </button>
                        </div>
                      </div>
                    ))}
                    {formData.modules.length === 0 && (
                      <p className="text-center text-gray-500 py-8">No modules added yet</p>
                    )}
                  </div>
                </div>
              )}

              {/* Features Tab */}
              {activeTab === 'features' && (
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-green-800">
                      Add key features and benefits that students will get from this cohort
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newFeature}
                      onChange={(e) => setNewFeature(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                      placeholder="Live Interactive Sessions"
                    />
                    <button
                      type="button"
                      onClick={addFeature}
                      className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 flex items-center gap-2"
                    >
                      <MdAdd /> Add
                    </button>
                  </div>

                  <div className="space-y-2 mt-6">
                    {formData.features.map((feature, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg border border-gray-200">
                        <span className="font-medium text-gray-900">{feature}</span>
                        <button
                          type="button"
                          onClick={() => removeFeature(index)}
                          className="text-red-600 hover:text-red-700 p-2"
                        >
                          <MdDelete />
                        </button>
                      </div>
                    ))}
                    {formData.features.length === 0 && (
                      <p className="text-center text-gray-500 py-8">No features added yet</p>
                    )}
                  </div>
                </div>
              )}

              {/* Mentors Tab */}
              {activeTab === 'mentors' && (
                <div className="space-y-6">
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                    <p className="text-sm text-purple-800">
                      Add mentors who will be teaching or guiding this cohort
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={newMentor.name}
                      onChange={(e) => setNewMentor({ ...newMentor, name: e.target.value })}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                      placeholder="Mentor Name"
                    />
                    <input
                      type="text"
                      value={newMentor.role}
                      onChange={(e) => setNewMentor({ ...newMentor, role: e.target.value })}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                      placeholder="Role/Designation"
                    />
                    <input
                      type="text"
                      value={newMentor.company}
                      onChange={(e) => setNewMentor({ ...newMentor, company: e.target.value })}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                      placeholder="Company"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleMentorImageUpload(e)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none"
                    />
                  </div>

                  {newMentor.image && (
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto">
                      <Image src={newMentor.image} alt="Preview" fill className="object-cover" />
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={addMentor}
                    className="w-full bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 flex items-center justify-center gap-2"
                  >
                    <MdAdd /> Add Mentor
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {formData.mentors.map((mentor, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200 flex items-center gap-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                          <Image src={mentor.image} alt={mentor.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{mentor.name}</h4>
                          <p className="text-sm text-gray-600">{mentor.role}</p>
                          <p className="text-xs text-gray-500">{mentor.company}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeMentor(index)}
                          className="text-red-600 hover:text-red-700 p-2"
                        >
                          <MdDelete />
                        </button>
                      </div>
                    ))}
                    {formData.mentors.length === 0 && (
                      <div className="col-span-2 text-center text-gray-500 py-8">No mentors added yet</div>
                    )}
                  </div>
                </div>
              )}
            </form>

            {/* Form Footer */}
            <div className="p-6 border-t border-gray-200 sticky bottom-0 bg-white rounded-b-xl flex gap-4">
              <button
                onClick={handleSubmit}
                disabled={uploading}
                className="flex-1 bg-gradient-to-r from-brand-accent to-brand-accent-highlight text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50"
              >
                {editingCohort ? 'Update Cohort' : 'Create Cohort'}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition-all duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cohorts List */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-accent mx-auto"></div>
        </div>
      ) : cohorts.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <p className="text-gray-500">No cohorts yet. Create your first one!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {cohorts.map((cohort) => (
            <div key={cohort._id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-64 h-48 flex-shrink-0">
                  <Image src={cohort.image} alt={cohort.alt} fill className="object-cover" />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 ${
                          cohort.status === 'ongoing' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                        }`}
                      >
                        {cohort.status === 'ongoing' ? 'Ongoing' : 'Upcoming'}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{cohort.title}</h3>
                      <p className="text-brand-accent font-medium mb-2">{cohort.subtitle}</p>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{cohort.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span>⏱️ {cohort.duration}</span>
                        <span>📍 {cohort.format}</span>
                        <span>💰 {cohort.price}</span>
                      </div>
                      <div className="flex gap-4 mt-3 text-xs text-gray-500">
                        <span>{cohort.modules?.length || 0} modules</span>
                        <span>{cohort.features?.length || 0} features</span>
                        <span>{cohort.mentors?.length || 0} mentors</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(cohort)}
                      className="bg-blue-50 text-blue-600 font-medium py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors flex items-center gap-2"
                    >
                      <MdEdit /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(cohort._id)}
                      className="bg-red-50 text-red-600 font-medium py-2 px-4 rounded-lg hover:bg-red-100 transition-colors flex items-center gap-2"
                    >
                      <MdDelete /> Delete
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
