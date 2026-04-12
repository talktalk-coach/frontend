'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';
import {WaveForm} from '@/components/record/WaveForm';
import {StatusMessage} from '@/components/record/StatusMessage';
import MicIcon from '@/assets/icons/mic.svg';
import PauseIcon from '@/assets/icons/pause.svg';
import PlayIcon from '@/assets/icons/play.svg';
import {mockSessionTime} from '@/mocks/record';

export default function RecordPage() {
  const router = useRouter();

  /*
   * 녹음 일시정지/재개 상태.
   * true: 녹음 재개, false: 일시정지
   */
  const [status, setStatus] = useState<'idle' | 'recording' | 'paused'>('idle');

  const handleMicClick = () => {
    if (status === 'idle') setStatus('recording');
  };

  const handlePauseClick = () => setStatus('paused');

  const handleResumeClick = () => setStatus('recording');

  const handleSubmitClick = () => router.push(ROUTES.RESULT_LOADING);

  return (
    <main className='bg-background flex h-screen flex-col items-center px-6 py-4'>
      <figure className='bg-primary/20 mt-6 flex items-center gap-2 rounded-full px-4 py-1.5'>
        <i className='h-2 w-2 rounded-full bg-red-600' />
        <figcaption className='font-pretendard text-primary text-xs font-bold tracking-widest'>
          LIVE SESSION
        </figcaption>
      </figure>

      <section className='relative mt-8 flex items-center justify-center'>
        <i className='border-primary/10 absolute h-64 w-64 rounded-full border' />
        <i className='border-primary/20 absolute h-48 w-48 rounded-full border' />
        <button
          className='from-primary to-primary-gradient relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br shadow-2xl'
          onClick={handleMicClick}>
          <MicIcon className='text-white' />
        </button>
      </section>

      <StatusMessage status={status} />

      <figure className='mt-10'>
        <WaveForm isPlaying={status === 'recording'} />
      </figure>

      <footer className='mt-10 flex w-full flex-col gap-10 px-5 pb-[115px]'>
        <div className='flex w-full gap-4'>
          <section className='bg-surface flex flex-1 flex-col items-center justify-center gap-1 rounded-3xl py-5'>
            <h3 className='font-pretendard text-primary text-xs font-semibold tracking-widest'>
              SESSION TIME
            </h3>
            <time className='text-text text-2xl font-bold'>
              {status === 'idle' ? '00:00' : mockSessionTime}
            </time>
          </section>

          {status === 'idle' ? (
            <div className='bg-surface flex flex-1 items-center justify-center rounded-3xl py-5'>
              <img
                src='/icons/Speech-off.svg'
                alt='speech'
                width={45}
                height={45}
              />
            </div>
          ) : status === 'recording' ? (
            <button
              className='bg-surface flex flex-1 items-center justify-center rounded-3xl py-5'
              onClick={handlePauseClick}>
              <PauseIcon />
            </button>
          ) : (
            <button
              className='bg-surface flex flex-1 items-center justify-center rounded-3xl py-5'
              onClick={handleResumeClick}>
              <PlayIcon />
            </button>
          )}
        </div>
        <button
          className='bg-primary w-full rounded-[48px] py-4 font-semibold text-white'
          onClick={handleSubmitClick}>
          제출하기
        </button>
      </footer>
    </main>
  );
}
