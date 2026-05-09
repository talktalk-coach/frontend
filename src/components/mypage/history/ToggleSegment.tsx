'use client';

type Tab = 'date' | 'score';

interface ToggleSegmentProps {
  tab: Tab;
  onChange: (tab: Tab) => void;
}

export const ToggleSegment = ({tab, onChange}: ToggleSegmentProps) => {
  return (
    <div className='bg-input relative flex w-32 rounded-full p-1.5 shadow-sm'>
      {/* 움직이는 배경 */}
      <div
        className={`bg-primary absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full shadow-sm transition-all duration-300 ease-in-out ${
          tab === 'date' ? 'left-1' : 'left-[calc(50%)]'
        }`}
      />

      <button
        role='tab'
        aria-selected={tab === 'date'}
        onClick={() => onChange('date')}
        className={`relative z-10 flex-1 py-1.5 text-xs font-medium transition-colors duration-300 ${
          tab === 'date' ? 'text-white' : 'text-primary2'
        }`}>
        날짜
      </button>

      <button
        role='tab'
        aria-selected={tab === 'score'}
        onClick={() => onChange('score')}
        className={`relative z-10 flex-1 py-1.5 text-xs font-medium transition-colors duration-300 ${
          tab === 'score' ? 'text-white' : 'text-primary2'
        }`}>
        점수
      </button>
    </div>
  );
};
