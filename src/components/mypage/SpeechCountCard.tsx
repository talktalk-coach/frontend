import StatsIcon from '@/assets/mypage/stats.svg';

interface SpeechCountCardProps {
  count: number;
}

/* 사용자의 전체 스피치 횟수를 표시하는 카드 */
export const SpeechCountCard = ({count}: SpeechCountCardProps) => {
  return (
    <div className='bg-surface relative w-full overflow-hidden rounded-[48px] p-8'>
      <h2 className='font-pretendard text-m font-semibold tracking-widest text-[#46483C] uppercase'>
        전체 스피치 횟수
      </h2>
      <p className='text-primary mt-2 text-4xl font-extrabold tracking-tighter'>
        {count}
      </p>

      <StatsIcon
        className='pointer-events-none absolute right-6 bottom-5 h-[85px] w-[85px] opacity-[0.05]'
        aria-hidden='true'
      />
    </div>
  );
};
