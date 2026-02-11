import { NextRequest, NextResponse } from 'next/server'
import { withAuth } from '@/lib/middleware'

export async function POST(request: NextRequest) {
  return withAuth(request, async (req, adminId) => {
    try {
      const formData = await req.formData()
      const file = formData.get('file') as File

      if (!file) {
        return NextResponse.json(
          { success: false, error: 'No file provided' },
          { status: 400 }
        )
      }

      // Convert file to base64
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const base64File = `data:${file.type};base64,${buffer.toString('base64')}`

      // Upload to Cloudinary
      const cloudinaryResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            file: base64File,
            upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
            folder: 'skillseva',
          }),
        }
      )

      const data = await cloudinaryResponse.json()

      if (!cloudinaryResponse.ok) {
        return NextResponse.json(
          { success: false, error: 'Failed to upload to Cloudinary' },
          { status: 500 }
        )
      }

      return NextResponse.json({
        success: true,
        data: {
          url: data.secure_url,
          publicId: data.public_id,
        },
      })
    } catch (error) {
      console.error('Upload error:', error)
      return NextResponse.json(
        { success: false, error: 'Internal server error' },
        { status: 500 }
      )
    }
  })
}
