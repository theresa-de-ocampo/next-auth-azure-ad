import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export default async function middleware(req) {
  const token = await getToken({ req })
  const { origin } = req.nextUrl

  if (!token) {
    return NextResponse.redirect(new URL('/api/auth/signin', origin))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/posts', '/authors']
}
