import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';
import {SpeechStatus, TargetLevel} from '@/types/common';

export interface Speech {
  speechId: number;
  title: string;
  averageScore: number;
  duration: number;
  targetLevel: TargetLevel;
  status: SpeechStatus;
  createdAt: string;
}

export interface UserSpeechesResponse {
  speeches: Speech[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
}

export interface SpeechListParams {
  page?: number;
  size?: number;
}

export const getUserSpeeches = async (
  params?: SpeechListParams
): Promise<UserSpeechesResponse> => {
  const response = await api.get(API_ENDPOINTS.users.speeches, {params});
  return response.data;
};
