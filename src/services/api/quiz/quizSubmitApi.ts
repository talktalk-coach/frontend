import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

export interface SubmitQuizRequest {
  wordId: number;
  selectedOption: string;
}

export interface SubmitQuizResponse {
  isCorrect: boolean;
  correctAnswer: string;
  todayCorrectCount: number;
  streak: string;
}

export const submitQuiz = async (
  body: SubmitQuizRequest
): Promise<SubmitQuizResponse> => {
  const response = await api.post<SubmitQuizResponse>(
    API_ENDPOINTS.quiz.submit,
    body
  );
  return response.data;
};
