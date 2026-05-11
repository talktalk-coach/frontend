import {ArrowUp, ArrowDown} from 'lucide-react';

type UpDownButtonProps = {
  selected: 'up' | 'down';
  onUpClick?: () => void;
  onDownClick?: () => void;
};

export const UpDownButton = ({
  selected,
  onUpClick,
  onDownClick,
}: UpDownButtonProps) => {
  return (
    <div className='bg-input inline-flex h-8 items-center gap-1 rounded-full px-2.5 shadow-sm'>
      {/* 위쪽 화살표 버튼 */}
      <button
        onClick={onUpClick}
        className={`rounded-full transition-colors ${
          selected === 'up' ? 'text-primary' : 'text-gray-400'
        }`}
        aria-label='Increase'>
        <ArrowUp size={19} strokeWidth={2.5} />
      </button>

      {/* 중앙 구분선 */}
      <div className='mx-1 h-4 w-px bg-gray-300' />

      {/* 아래쪽 화살표 버튼 */}
      <button
        onClick={onDownClick}
        className={`rounded-full transition-colors ${
          selected === 'down' ? 'text-primary' : 'text-gray-400'
        }`}
        aria-label='Decrease'>
        <ArrowDown size={19} strokeWidth={2.5} />
      </button>
    </div>
  );
};
