/** 학습 통계 상세 관련 React Query 훅 모음 */
'use client';

import {useQuery} from '@tanstack/react-query';

import {getStatistics} from '@/services/api/user/userStatisticsApi';
import {getGrowthHistory} from '@/services/api/user/userGrowthHistoryApi';

const STATISTICS_QUERY_KEY = ['statistics'];
const GROWTH_HISTORY_QUERY_KEY = ['growthHistory'];

export const useStatistics = () =>
  useQuery({
    queryKey: STATISTICS_QUERY_KEY,
    queryFn: getStatistics,
  });

export const useGrowthHistory = () =>
  useQuery({
    queryKey: GROWTH_HISTORY_QUERY_KEY,
    queryFn: getGrowthHistory,
  });
