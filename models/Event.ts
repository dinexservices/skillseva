import mongoose from 'mongoose'

export interface IEvent extends mongoose.Document {
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
  createdAt: Date
  updatedAt: Date
}

const EventSchema = new mongoose.Schema<IEvent>({
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['In-person', 'Online'],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
  },
  embedUrl: {
    type: String,
  },
  paymentLink: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

// Update the updatedAt timestamp before saving
EventSchema.pre('save', function () {
  this.updatedAt = new Date()
})

export default mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema)
