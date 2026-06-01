'use client';
import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {getUserInfo} from '@/services/api/user/userInfoApi';
import {patchUserGrade} from '@/services/api/user/userGradeApi';
import {getUserSpeeches} from '@/services/api/user/userSpeechesApi';
import type {SpeechListParams} from '@/services/api/user/userSpeechesApi';

const USER_INFO_QUERY_KEY = ['userInfo'] as const;

/** 내 정보 조회 (GET /api/users/me) */
export const useUserInfo = () =>
  useQuery({
    queryKey: USER_INFO_QUERY_KEY,
    queryFn: getUserInfo,
  });

/**
 * 학습 수준 변경
 * 성공 시 내 정보 캐시를 무효화해 변경된 학년이 즉시 반영되게 한다.
 */
export const useUpdateUserGradeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchUserGrade,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: USER_INFO_QUERY_KEY});
    },
  });
};

//스피치 목록 조회
export const useSpeechList = (params?: SpeechListParams) => {
  return useQuery({
    queryKey: ['speechList', params],
    queryFn: () => getUserSpeeches(params),
  });
};
