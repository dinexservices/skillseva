import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from './auth'

export async function withAuth(
  request: NextRequest,
  handler: (request: NextRequest, adminId: string) => Promise<NextResponse>
): Promise<NextResponse> {
  try {
    const token = request.cookies.get('admin-token')?.value

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized - No token provided' },
        { status: 401 }
      )
    }

    const payload = verifyToken(token)

    if (!payload) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized - Invalid token' },
        { status: 401 }
      )
    }

    return await handler(request, payload.adminId)
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}
