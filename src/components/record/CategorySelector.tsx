'use client';

import {SPEECH_CATEGORIES, type SpeechCategory} from '@/constants/speech';

interface CategorySelectorProps {
  selected: SpeechCategory | null;
  onSelect: (category: SpeechCategory) => void;
}

export const CategorySelector = ({
  selected,
  onSelect,
}: CategorySelectorProps) => {
  return (
    <div className='mt-6 flex items-center gap-2'>
      {SPEECH_CATEGORIES.map(({value, label}) => {
        const isSelected = selected === value;
        return (
          <button
            key={value}
            type='button'
            onClick={() => onSelect(value)}
            aria-pressed={isSelected}
            className={`font-pretendard rounded-full px-4 py-1.5 text-xs font-bold tracking-widest transition-colors ${
              isSelected
                ? 'bg-primary text-white'
                : 'bg-primary/20 text-primary'
            }`}>
            {label}
          </button>
        );
      })}
    </div>
  );
};
