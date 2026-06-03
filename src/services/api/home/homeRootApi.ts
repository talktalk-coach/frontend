import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

interface RadarAverage {
  basedOnCount: number;
  accuracyScore: number;
  fluencyScore: number;
  prosodyScore: number;
  vocabularyScore: number;
  logicScore: number;
  structureScore: number;
  averageScore: number;
}

export interface MonthlyScore {
  yearMonth: string;
  averageScore: number;
  practiceCount: number;
  message: string;
}

export interface GetHomeResponse {
  radarAverage: RadarAverage;
  monthlyScores: MonthlyScore[];
  todayPracticeMinutes: number;
  summaryFeedback: string[];
  totalCount: number;
}

export const getHome = async (): Promise<GetHomeResponse> => {
  const response = await api.get<GetHomeResponse>(API_ENDPOINTS.home.root);
  return response.data;
};
