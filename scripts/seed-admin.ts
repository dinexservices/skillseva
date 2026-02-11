const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') })

import mongoose from 'mongoose'
import dbConnect from '../lib/mongodb'
import Admin from '../models/Admin'

console.log('MONGODB_URI:', process.env.MONGODB_URI ? 'Present' : 'Missing')

async function seedAdmin() {
  try {
    await dbConnect()

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: 'admin@skillseva.com' })

    if (existingAdmin) {
      console.log('Admin user already exists!')
      process.exit(0)
    }

    // Create admin user
    const admin = await Admin.create({
      name: 'Admin',
      email: 'admin@skillseva.com',
      password: 'admin123', // Change this password after first login
    })

    console.log('✅ Admin user created successfully!')
    console.log('Email: admin@skillseva.com')
    console.log('Password: admin123')
    console.log('\n⚠️  IMPORTANT: Change this password after first login!')

    process.exit(0)
  } catch (error) {
    console.error('Error seeding admin:', error)
    process.exit(1)
  }
}

seedAdmin()
