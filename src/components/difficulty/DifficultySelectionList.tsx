'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import Toast from '@/components/common/Toast';
import {DifficultyCard} from '@/components/difficulty/DifficultyCard';
import {DIFFICULTY_OPTIONS, GRADE_LABEL_TO_CODE} from '@/constants/difficulty';
import type {DifficultyLevel} from '@/constants/difficulty';
import {ROUTES} from '@/constants/routes';
import {useUpdateUserGradeMutation} from '@/hooks/queries/useUser';

interface DifficultySelectionListProps {
  initialSelected?: DifficultyLevel | null;
  buttonText?: string;
  onConfirm?: (level: DifficultyLevel) => void;
}

/**
 * 학습 수준 선택 리스트.
 * 선택한 학년을 PATCH /api/users/me/grade로 저장한다.
 * - 가입 플로우: 저장 성공 시 홈페이지로 이동한다.
 * - 마이페이지 변경: onConfirm을 넘기면 저장 성공 후 onConfirm이 호출되어 마이페이지로 복귀한다.
 */
export const DifficultySelectionList = ({
  initialSelected = null,
  buttonText = '학습 시작하기',
  onConfirm,
}: DifficultySelectionListProps) => {
  const router = useRouter();
  const [selectedLevel, setSelectedLevel] = useState<DifficultyLevel | null>(
    initialSelected
  );
  const [isToastVisible, setIsToastVisible] = useState<boolean>(false);

  const {mutateAsync: updateGrade, isPending} = useUpdateUserGradeMutation();

  const handleCardSelect = (level: DifficultyLevel): void => {
    setSelectedLevel(level);
  };

  const handleConfirmClick = async (): Promise<void> => {
    if (!selectedLevel || isPending) return;

    try {
      await updateGrade({targetLevel: GRADE_LABEL_TO_CODE[selectedLevel]});

      if (onConfirm) {
        onConfirm(selectedLevel);
      } else {
        router.push(ROUTES.HOMEPAGE);
      }
    } catch {
      setIsToastVisible(true);
    }
  };

  const isButtonDisabled = selectedLevel === null || isPending;

  return (
    <div className='flex w-full flex-col gap-4'>
      <Toast
        variant='info'
        position='viewport-top'
        message='학습 수준 저장에 실패했습니다. 다시 시도해 주세요'
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />

      <div className='flex w-full flex-col gap-4'>
        {DIFFICULTY_OPTIONS.map((option) => (
          <DifficultyCard
            key={option.level}
            option={option}
            isSelected={selectedLevel === option.level}
            onSelect={() => handleCardSelect(option.level)}
          />
        ))}
      </div>

      <button
        type='button'
        onClick={handleConfirmClick}
        disabled={isButtonDisabled}
        className='bg-primary mt-8 flex w-full items-center justify-center rounded-full px-12 py-4 text-lg font-semibold text-white shadow-[0px_10px_40px_-10px_rgba(72,84,34,0.08)] transition disabled:cursor-not-allowed disabled:opacity-50'>
        {isPending ? '저장 중...' : buttonText}
      </button>
    </div>
  );
};
