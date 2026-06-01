'use client';
import {useEffect} from 'react';
import {useQuery, useMutation} from '@tanstack/react-query';
import {getHome} from '@/services/api/home/homeRootApi';
import {postHomeRefreshFeedback} from '@/services/api/home/homeRefreshFeedbackApi';

export const usePostHomeRefreshFeedback = () =>
  useMutation({
    mutationFn: postHomeRefreshFeedback,
  });

export const useHome = () => {
  const {mutate: refreshFeedback} = usePostHomeRefreshFeedback();

  const query = useQuery({
    queryKey: ['home'],
    queryFn: getHome,
  });

  useEffect(() => {
    if (query.data?.summaryFeedback === null) {
      refreshFeedback();
    }
  }, [query.data?.summaryFeedback, refreshFeedback]);

  return query;
};
