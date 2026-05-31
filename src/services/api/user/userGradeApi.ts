/** 유저 학습 수준 수정 API 호출 함수 */
import {api} from '@/services/lib/axios';
import {API_ENDPOINTS} from '@/services/constant/endpoint';
import type {GradeCode} from '@/constants/difficulty';

export interface PatchUserGradeRequest {
  targetLevel: GradeCode;
}

export const patchUserGrade = async ({
  targetLevel,
}: PatchUserGradeRequest): Promise<void> => {
  await api.patch(API_ENDPOINTS.users.grade, {targetLevel});
};
