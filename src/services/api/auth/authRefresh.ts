import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

interface RefreshRequest {
  refreshToken: string;
}

interface RefreshResponse {
  accessToken: string;
  refreshToken: string;
}

export const refresh = async (
  body: RefreshRequest
): Promise<RefreshResponse> => {
  const response = await api.post<RefreshResponse>(
    API_ENDPOINTS.auth.refresh,
    body
  );
  return response.data;
};
