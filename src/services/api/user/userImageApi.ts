/** 프로필 이미지 업로드 API 호출 함수 */
import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

export const postUserImage = async (image: File): Promise<void> => {
  const formData = new FormData();
  formData.append('image', image);
  await api.post(API_ENDPOINTS.users.image, formData);
};
