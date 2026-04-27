import Link from 'next/link';
import ArrowRight from '@/assets/mypage/arrow-right.svg';
import {ROUTES} from '@/constants/routes';

/* "나의 학습 통계 보기" 페이지로 이동하는 CTA 버튼 */
export const StatsButton = () => {
  return (
    <Link
      href={ROUTES.MYPAGE_STATS}
      className='bg-primary flex w-full items-center justify-between rounded-[48px] px-5 py-[18px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]'>
      <span className='flex-1 text-lg font-semibold tracking-wide text-white'>
        나의 학습 통계 보기
      </span>
      <ArrowRight className='h-4 w-4' />
    </Link>
  );
};
