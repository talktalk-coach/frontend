/** 인증 관련 React Query 훅 모음(로딩중인지, 성공했는지, 실패했는지 상태관리) */
'use client';
import {useMutation} from '@tanstack/react-query';
import {quickSignup} from '@/services/api/auth/authApi';

export const useQuickSignup = () =>
  useMutation({
    mutationFn: quickSignup,
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
    },
  });
