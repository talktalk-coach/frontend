/** 성장치 히스토리 조회 API */
import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';
import type {GradeCode} from '@/constants/difficulty';

export interface GrowthHistoryScore {
  index: number;
  date: string; // 'yyyy-MM-dd'
  averageScore: number;
}

export interface GrowthHistoryItem {
  targetLevel: GradeCode;
  levelLabel: string;
  scores: GrowthHistoryScore[];
}

export type GrowthHistoryResponse = GrowthHistoryItem[];

export const getGrowthHistory = async (): Promise<GrowthHistoryResponse> => {
  const response = await api.get<GrowthHistoryResponse>(
    API_ENDPOINTS.users.growthHistory
  );
  return response.data;
};
