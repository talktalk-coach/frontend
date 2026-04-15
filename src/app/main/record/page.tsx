'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';
import {WaveForm} from '@/components/record/WaveForm';
import {StatusMessage} from '@/components/record/StatusMessage';
import MicIcon from '@/assets/record/mic.svg';
import {RecordFooter} from '@/components/record/RecordFooter';
import {useRecord} from '@/hooks/useRecord';

export default function RecordPage() {
  const router = useRouter();

  const {startRecording, pauseRecording, resumeRecording, stopRecording} =
    useRecord();

  /*
   * 녹음 일시정지/재개 상태.
   * true: 녹음 재개, false: 일시정지
   */
  const [status, setStatus] = useState<'idle' | 'recording' | 'paused'>('idle');

  const handleMicClick = async () => {
    if (status === 'idle') {
      await startRecording();
      setStatus('recording');
    }
  };

  const handlePauseClick = () => {
    pauseRecording();
    setStatus('paused');
  };

  const handleResumeClick = () => {
    resumeRecording();
    setStatus('recording');
  };

  const handleSubmitClick = async () => {
    await stopRecording();
    router.push(ROUTES.RESULT_LOADING);
  };

  return (
    <main className='flex h-screen flex-col items-center px-6 py-4'>
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

      <RecordFooter
        status={status}
        onPause={handlePauseClick}
        onResume={handleResumeClick}
        onSubmit={handleSubmitClick}
      />
    </main>
  );
}
