import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Cohort from '@/models/Cohort'
import { withAuth } from '@/lib/middleware'

// GET single cohort
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect()

    const cohort = await Cohort.findById(params.id)

    if (!cohort) {
      return NextResponse.json(
        { success: false, error: 'Cohort not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: cohort,
    })
  } catch (error) {
    console.error('Get cohort error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT update cohort
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return withAuth(request, async (req, adminId) => {
    try {
      await dbConnect()

      const body = await req.json()

      const cohort = await Cohort.findByIdAndUpdate(
        params.id,
        { ...body, updatedAt: new Date() },
        { new: true, runValidators: true }
      )

      if (!cohort) {
        return NextResponse.json(
          { success: false, error: 'Cohort not found' },
          { status: 404 }
        )
      }

      return NextResponse.json({
        success: true,
        data: cohort,
      })
    } catch (error) {
      console.error('Update cohort error:', error)
      return NextResponse.json(
        { success: false, error: 'Internal server error' },
        { status: 500 }
      )
    }
  })
}

// DELETE cohort
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return withAuth(request, async (req, adminId) => {
    try {
      await dbConnect()

      const cohort = await Cohort.findByIdAndDelete(params.id)

      if (!cohort) {
        return NextResponse.json(
          { success: false, error: 'Cohort not found' },
          { status: 404 }
        )
      }

      return NextResponse.json({
        success: true,
        message: 'Cohort deleted successfully',
      })
    } catch (error) {
      console.error('Delete cohort error:', error)
      return NextResponse.json(
        { success: false, error: 'Internal server error' },
        { status: 500 }
      )
    }
  })
}
