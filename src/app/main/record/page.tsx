'use client';

import {useState} from 'react';
import WaveForm from '@/assets/icons/waveform.svg';
import MicIcon from '@/assets/icons/mic.svg';
import PauseIcon from '@/assets/icons/pause.svg';
import PlayIcon from '@/assets/icons/play.svg';
import {mockSessionTime} from '@/mocks/record';

export default function RecordPage() {
  /*
   * 녹음 일시정지/재개 상태.
   * true: 녹음 재개, false: 일시정지
   */
  const [isRecording, setIsRecording] = useState(true);
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
        <button className='from-primary to-primary-gradient relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br shadow-2xl'>
          <MicIcon className='text-white' />
        </button>
      </section>

      <section className='mt-25 flex flex-col items-center gap-2'>
        <h2 className='text-text text-center text-2xl font-bold tracking-tight'>
          당신의 이야기를
          <br />
          듣고 있습니다...
        </h2>
        <p className='font-pretendard text-primary2 text-base font-semibold opacity-70'>
          (Listening to your path...)
        </p>
      </section>

      <figure className='mt-8'>
        <WaveForm />
      </figure>

      <footer className='mt-10 flex w-full gap-4 pb-24'>
        <section className='bg-surface flex flex-1 flex-col items-center justify-center gap-1 rounded-3xl py-5'>
          <h3 className='font-pretendard text-primary text-xs font-semibold tracking-widest'>
            SESSION TIME
          </h3>
          <time className='text-text text-2xl font-bold'>
            {mockSessionTime}
          </time>
        </section>

        <button
          className='bg-surface flex flex-1 items-center justify-center rounded-3xl py-5'
          onClick={() => setIsRecording(!isRecording)}>
          {isRecording ? <PauseIcon /> : <PlayIcon />}
        </button>
      </footer>
    </main>
  );
}
