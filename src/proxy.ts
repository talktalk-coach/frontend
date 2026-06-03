import {NextRequest, NextResponse} from 'next/server';

/** 로그인 없이 접근 가능한 공개 경로 */
const PUBLIC_PATHS = [
  '/auth/landing',
  '/auth/login',
  '/auth/signup',
  '/auth/find-id',
  '/auth/find-password',
];

/** 로그인한 유저가 접근하면 홈으로 리다이렉트할 경로 */
const AUTH_PATHS = ['/auth/login'];

export const proxy = (request: NextRequest) => {
  const {pathname} = request.nextUrl;
  const accessToken =
    request.cookies.get('accessToken')?.value ??
    request.headers.get('Authorization')?.replace('Bearer ', '');

  // localStorage는 미들웨어에서 접근 불가 → 쿠키 기반으로 확인
  // 토큰을 localStorage에 저장 중이므로 클라이언트 사이드에서 처리
  const isPublicPath = PUBLIC_PATHS.some((path) => pathname.startsWith(path));
  const isAuthPath = AUTH_PATHS.some((path) => pathname.startsWith(path));
  const isLoggedIn = !!accessToken;

  // 로그인한 유저가 로그인/회원가입 접근 시 홈으로
  if (isLoggedIn && isAuthPath) {
    return NextResponse.redirect(new URL('/homepage', request.url));
  }

  // 비로그인 유저가 보호된 페이지 접근 시 로그인으로
  if (!isLoggedIn && !isPublicPath) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
