import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from '@/lib/auth'
import dbConnect from '@/lib/mongodb'
import Admin from '@/models/Admin'

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('admin-token')?.value

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Not authenticated' },
        { status: 401 }
      )
    }

    const payload = verifyToken(token)

    if (!payload) {
      return NextResponse.json(
        { success: false, error: 'Invalid token' },
        { status: 401 }
      )
    }

    await dbConnect()
    const admin = await Admin.findById(payload.adminId).select('-password')

    if (!admin) {
      return NextResponse.json(
        { success: false, error: 'Admin not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: {
        admin: {
          id: admin._id,
          email: admin.email,
          name: admin.name,
        },
      },
    })
  } catch (error) {
    console.error('Auth check error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
