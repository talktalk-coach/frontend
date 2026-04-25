'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {DifficultyCard} from '@/components/difficulty/DifficultyCard';
import {DIFFICULTY_OPTIONS} from '@/constants/difficulty';
import type {DifficultyLevel} from '@/constants/difficulty';
import {ROUTES} from '@/constants/routes';

/**
 * - 학년 선택 후 학습 시작하기 버튼 클릭 시 홈페이지로 이동
 * - TODO: 학습 수준 저장 API 연동 (PATCH /api/users/me/grade) 추후 구현 예정
 */
export const DifficultySelectionList = () => {
  const router = useRouter();
  const [selectedLevel, setSelectedLevel] = useState<DifficultyLevel | null>(
    null
  );

  const handleCardSelect = (level: DifficultyLevel): void => {
    setSelectedLevel(level);
  };

  const handleConfirmClick = (): void => {
    if (!selectedLevel) return;

    /* TODO: 학습 수준 저장 API 연동 */
    console.log('학습 수준 선택:', selectedLevel);
    router.push(ROUTES.HOMEPAGE);
  };

  const isButtonDisabled = selectedLevel === null;

  return (
    <div className='flex w-full flex-col gap-4'>
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
        학습 시작하기
      </button>
    </div>
  );
};
