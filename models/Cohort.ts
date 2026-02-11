import mongoose from 'mongoose'

export interface IModule {
  title: string
  content: string
}

export interface IMentor {
  name: string
  role: string
  company: string
  image: string
}

export interface ICohort extends mongoose.Document {
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
  modules: IModule[]
  features: string[]
  mentors: IMentor[]
  createdAt: Date
  updatedAt: Date
}

const ModuleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
})

const MentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})

const CohortSchema = new mongoose.Schema<ICohort>({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['ongoing', 'upcoming'],
    required: true,
    default: 'upcoming',
  },
  duration: {
    type: String,
    required: true,
  },
  format: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  button: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  modules: [ModuleSchema],
  features: [String],
  mentors: [MentorSchema],
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
CohortSchema.pre('save', function () {
  this.updatedAt = new Date()
})

export default mongoose.models.Cohort || mongoose.model<ICohort>('Cohort', CohortSchema)
