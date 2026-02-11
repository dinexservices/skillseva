import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Admin from '@/models/Admin'
import { signToken } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    await dbConnect()

    const { email, password } = await request.json()

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Find admin by email
    const admin = await Admin.findOne({ email: email.toLowerCase() })

    if (!admin) {
      return NextResponse.json(
        { success: false, error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Check password
    const isPasswordValid = await admin.comparePassword(password)

    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Generate JWT token
    const token = signToken({
      adminId: admin._id.toString(),
      email: admin.email,
    })

    // Create response with cookie
    const response = NextResponse.json({
      success: true,
      data: {
        admin: {
          id: admin._id,
          email: admin.email,
          name: admin.name,
        },
      },
    })

    // Set HTTP-only cookie
    response.cookies.set('admin-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })

    return response
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
