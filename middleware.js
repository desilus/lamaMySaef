import NextAuth from 'next-auth';
import { authConfig } from './app/authconfig';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
  // matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};