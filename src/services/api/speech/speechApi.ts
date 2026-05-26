/** 스피치 관련 API 호출 함수 모음 */
import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

interface PostSpeechAzureRequest {
  audio: Blob;
  title: string;
  duration: number;
  category: string;
}

/** POST /api/speech/azure 응답: 생성된 speechId */
type PostSpeechAzureResponse = number;

/**
 * 스피치 분석을 요청한다.
 * 오디오는 multipart/form-data body로, title/duration/category는
 * query parameter로 전송한다.
 */
export const postSpeechAzure = async ({
  audio,
  title,
  duration,
  category,
}: PostSpeechAzureRequest): Promise<PostSpeechAzureResponse> => {
  const formData = new FormData();
  formData.append('audio', audio, 'recording.wav');

  const response = await api.post<PostSpeechAzureResponse>(
    API_ENDPOINTS.speech.azure,
    formData,
    {params: {title, duration, category}}
  );

  return response.data;
};
