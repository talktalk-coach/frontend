/** API 엔드포인트 URL 모음 */
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const API_ENDPOINTS = {
  auth: {
    quickSignup: '/api/test/quick-signup',
    login: '/api/auth/login',
  },
  speech: {
    azure: `/api/speech/azure`,
  },
};
