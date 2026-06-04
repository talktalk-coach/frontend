import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

interface SendEmailCodeRequest {
  email: string;
}

export const sendEmailCode = async (
  body: SendEmailCodeRequest
): Promise<void> => {
  await api.post(API_ENDPOINTS.auth.emailSend, body);
};
