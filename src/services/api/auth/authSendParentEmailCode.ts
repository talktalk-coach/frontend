import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

interface SendParentEmailCodeRequest {
  email: string;
}

export const sendParentEmailCode = async (
  body: SendParentEmailCodeRequest
): Promise<void> => {
  await api.post(API_ENDPOINTS.auth.emailParentSend, body);
};
