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
  },
};
