'use client';
import {useEffect} from 'react';
import {useQuery, useMutation} from '@tanstack/react-query';
import {useRouter} from 'next/navigation';
import {getSpeechStatus} from '@/services/api/speech/speechStatusApi';
import {getSpeechResult} from '@/services/api/speech/speechResultApi';
import {ROUTES} from '@/constants/routes';
import {postSpeechAzure} from '@/services/api/speech/speechRecordApi';

export const useSpeechStatus = (speechId: number) => {
  const router = useRouter();

  const query = useQuery({
    queryKey: ['speechStatus', speechId],
    queryFn: () => getSpeechStatus(speechId),
    refetchInterval: (query) => {
      const status = query.state.data?.status;
      if (status === 'COMPLETED' || status === 'FAILED') return false;
      return 10000;
    },
    enabled: !!speechId,
  });

  useEffect(() => {
    if (query.data?.status === 'COMPLETED') {
      console.log('[speechStatus] 응답:', query.data);
      console.log('[speechStatus] status:', query.data.status);
      router.push(ROUTES.RESULT(query.data.speechId));
    }
    if (query.data?.status === 'FAILED') {
      router.push(`${ROUTES.RECORD}?error=analysis_failed`);
    }
  }, [query.data?.status]);

  return query;
};

export const useSpeechResult = (speechId: number) => {
  return useQuery({
    queryKey: ['speechResult', speechId],
    queryFn: () => getSpeechResult(speechId),
    enabled: !!speechId,
  });
};

export const useSubmitSpeechMutation = () =>
  useMutation({
    mutationFn: postSpeechAzure,
  });
