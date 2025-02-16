import { i18nRouter } from 'next-i18n-router';
import { i18nConfig } from '@/i18nConfig';
import { NextRequest } from 'next/server';

// Without a defined matcher, this one line applies next-auth to all project
export { default } from 'next-auth/middleware';

export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    '/',
    '/search',
    '/reals',
    '/messages',
    '/settings',
    '/profile'
  ]
};
