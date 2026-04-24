import {CircleIcon} from '@/components/common/display/CircleIcon';

export const LoginHeader = () => {
  return (
    <div className='flex flex-col items-center'>
      <CircleIcon variant='medium' />
      <div className='mt-4 flex flex-col items-center gap-1'>
        <span className='text-2xl font-bold'>다시 오셨군요?</span>
        <span className='text-primary2 text-shadow text-sm font-bold'>
          당신의 목소리를 완성하는 첫 걸음
        </span>
      </div>
    </div>
  );
};
