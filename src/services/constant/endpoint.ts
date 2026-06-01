/** API 엔드포인트 URL 모음 */
export const API_ENDPOINTS = {
  auth: {
    quickSignup: '/api/test/quick-signup',
    login: '/api/auth/login',
    logout: '/api/auth/logout',
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
