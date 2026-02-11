import mongoose from 'mongoose'

export interface IMoment extends mongoose.Document {
  image: string
  alt: string
  order: number
  createdAt: Date
  updatedAt: Date
}

const MomentSchema = new mongoose.Schema<IMoment>({
  image: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    default: 0,
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
MomentSchema.pre('save', function () {
  this.updatedAt = new Date()
})

export default mongoose.models.Moment || mongoose.model<IMoment>('Moment', MomentSchema)
