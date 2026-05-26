/** 스피치 관련 React Query 훅 모음 */
'use client';
import {useMutation} from '@tanstack/react-query';
import {postSpeechAzure} from '@/services/api/speech/speechApi';

/**
 * 스피치 분석 요청 mutation 훅.
 * 성공 시 응답으로 speechId(number)를 반환한다.
 */
export const useSubmitSpeechMutation = () =>
  useMutation({
    mutationFn: postSpeechAzure,
  });
