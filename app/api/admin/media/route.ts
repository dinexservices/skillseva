import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Media from '@/models/Media'
import { withAuth } from '@/lib/middleware'

// GET all media
export async function GET(request: NextRequest) {
  try {
    await dbConnect()
    
    const media = await Media.find().sort({ createdAt: -1 })

    return NextResponse.json({
      success: true,
      data: media,
    })
  } catch (error) {
    console.error('Get media error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST create new media
export async function POST(request: NextRequest) {
  return withAuth(request, async (req, adminId) => {
    try {
      await dbConnect()

      const body = await req.json()
      const { title, videoId, description } = body

      // Validate required fields
      if (!title || !videoId || !description) {
        return NextResponse.json(
          { success: false, error: 'All fields are required' },
          { status: 400 }
        )
      }

      const media = await Media.create({
        title,
        videoId,
        description,
      })

      return NextResponse.json({
        success: true,
        data: media,
      })
    } catch (error) {
      console.error('Create media error:', error)
      return NextResponse.json(
        { success: false, error: 'Internal server error' },
        { status: 500 }
      )
    }
  })
}
