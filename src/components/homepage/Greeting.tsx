export const Greeting = ({userName}: {userName: string}) => {
  return (
    <section className='flex flex-col gap-2'>
      <h2 className='text-primary text-3xl font-extrabold'>
        Hello, {userName}.
      </h2>
      <p className='text-primary2 flex flex-col gap-1 text-xs'>
        <span>작은 연습이 큰 변화를 만듭니다.</span>
        <span>오늘도 스피치 연습으로 하루를 빛내볼까요?</span>
      </p>
    </section>
  );
};
