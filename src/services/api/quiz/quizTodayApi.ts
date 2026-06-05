import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

export interface QuizItem {
  wordId: number;
  description: string;
  options: string[];
  answered: boolean;
  isCorrect: boolean | null;
}

export const getTodayQuiz = async (): Promise<QuizItem[]> => {
  const response = await api.get<QuizItem[]>(API_ENDPOINTS.quiz.today);
  return response.data;
};
