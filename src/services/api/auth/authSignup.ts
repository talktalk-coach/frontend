import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

interface SignupRequest {
  email: string;
  password: string;
  nickname: string;
  birthDate: string;
  parentEmail?: string;
}

export const signup = async (body: SignupRequest): Promise<void> => {
  await api.post(API_ENDPOINTS.auth.signup, body);
};
