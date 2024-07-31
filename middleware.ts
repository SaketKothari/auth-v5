import { auth } from '@/auth';

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  console.log('ROUTE: ', req.nextUrl.pathname);
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  // its simply gonna use to invoke the middleware every single time when any of the routes being touched
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
