import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Moment from '@/models/Moment'
import { withAuth } from '@/lib/middleware'

// GET all moments
export async function GET(request: NextRequest) {
  try {
    await dbConnect()
    
    const moments = await Moment.find().sort({ order: 1, createdAt: -1 })

    return NextResponse.json({
      success: true,
      data: moments,
    })
  } catch (error) {
    console.error('Get moments error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST create new moment
export async function POST(request: NextRequest) {
  return withAuth(request, async (req, adminId) => {
    try {
      await dbConnect()

      const body = await req.json()
      const { image, alt, order } = body

      // Validate required fields
      if (!image || !alt) {
        return NextResponse.json(
          { success: false, error: 'Image and alt text are required' },
          { status: 400 }
        )
      }

      const moment = await Moment.create({
        image,
        alt,
        order: order || 0,
      })

      return NextResponse.json({
        success: true,
        data: moment,
      })
    } catch (error) {
      console.error('Create moment error:', error)
      return NextResponse.json(
        { success: false, error: 'Internal server error' },
        { status: 500 }
      )
    }
  })
}
