/** 유저 닉네임 수정 API 호출 함수 */
import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';

export interface PatchUserNicknameRequest {
  nickname: string;
}

export const patchUserNickname = async ({
  nickname,
}: PatchUserNicknameRequest): Promise<void> => {
  await api.patch(API_ENDPOINTS.users.nickname, {nickname});
};
