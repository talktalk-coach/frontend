import {CircleIcon} from '@/components/common/display/CircleIcon';

export const MainSection = () => {
  return (
    <div className='flex w-full flex-col items-center gap-10'>
      <div className='relative flex items-center justify-center'>
        <div
          className='bg-primary/5 absolute inset-0 rounded-full blur-[32px]'
          aria-hidden
        />
        <CircleIcon variant='landing' />
      </div>

      <div className='flex w-full flex-col items-center gap-3'>
        <h1 className='text-centerleading-7 font-extrabold tracking-[-0.5px]'>
          <p className='text-primary2/80 text-center'>초·중학생을 위한</p>
          <p className='text-primary text-xl'>AI 스피치 교정 서비스</p>
        </h1>
        <p className='text-primary2/80 text- text-center leading-[26px]'>
          AI 스피치 코치와 자신감을 키워보세요
        </p>
      </div>
    </div>
  );
};
