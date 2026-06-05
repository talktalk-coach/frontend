/** 학습 통계 조회 API */
import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

interface ScoreSet {
  accuracyScore: number;
  fluencyScore: number;
  prosodyScore: number;
  vocabularyScore: number;
  logicScore: number;
  structureScore: number;
  averageScore: number;
}

interface DailyScore extends ScoreSet {
  date: string; // 'yyyy-MM-dd'
}

interface MasteryMap {
  accuracy: number;
  fluency: number;
  prosody: number;
  vocabulary: number;
  logic: number;
  structure: number;
}

export interface StatisticsResponse {
  summaryTitle: string;
  summaryDetail: string;
  growthRate: number;
  masteryMap: MasteryMap;
  dailyScores: DailyScore[];
  totalScores: ScoreSet;
}

export const getStatistics = async (): Promise<StatisticsResponse> => {
  const response = await api.get<StatisticsResponse>(
    API_ENDPOINTS.users.statistics
  );
  return response.data;
};
