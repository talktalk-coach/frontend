import {CircleIcon} from '@/components/common/display/CircleIcon';

export const TopSection = () => {
  return (
    <div className='flex w-full flex-col items-center gap-4'>
      <CircleIcon />
      <div className='text-primary text-lg font-bold'>
        AI 스피치 교정 서비스
      </div>
    </div>
  );
};
