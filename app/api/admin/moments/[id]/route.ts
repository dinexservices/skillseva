import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/lib/mongodb'
import Moment from '@/models/Moment'
import { withAuth } from '@/lib/middleware'

// DELETE moment
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  return withAuth(request, async (req, adminId) => {
    try {
      await dbConnect()

      const moment = await Moment.findByIdAndDelete(params.id)

      if (!moment) {
        return NextResponse.json(
          { success: false, error: 'Moment not found' },
          { status: 404 }
        )
      }

      return NextResponse.json({
        success: true,
        message: 'Moment deleted successfully',
      })
    } catch (error) {
      console.error('Delete moment error:', error)
      return NextResponse.json(
        { success: false, error: 'Internal server error' },
        { status: 500 }
      )
    }
  })
}
