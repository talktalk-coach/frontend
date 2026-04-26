'use client';

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
      className={`relative flex w-full items-center gap-4 rounded-[32px] p-6 transition-all duration-300 ${
        isSelected
          ? 'bg-primary-gradient scale-[1.02] shadow-[0px_15px_30px_-10px_rgba(72,84,34,0.3)] ring-4 ring-[#BFCD8F]/30'
          : 'bg-white shadow-[0px_10px_40px_-10px_rgba(72,84,34,0.08)]'
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
    </button>
  );
};
