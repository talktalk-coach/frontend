'use client';

import {useRouter} from 'next/navigation';
import ParrotIcon from '@/assets/icons/Parrot.svg';
import {mockScore, mockPerformanceMetrics} from '@/mocks/result';

const SHARE_QUOTE = '우리의 목소리는 진심을 전달하는 가장 강력한 도구입니다.';
const TOP_METRIC_COUNT = 5;

const topMetrics = [...mockPerformanceMetrics]
  .sort((a, b) => b.value - a.value)
  .slice(0, TOP_METRIC_COUNT);

export default function ResultSharePage() {
  const router = useRouter();

  const handleClose = () => router.back();

  const handleSaveImage = () => {
    // html2canvas 등 활용한 이미지 저장 로직 연동
  };

  return (
    <main className='bg-background flex min-h-screen flex-col items-center px-4 py-5'>
      <article
        aria-label='분석 결과 공유 카드'
        className='w-full max-w-[448px] overflow-hidden rounded-[48px] bg-white shadow-[0px_48px_48px_-12px_rgba(26,28,23,0.04)]'>
        <div className='bg-surface relative h-[88px] w-full'>
          <div
            className='from-primary to-primary-gradient absolute inset-0 bg-gradient-to-br opacity-10'
            aria-hidden='true'
          />
          <span className='bg-accent absolute bottom-[29px] left-[30px] inline-flex items-center rounded-full px-4 py-1'>
            <span className='font-pretendard text-brown text-[10px] font-bold tracking-[1px] uppercase'>
              Daily Report
            </span>
          </span>
          <ParrotIcon
            className='absolute right-6 bottom-0 object-contain opacity-85'
            width={92}
            height={83}
            aria-hidden='true'
          />
        </div>

        <div className='flex flex-col gap-12 px-8 pt-10 pb-12'>
          <figure>
            <svg
              width='24'
              height='18'
              viewBox='0 0 24 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'>
              <path
                d='M0 18V10.8C0 8.76 0.48 6.9 1.44 5.22C2.4 3.54 3.84 2.1 5.76 0.9L7.68 3.06C6.24 3.9 5.16 4.86 4.44 5.94C3.72 7.02 3.36 8.28 3.36 9.72H6.72V18H0ZM13.44 18V10.8C13.44 8.76 13.92 6.9 14.88 5.22C15.84 3.54 17.28 2.1 19.2 0.9L21.12 3.06C19.68 3.9 18.6 4.86 17.88 5.94C17.16 7.02 16.8 8.28 16.8 9.72H20.16V18H13.44Z'
                fill='#BFCD8F'
              />
            </svg>
            <blockquote className='text-text mt-2 text-2xl leading-[1.25] font-semibold tracking-[-0.6px]'>
              &ldquo;{SHARE_QUOTE}&rdquo;
            </blockquote>
          </figure>

          <section aria-label='총점'>
            <div className='relative h-24'>
              <strong className='font-pretendard text-primary absolute top-0 left-0 text-[96px] leading-none font-extrabold tracking-[-4.8px]'>
                {mockScore}
              </strong>
              <span
                className='bg-brown absolute top-[-8px] left-[130px] h-3 w-3 rounded-full'
                aria-hidden='true'
              />
            </div>
          </section>

          <section aria-label='세부 지표'>
            <ul className='flex flex-col gap-8 pt-4'>
              {topMetrics.map((metric) => (
                <li key={metric.label}>
                  <div className='flex items-end justify-between'>
                    <span className='font-pretendard text-text text-sm font-semibold'>
                      {metric.label}
                    </span>
                    <span className='font-pretendard text-primary text-sm font-medium'>
                      <span className='sr-only'>{metric.label} 점수</span>
                      {metric.value}%
                    </span>
                  </div>
                  <div
                    role='progressbar'
                    aria-label={metric.label}
                    aria-valuenow={metric.value}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className='bg-gray relative mt-3 h-1.5 w-full overflow-hidden rounded-full'>
                    <div
                      className='bg-primary absolute inset-y-0 left-0 rounded-full'
                      style={{width: `${metric.value}%`}}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <footer className='flex items-center px-8 pb-8'>
          <p className='flex items-center gap-2'>
            <span className='font-pretendard text-[10px] font-medium text-[#77786B]'>
              shared via
            </span>
            <span className='font-pretendard text-primary text-[10px] font-bold'>
              TALKTALK COACH
            </span>
          </p>
        </footer>
      </article>

      <button
        className='bg-primary mt-8 flex w-full max-w-[448px] items-center justify-center gap-2 rounded-[48px] py-[14px] text-white shadow-xl'
        onClick={handleSaveImage}>
        <svg
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'>
          <path
            d='M8 1V11M8 11L4 7M8 11L12 7M2 13H14'
            stroke='white'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <span className='font-pretendard text-sm font-bold'>Save Image</span>
      </button>

      <footer className='mt-8 pb-24'>
        <p className='font-pretendard text-primary2 text-center text-xs font-medium opacity-60'>
          Improve your communication daily with TalkTalk Coach
        </p>
      </footer>
    </main>
  );
}
