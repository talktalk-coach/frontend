import type {SpeechGrade} from '@/mocks/mypage';

interface GradeBadgeProps {
  grade: SpeechGrade;
}

/**
 * 스피치 등급을 표시하는 뱃지 컴포넌트.
 * bad, normal, good, excellent, mastery
 */

const GRADE_STYLES: Record<SpeechGrade, string> = {
  Bad: 'bg-bad-bg text-bad-text',
  Normal: 'bg-normal-bg text-normal-text',
  Good: 'bg-good-bg text-good-text',
  Excellent: 'bg-excellent-bg text-excellent-text',
  Mastery: 'bg-mastery-bg text-mastery-text',
};

export const GradeBadge = ({grade}: GradeBadgeProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-extrabold ${GRADE_STYLES[grade]}`}>
      {grade}
    </span>
  );
};
