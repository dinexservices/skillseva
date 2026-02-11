import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Event from '@/models/Event'
import { withAuth } from '@/lib/middleware'

// GET all events
export async function GET(request: NextRequest) {
  try {
    await dbConnect()
    
    const events = await Event.find().sort({ createdAt: -1 })

    return NextResponse.json({
      success: true,
      data: events,
    })
  } catch (error) {
    console.error('Get events error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST create new event
export async function POST(request: NextRequest) {
  return withAuth(request, async (req, adminId) => {
    try {
      await dbConnect()

      const body = await req.json()
      const { category, title, date, location, image, type, description, link, embedUrl, paymentLink } = body

      // Validate required fields
      if (!category || !title || !date || !location || !image || !type || !description) {
        return NextResponse.json(
          { success: false, error: 'Required fields are missing' },
          { status: 400 }
        )
      }

      const event = await Event.create({
        category,
        title,
        date,
        location,
        image,
        type,
        description,
        link,
        embedUrl,
        paymentLink,
      })

      return NextResponse.json({
        success: true,
        data: event,
      })
    } catch (error) {
      console.error('Create event error:', error)
      return NextResponse.json(
        { success: false, error: 'Internal server error' },
        { status: 500 }
      )
    }
  })
}
