import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Event from '@/models/Event'
import { withAuth } from '@/lib/middleware'

// GET single event
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect()

    const event = await Event.findById(params.id)

    if (!event) {
      return NextResponse.json(
        { success: false, error: 'Event not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: event,
    })
  } catch (error) {
    console.error('Get event error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT update event
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return withAuth(request, async (req, adminId) => {
    try {
      await dbConnect()

      const body = await req.json()

      const event = await Event.findByIdAndUpdate(
        params.id,
        { ...body, updatedAt: new Date() },
        { new: true, runValidators: true }
      )

      if (!event) {
        return NextResponse.json(
          { success: false, error: 'Event not found' },
          { status: 404 }
        )
      }

      return NextResponse.json({
        success: true,
        data: event,
      })
    } catch (error) {
      console.error('Update event error:', error)
      return NextResponse.json(
        { success: false, error: 'Internal server error' },
        { status: 500 }
      )
    }
  })
}

// DELETE event
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return withAuth(request, async (req, adminId) => {
    try {
      await dbConnect()

      const event = await Event.findByIdAndDelete(params.id)

      if (!event) {
        return NextResponse.json(
          { success: false, error: 'Event not found' },
          { status: 404 }
        )
      }

      return NextResponse.json({
        success: true,
        message: 'Event deleted successfully',
      })
    } catch (error) {
      console.error('Delete event error:', error)
      return NextResponse.json(
        { success: false, error: 'Internal server error' },
        { status: 500 }
      )
    }
  })
}
