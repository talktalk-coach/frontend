'use client';

import {SPEECH_CATEGORIES, type SpeechCategory} from '@/constants/speech';

interface CategoryModalProps {
  isOpen: boolean;
  onSelect: (category: SpeechCategory) => void;
  onClose: () => void;
}

/**
 * 스피치 카테고리 선택 바텀시트.
 * 사용자가 카테고리를 누르면 onSelect로 전달되고 모달은 자동으로 닫힌다.
 */
export const CategoryModal = ({
  isOpen,
  onSelect,
  onClose,
}: CategoryModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-label='스피치 카테고리 선택'
      className='animate-fadeIn fixed inset-0 z-50'>
      <div
        className='absolute inset-0 bg-black/25 backdrop-blur-sm'
        onClick={onClose}
      />

      <div className='animate-slideUp absolute right-0 bottom-0 left-0 p-3'>
        <div className='bg-background mb-3 overflow-hidden rounded-3xl shadow-xl'>
          <header className='border-b border-[#E9E9E0] px-6 py-4'>
            <h2 className='text-text text-center text-base font-bold'>
              스피치 유형을 선택해 주세요
            </h2>
          </header>
          {SPEECH_CATEGORIES.map(({value, label}, index) => (
            <button
              key={value}
              type='button'
              onClick={() => onSelect(value)}
              className={`text-primary hover:bg-surface w-full py-4 text-base font-semibold transition ${
                index < SPEECH_CATEGORIES.length - 1
                  ? 'border-b border-[#E9E9E0]'
                  : ''
              }`}>
              {label}
            </button>
          ))}
        </div>

        <button
          type='button'
          onClick={onClose}
          className='bg-background text-text hover:bg-surface w-full rounded-3xl py-4 text-base font-bold shadow-xl transition'>
          취소
        </button>
      </div>
    </div>
  );
};
