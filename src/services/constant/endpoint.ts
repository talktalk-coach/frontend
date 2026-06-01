/** API 엔드포인트 URL 모음 */
export const API_ENDPOINTS = {
  auth: {
    quickSignup: '/api/test/quick-signup',
    emailParentSend: '/api/auth/email/parent/send',
    emailParentVerify: '/api/auth/email/parent/verify',
    emailSend: '/api/auth/email/send',
    emailVerify: '/api/auth/email/verify',
    login: '/api/auth/login',
    logout: '/api/auth/logout',
    refresh: '/api/auth/refresh',
    signup: '/api/auth/signup',
  },
  speech: {
    azure: `/api/speech/azure`,
    status: (speechId: number) => `/api/speech/status/${speechId}`,
    result: (speechId: number) => `/api/speech/results/${speechId}`,
  },
  users: {
    me: '/api/users/me',
    grade: '/api/users/me/grade',
  },
};
