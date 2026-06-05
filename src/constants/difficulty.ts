import type {TargetLevel} from '@/types/common';
import BookIcon from '@/assets/difficulty/book.svg';
import ChildIcon from '@/assets/difficulty/child.svg';
import GraduationCapIcon from '@/assets/difficulty/graduation-cap.svg';
import MedalIcon from '@/assets/difficulty/medal.svg';
import PencilIcon from '@/assets/difficulty/pencil.svg';

export type DifficultyLevel =
  | '초등학교 1-2학년'
  | '초등학교 3-4학년'
  | '초등학교 5-6학년'
  | '중학교 1-2학년'
  | '중학교 3학년';

export interface DifficultyOption {
  level: DifficultyLevel;
  description: string;
  icon: typeof BookIcon;
}

/* 학습 수준 5단계 정의 */
export const DIFFICULTY_OPTIONS: DifficultyOption[] = [
  {
    level: '초등학교 1-2학년',
    description: '또박또박 문장으로 말하는 즐거움을 배우는 단계',
    icon: ChildIcon,
  },
  {
    level: '초등학교 3-4학년',
    description: '상황에 맞는 표현으로 자신감 있게 의사를 전달하는 단계',
    icon: PencilIcon,
  },
  {
    level: '초등학교 5-6학년',
    description: '주장과 근거를 갖추어 논리적으로 말하는 능력을 키우는 단계',
    icon: GraduationCapIcon,
  },
  {
    level: '중학교 1-2학년',
    description: '자신의 의견을 논리적으로 펼치고 체계적으로 토론하는 단계',
    icon: BookIcon,
  },
  {
    level: '중학교 3학년',
    description: '성숙한 사고와 비판적 시각으로 소통하는 단계',
    icon: MedalIcon,
  },
];

/* 화면 표시용 한글 라벨 → 서버 enum 코드 (PATCH 요청 시 사용) */
export const GRADE_LABEL_TO_CODE: Record<DifficultyLevel, TargetLevel> = {
  '초등학교 1-2학년': 'ELEM_1_2',
  '초등학교 3-4학년': 'ELEM_3_4',
  '초등학교 5-6학년': 'ELEM_5_6',
  '중학교 1-2학년': 'MIDDLE_1_2',
  '중학교 3학년': 'MIDDLE_3',
};

/* 서버 enum 코드 → 화면 표시용 한글 라벨 (GET 응답 매핑 시 사용) */
export const GRADE_CODE_TO_LABEL: Record<TargetLevel, DifficultyLevel> = {
  ELEM_1_2: '초등학교 1-2학년',
  ELEM_3_4: '초등학교 3-4학년',
  ELEM_5_6: '초등학교 5-6학년',
  MIDDLE_1_2: '중학교 1-2학년',
  MIDDLE_3: '중학교 3학년',
};
