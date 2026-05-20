import Link from 'next/link';
import {SpeechHistoryCard} from '@/components/mypage/SpeechHistoryCard';
import {ROUTES} from '@/constants/routes';
import type {SpeechHistoryItem} from '@/mocks/mypage';
import ArrowUpRight from '@/assets/mypage/arrow-up-right.svg';

interface SpeechHistorySectionProps {
  speeches: SpeechHistoryItem[];
}

export const SpeechHistorySection = ({speeches}: SpeechHistorySectionProps) => {
  return (
    <section className='flex w-full flex-col gap-6'>
      <div className='flex items-end justify-between px-1'>
        <h2 className='text-primary text-xl font-extrabold tracking-tight'>
          과거 스피치 결과
        </h2>
        <Link
          href={ROUTES.MYPAGE_HISTORY}
          className='text-primary flex items-center gap-1 text-sm font-extrabold tracking-tight'>
          View All
          <ArrowUpRight className='h-3.5 w-3.5' />
        </Link>
      </div>

      <div className='flex flex-col gap-3'>
        {speeches.slice(0, 3).map((speech) => (
          <SpeechHistoryCard key={speech.id} speech={speech} />
        ))}
      </div>
    </section>
  );
};
