'use client';

import CheckIcon from '@/assets/difficulty/check.svg';
import type {DifficultyOption} from '@/constants/difficulty';

interface DifficultyCardProps {
  option: DifficultyOption;
  isSelected: boolean;
  onSelect: () => void;
}

/* 학습 수준 카드 */
export const DifficultyCard = ({
  option,
  isSelected,
  onSelect,
}: DifficultyCardProps) => {
  const Icon = option.icon;

  return (
    <button
      type='button'
      onClick={onSelect}
      aria-pressed={isSelected}
      className={`flex w-full items-center gap-6 rounded-[32px] p-6 shadow-[0px_10px_40px_-10px_rgba(72,84,34,0.08)] transition ${
        isSelected ? 'bg-primary-gradient ring-4 ring-[#BFCD8F]/30' : 'bg-white'
      }`}>
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${
          isSelected ? 'bg-[#DFEDAC]/20' : 'bg-[#EEEEE5]'
        }`}>
        <Icon
          className={`h-6 w-6 ${isSelected ? 'text-white' : 'text-primary'}`}
        />
      </div>

      <div className='flex flex-1 flex-col gap-1 text-left'>
        <h3
          className={`text-xl font-semibold ${
            isSelected ? 'text-white' : 'text-text'
          }`}>
          {option.level}
        </h3>
        <p
          className={`text-sm leading-relaxed font-semibold ${
            isSelected ? 'text-[#DFEDAC]' : 'text-[#46483C]'
          }`}>
          {option.description}
        </p>
      </div>

      {/* 우측 체크 아이콘 (선택 시) */}
      {isSelected && <CheckIcon className='h-5 w-5 shrink-0 text-white' />}
    </button>
  );
};
