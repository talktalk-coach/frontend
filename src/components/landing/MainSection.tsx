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

      <div className='flex w-full flex-col items-center gap-4'>
        <h1 className='text-primary text-xl leading-7 font-extrabold tracking-[-0.5px]'>
          AI 스피치 교정 서비스
        </h1>
        <p className='text-primary2/80 text-center text-base leading-[26px]'>
          당신의 목소리에 자신감을 더하세요.
          <br />
          전문적인 AI 코칭으로 완성되는 완벽한 발음과 톤
        </p>
      </div>
    </div>
  );
};
