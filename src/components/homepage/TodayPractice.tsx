import TimerIcon from '@/assets/homepage/timer.svg';

type TodayPracticeProps = {
  minutes: number;
};

export const TodayPractice = ({minutes}: TodayPracticeProps) => {
  return (
    <section className='bg-accent text-brown shadow-soft flex justify-between rounded-4xl p-6'>
      <div className='flex flex-col'>
        <h2 className='text-xs font-bold opacity-60'>오늘의 연습</h2>
        <span className='text-xl font-extrabold'>{minutes}분 달성</span>
      </div>
      <TimerIcon className='mt-3' />
    </section>
  );
};
