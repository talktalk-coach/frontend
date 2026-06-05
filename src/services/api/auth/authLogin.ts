import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  nickname: string;
  profileImageUrl: string;
  newUser: boolean;
}

export const login = async (body: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>(
    API_ENDPOINTS.auth.login,
    body
  );
  return response.data;
};
