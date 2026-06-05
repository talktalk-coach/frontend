'use client';

import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {getUserInfo} from '@/services/api/user/userInfoApi';
import {patchUserGrade} from '@/services/api/user/userGradeApi';
import {patchUserNickname} from '@/services/api/user/userNicknameApi';
import {postUserImage} from '@/services/api/user/userImageApi';
import {deleteUser} from '@/services/api/user/userWithdrawApi';
import {getUserSpeeches} from '@/services/api/user/userSpeechesApi';
import type {SpeechListParams} from '@/services/api/user/userSpeechesApi';
import {useUserStore} from '@/stores/userStore';
import {removeTokens} from '@/utils/auth/token';

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

/** 닉네임 수정 — 성공 시 store 닉네임을 즉시 갱신하고 내 정보 캐시를 무효화한다. */
export const useUpdateNicknameMutation = () => {
  const queryClient = useQueryClient();
  const setNickname = useUserStore((state) => state.setNickname);

  return useMutation({
    mutationFn: patchUserNickname,
    onSuccess: (_data, variables) => {
      setNickname(variables.nickname);
      queryClient.invalidateQueries({queryKey: USER_INFO_QUERY_KEY});
    },
  });
};

/** 프로필 이미지 업로드 — 성공 시 내 정보 캐시를 무효화해 새 이미지를 반영한다. */
export const useUploadProfileImageMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postUserImage,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: USER_INFO_QUERY_KEY});
    },
  });
};

/** 회원 탈퇴 — 성공 시 토큰·스토어·쿼리 캐시를 모두 비운다. */
export const useDeleteUserMutation = () => {
  const queryClient = useQueryClient();
  const resetUser = useUserStore((state) => state.resetUser);

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      removeTokens();
      resetUser();
      queryClient.clear();
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
