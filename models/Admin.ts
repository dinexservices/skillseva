import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

export interface IAdmin extends mongoose.Document {
  email: string
  password: string
  name: string
  createdAt: Date
  comparePassword(candidatePassword: string): Promise<boolean>
}

const AdminSchema = new mongoose.Schema<IAdmin>({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

// Hash password before saving
AdminSchema.pre('save', async function () {
  if (!this.isModified('password')) {
    return
  }
  
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

// Method to compare password
AdminSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password)
}

export default mongoose.models.Admin || mongoose.model<IAdmin>('Admin', AdminSchema)
