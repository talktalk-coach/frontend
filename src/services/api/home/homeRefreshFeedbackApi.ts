import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

export const postHomeRefreshFeedback = async (): Promise<void> => {
  await api.post(API_ENDPOINTS.home.refreshFeedback);
};
