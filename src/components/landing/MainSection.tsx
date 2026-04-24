import Logo from '@/assets/icons/logo.svg';

export const MainSection = () => {
  return (
    <div className='flex w-full flex-col items-center gap-4'>
      <Logo />
      <div className='text-primary2 text-center text-sm'>
        <p>
          당신의 목소리에 자신감을 더하세요.
          <br />
          전문적인 AI 코칭으로 완성되는 완벽한 발음과 톤
        </p>
      </div>
    </div>
  );
};
