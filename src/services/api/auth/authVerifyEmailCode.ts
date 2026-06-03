import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

interface VerifyEmailCodeRequest {
  email: string;
  code: string;
}

export const verifyEmailCode = async (
  body: VerifyEmailCodeRequest
): Promise<void> => {
  await api.post(API_ENDPOINTS.auth.emailVerify, body);
};
