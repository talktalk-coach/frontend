import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

interface VerifyParentEmailCodeRequest {
  email: string;
  code: string;
}

export const verifyParentEmailCode = async (
  body: VerifyParentEmailCodeRequest
): Promise<void> => {
  await api.post(API_ENDPOINTS.auth.emailParentVerify, body);
};
