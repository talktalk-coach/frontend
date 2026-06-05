/** API 엔드포인트 URL 모음 */
export const API_ENDPOINTS = {
  auth: {
    emailParentSend: '/api/auth/email/parent/send',
    emailParentVerify: '/api/auth/email/parent/verify',
    emailSend: '/api/auth/email/send',
    emailVerify: '/api/auth/email/verify',
    login: '/api/auth/login',
    logout: '/api/auth/logout',
    quickSignup: '/api/auth/quick-signup',
    refresh: '/api/auth/refresh',
    signup: '/api/auth/signup',
  },
  speech: {
    azure: `/api/speech/azure`,
    status: (speechId: number) => `/api/speech/status/${speechId}`,
    result: (speechId: number) => `/api/speech/results/${speechId}`,
  },
  home: {
    root: `/api/home`,
    refreshFeedback: `/api/home/refresh-feedback`,
  },
  quiz: {
    today: `/api/quiz/today`,
    submit: `/api/quiz/submit`,
  },
  users: {
    me: '/api/users/me',
    grade: '/api/users/me/grade',
    speeches: `/api/users/me/speeches`,
    nickname: '/api/users/me/nickname',
    image: '/api/users/me/image',
    statistics: '/api/users/me/statistics',
    growthHistory: '/api/users/me/growth-history',
  },
};
