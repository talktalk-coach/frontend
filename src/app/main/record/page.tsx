'use client';

import {useCallback, useState, ReactElement} from 'react';
import Toast from '@/components/common/Toast';
import {useRecordTimer} from '@/hooks/useRecordTimer';
import {useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';
import {WaveForm} from '@/components/record/WaveForm';
import {StatusMessage} from '@/components/record/StatusMessage';
import MicIcon from '@/assets/record/mic.svg';
import {RecordFooter} from '@/components/record/RecordFooter';
import {useRecord} from '@/hooks/useRecord';

type RecordStatus = 'idle' | 'recording' | 'paused';

interface ToastState {
  isVisible: boolean;
  message: string;
}

const INITIAL_TOAST_STATE: ToastState = {isVisible: false, message: ''};

export default function RecordPage(): ReactElement {
  const router = useRouter();

  const {startRecording, pauseRecording, resumeRecording, stopRecording} =
    useRecord();

  /**
   * idle: 대기 중, recording: 녹음 진행 중, paused: 일시정지됨
   */
  const [status, setStatus] = useState<RecordStatus>('idle');

  const [toast, setToast] = useState<ToastState>(INITIAL_TOAST_STATE);
  const [isDanger, setIsDanger] = useState<boolean>(false);

  const showToast = useCallback((message: string): void => {
    setToast({isVisible: true, message});
  }, []);

  const hideToast = useCallback((): void => {
    setToast((prev) => ({...prev, isVisible: false}));
  }, []);

  const handleSubmit = useCallback(async (): Promise<void> => {
    await stopRecording();
    router.push(ROUTES.RESULT_LOADING);
  }, [stopRecording, router]);

  /* 12분 경과 - 남은 시간 안내 토스트 */
  const handleWarning = useCallback((): void => {
    showToast('3분 뒤 자동으로 종료됩니다');
  }, [showToast]);

  /* 14분 경과 - 타이머 시각 경고 시작 */
  const handleDangerStart = useCallback((): void => {
    setIsDanger(true);
  }, []);

  /* 15분 도달 - 자동 종료 */
  const handleTimeLimit = useCallback((): void => {
    showToast('최대 녹음 시간에 도달해 종료됩니다');
    void handleSubmit();
  }, [showToast, handleSubmit]);

  const {elapsedSeconds} = useRecordTimer({
    isRunning: status === 'recording',
    onWarning: handleWarning,
    onDangerStart: handleDangerStart,
    onTimeLimit: handleTimeLimit,
  });

  const handleMicClick = async (): Promise<void> => {
    if (status === 'idle') {
      await startRecording();
      setStatus('recording');
      showToast('최대 15분까지 녹음할 수 있어요');
    }
  };

  const handlePauseClick = (): void => {
    pauseRecording();
    setStatus('paused');
  };

  const handleResumeClick = (): void => {
    resumeRecording();
    setStatus('recording');
  };

  const handleSubmitClick = async (): Promise<void> => {
    await handleSubmit();
  };

  return (
    <main className='flex h-screen flex-col items-center px-6 py-4'>
      <Toast
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
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
        elapsedSeconds={elapsedSeconds}
        isDanger={isDanger}
        onPause={handlePauseClick}
        onResume={handleResumeClick}
        onSubmit={handleSubmitClick}
      />
    </main>
  );
}
