import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Cohort from '@/models/Cohort'
import { withAuth } from '@/lib/middleware'

// GET all cohorts
export async function GET(request: NextRequest) {
  try {
    await dbConnect()
    
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    
    const query = status ? { status } : {}
    const cohorts = await Cohort.find(query).sort({ createdAt: -1 })

    return NextResponse.json({
      success: true,
      data: cohorts,
    })
  } catch (error) {
    console.error('Get cohorts error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST create new cohort
export async function POST(request: NextRequest) {
  return withAuth(request, async (req, adminId) => {
    try {
      await dbConnect()

      const body = await req.json()
      const { 
        title, 
        subtitle,
        description, 
        image, 
        alt, 
        status,
        duration,
        format,
        price,
        button,
        link,
        modules,
        features,
        mentors
      } = body

      // Validate required fields
      if (!title || !subtitle || !description || !image || !alt || !status || !duration || !format || !price || !button || !link) {
        return NextResponse.json(
          { success: false, error: 'Required fields are missing' },
          { status: 400 }
        )
      }

      const cohort = await Cohort.create({
        title,
        subtitle,
        description,
        image,
        alt,
        status,
        duration,
        format,
        price,
        button,
        link,
        modules: modules || [],
        features: features || [],
        mentors: mentors || [],
      })

      return NextResponse.json({
        success: true,
        data: cohort,
      })
    } catch (error) {
      console.error('Create cohort error:', error)
      return NextResponse.json(
        { success: false, error: 'Internal server error' },
        { status: 500 }
      )
    }
  })
}
