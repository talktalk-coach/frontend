'use client';
import {useQuery} from '@tanstack/react-query';
import {getUserSpeeches} from '@/services/api/user/userSpeechesApi';
import type {SpeechListParams} from '@/services/api/user/userSpeechesApi';

export const useSpeechList = (params?: SpeechListParams) => {
  return useQuery({
    queryKey: ['speechList', params],
    queryFn: () => getUserSpeeches(params),
  });
};
