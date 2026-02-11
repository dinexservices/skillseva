import mongoose from 'mongoose'

export interface IMedia extends mongoose.Document {
  title: string
  videoId: string
  description: string
  createdAt: Date
  updatedAt: Date
}

const MediaSchema = new mongoose.Schema<IMedia>({
  title: {
    type: String,
    required: true,
  },
  videoId: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
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
MediaSchema.pre('save', function () {
  this.updatedAt = new Date()
})

export default mongoose.models.Media || mongoose.model<IMedia>('Media', MediaSchema)
