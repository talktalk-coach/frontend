import {CircleIcon} from '@/components/common/display/CircleIcon';

export const LoginHeader = () => {
  return (
    <div className='mb-6 flex flex-col items-center'>
      <div className='relative inline-flex'>
        <div
          className='bg-primary/5 absolute inset-0 rounded-full blur-[32px]'
          aria-hidden
        />
        <CircleIcon variant='auth' />
      </div>
      <div className='mt-6 flex flex-col items-center gap-1'>
        <h1 className='text-primary text-2xl font-extrabold tracking-[-0.5px]'>
          다시 오셨군요?
        </h1>
        <span className='text-primary2/80 text-base'>
          당신의 목소리를 완성하는 첫 걸음
        </span>
      </div>
    </div>
  );
};
