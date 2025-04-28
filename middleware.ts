import { NextRequest, NextResponse } from 'next/server';
import { AUTH_PAGES, ROUTE_LINKS } from './constants/routes';

// Helper to check if the path is an auth page
function isAuthPage(path: string) {
  return AUTH_PAGES.some((route) => path.startsWith(route));
}

// Helper to check if the path is the wishlist page
function isWishlistPage(path: string) {
  return path.startsWith(ROUTE_LINKS.wishlist);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get the Firebase token from cookies (set on login)
  const token = request.cookies.get('firebaseToken')?.value;

  // If user is logged in (token exists) and tries to access an auth page, redirect to home
  if (token && isAuthPage(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // If user is NOT logged in and tries to access wishlist, redirect to login
  if (!token && isWishlistPage(pathname)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // All other pages are public
  return NextResponse.next();
}

// Specify which paths to run the middleware on
export const config = {
  matcher: [Object.values(ROUTE_LINKS)],
};
