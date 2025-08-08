import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// In-memory token bucket per IP (dev/demo). For production, use Redis/Upstash.
const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 60; // 60 reqs/min per IP

const ipToBucket = new Map<string, { windowStart: number; count: number }>();

export function middleware(request: NextRequest) {
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  const bucket = ipToBucket.get(ip as string);

  if (!bucket || now - bucket.windowStart > WINDOW_MS) {
    ipToBucket.set(ip as string, { windowStart: now, count: 1 });
  } else {
    bucket.count += 1;
    if (bucket.count > MAX_REQUESTS) {
      return new NextResponse('Too Many Requests', {
        status: 429,
        headers: { 'Retry-After': String(Math.ceil((WINDOW_MS - (now - bucket.windowStart)) / 1000)) },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/api/:path*',
    '/login',
  ],
};