import IncreaseIcon from '@/assets/homepage/increase.svg';

type MonthlyScoreProps = {
  score: number;
  changeRate: number;
};

export const MonthlyScore = ({score, changeRate}: MonthlyScoreProps) => {
  return (
    <section className='bg-primary shadow-soft flex flex-col gap-2 rounded-4xl p-6 text-white'>
      <h2 className='font-bold opacity-90'>월간 평균 점수</h2>

      <div className='flex items-end gap-1'>
        <span className='font-pretendard text-4xl'>{score}</span>
        <span className='mb-0.5 text-lg opacity-80'>점</span>
      </div>

      <div className='flex w-fit items-center gap-1 rounded-full bg-[#6D774F] px-4 py-1.5 text-xs font-extrabold'>
        <IncreaseIcon />+ {changeRate}% 지난달 대비
      </div>
    </section>
  );
};
