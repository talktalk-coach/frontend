import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';
import {SpeechStatus} from '@/types/common';

export interface SpeechStatusResponse {
  speechId: number;
  status: SpeechStatus;
  message: string;
}

export const getSpeechStatus = async (
  speechId: number
): Promise<SpeechStatusResponse> => {
  const response = await api.get(API_ENDPOINTS.speech.status(speechId));
  return response.data;
};
