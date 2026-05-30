import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

export interface SpeechResultResponse {
  speechId: number;
  title: string;
  duration: number;
  createdAt: string;
  averageScore: number;
  accuracyScore: number;
  fluencyScore: number;
  prosodyScore: number;
  vocabularyScore: number;
  logicScore: number;
  structureScore: number;
  wordCount: number;
  vocabularyFeedback: string;
  sentenceStructureFeedback: string;
  logicFeedback: string;
  overallFeedback: string;
  customPlan: string;
  transcript: string;
  progress: string;
}

export const getSpeechResult = async (
  speechId: number
): Promise<SpeechResultResponse> => {
  const response = await api.get(API_ENDPOINTS.speech.result(speechId));
  return response.data;
};
