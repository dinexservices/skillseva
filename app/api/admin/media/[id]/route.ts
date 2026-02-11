import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Media from '@/models/Media'
import { withAuth } from '@/lib/middleware'

// GET single media
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect()

    const media = await Media.findById(params.id)

    if (!media) {
      return NextResponse.json(
        { success: false, error: 'Media not found' },
        { status: 404 }
      )
    }

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

// PUT update media
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return withAuth(request, async (req, adminId) => {
    try {
      await dbConnect()

      const body = await req.json()
      const { title, videoId, description } = body

      const media = await Media.findByIdAndUpdate(
        params.id,
        { title, videoId, description, updatedAt: new Date() },
        { new: true, runValidators: true }
      )

      if (!media) {
        return NextResponse.json(
          { success: false, error: 'Media not found' },
          { status: 404 }
        )
      }

      return NextResponse.json({
        success: true,
        data: media,
      })
    } catch (error) {
      console.error('Update media error:', error)
      return NextResponse.json(
        { success: false, error: 'Internal server error' },
        { status: 500 }
      )
    }
  })
}

// DELETE media
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return withAuth(request, async (req, adminId) => {
    try {
      await dbConnect()

      const media = await Media.findByIdAndDelete(params.id)

      if (!media) {
        return NextResponse.json(
          { success: false, error: 'Media not found' },
          { status: 404 }
        )
      }

      return NextResponse.json({
        success: true,
        message: 'Media deleted successfully',
      })
    } catch (error) {
      console.error('Delete media error:', error)
      return NextResponse.json(
        { success: false, error: 'Internal server error' },
        { status: 500 }
      )
    }
  })
}
