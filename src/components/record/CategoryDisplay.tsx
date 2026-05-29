'use client';

import {SPEECH_CATEGORIES, type SpeechCategory} from '@/constants/speech';

interface CategoryDisplayProps {
  category: SpeechCategory;
  onClick: () => void;
}

/**
 * 녹음 시작 전, 선택된 카테고리를 표시하는 칩.
 * 클릭하면 카테고리 모달을 다시 열어 변경할 수 있다.
 */
export const CategoryDisplay = ({category, onClick}: CategoryDisplayProps) => {
  const label = SPEECH_CATEGORIES.find((c) => c.value === category)?.label;

  return (
    <button
      type='button'
      onClick={onClick}
      aria-label={`선택된 카테고리: ${label}. 변경하려면 누르세요`}
      className='bg-primary mt-6 rounded-full px-4 py-1.5'>
      <span className='font-pretendard text-xs font-bold tracking-widest text-white'>
        {label}
      </span>
    </button>
  );
};
