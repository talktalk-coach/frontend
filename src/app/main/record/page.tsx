'use client';

import {useCallback, useState, ReactElement, useEffect} from 'react';
import Toast from '@/components/common/Toast';
import {useRecordTimer} from '@/hooks/useRecordTimer';
import {useRouter, useSearchParams} from 'next/navigation';
import {ROUTES} from '@/constants/routes';
import {WaveForm} from '@/components/record/WaveForm';
import {StatusMessage} from '@/components/record/StatusMessage';
import MicIcon from '@/assets/record/mic.svg';
import {RecordFooter} from '@/components/record/RecordFooter';
import {useRecord} from '@/hooks/useRecord';
import {useSubmitSpeechMutation} from '@/hooks/queries/useSpeech';
import {CategoryModal} from '@/components/record/CategoryModal';
import {CategoryDisplay} from '@/components/record/CategoryDisplay';
import type {SpeechCategory} from '@/constants/speech';
type RecordStatus = 'idle' | 'recording' | 'paused';

type ToastState = {
  isVisible: boolean;
  message: string;
};

const INITIAL_TOAST_STATE: ToastState = {isVisible: false, message: ''};

/**
 * title은 "날짜 + 카테고리" 형식으로 백엔드에 전달한다.
 */
const createTitleParam = (category: SpeechCategory): string => {
  const today = new Date().toISOString().slice(0, 10);
  return `${today} ${category}`;
};

export default function RecordPage(): ReactElement {
  const router = useRouter();

  const {startRecording, pauseRecording, resumeRecording, stopRecording} =
    useRecord();

  const {mutateAsync: submitSpeech, isPending: isSubmitting} =
    useSubmitSpeechMutation();

  /**
   * idle: 대기 중, recording: 녹음 진행 중, paused: 일시정지됨
   */
  const searchParams = useSearchParams();

  const [status, setStatus] = useState<RecordStatus>('idle');
  const [category, setCategory] = useState<SpeechCategory | null>(null);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState<boolean>(true);

  const [toast, setToast] = useState<ToastState>(INITIAL_TOAST_STATE);
  const [isDanger, setIsDanger] = useState<boolean>(false);

  const showToast = useCallback((message: string): void => {
    setToast({isVisible: true, message});
  }, []);

  const hideToast = useCallback((): void => {
    setToast((prev) => ({...prev, isVisible: false}));
  }, []);

  const handleCategorySelect = useCallback((selected: SpeechCategory): void => {
    setCategory(selected);
    setIsCategoryModalOpen(false);
  }, []);

  const handleCategoryModalClose = useCallback((): void => {
    if (category) {
      setIsCategoryModalOpen(false);
    } else {
      router.push(ROUTES.HOMEPAGE);
    }
  }, [category, router]);

  const handleCategoryDisplayClick = useCallback((): void => {
    setIsCategoryModalOpen(true);
  }, []);

  useEffect(() => {
    if (searchParams.get('error') === 'analysis_failed') {
      showToast('분석에 실패했습니다. 다시 시도해 주세요');
    }
  }, [searchParams, showToast]);

  /**
   * 녹음을 종료하고 오디오를 업로드한 뒤 결과 로딩 페이지로 이동한다.
   * stopRecording()은 recording/paused 상태 모두 정상 종료된다.
   * 동적 라우트 경로로 다음 페이지에 전달한다
   * 업로드 실패 시 라우팅하지 않고 토스트로 안내한다.
   */
  const handleSubmit = useCallback(async (): Promise<void> => {
    if (!category) return;

    const audioBlob = await stopRecording();

    try {
      const speechId = await submitSpeech({
        audio: audioBlob,
        title: createTitleParam(category),
        duration: elapsedSeconds,
        category: category,
      });

      router.push(ROUTES.RESULT_LOADING(speechId));
    } catch {
      showToast('업로드에 실패했습니다. 다시 시도해 주세요');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, stopRecording, submitSpeech, router, showToast]);

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
    if (status !== 'idle') return;
    if (!category) {
      setIsCategoryModalOpen(true);
      return;
    }
    await startRecording();
    setStatus('recording');
    showToast('최대 15분까지 녹음할 수 있어요');
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
    if (isSubmitting) return;
    await handleSubmit();
  };

  return (
    <main className='flex h-screen flex-col items-center px-6 py-4'>
      <Toast
        variant='info'
        position='viewport-top'
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
      {status === 'idle' ? (
        category ? (
          <CategoryDisplay
            category={category}
            onClick={handleCategoryDisplayClick}
          />
        ) : (
          <div className='mt-6 h-[34px]' aria-hidden='true' />
        )
      ) : (
        <figure className='bg-primary/20 mt-6 flex items-center gap-2 rounded-full px-4 py-1.5'>
          <i className='h-2 w-2 rounded-full bg-red-600' />
          <figcaption className='font-pretendard text-primary text-xs font-bold tracking-widest'>
            LIVE SESSION
          </figcaption>
        </figure>
      )}

      <section className='relative mt-8 flex items-center justify-center'>
        <i className='border-primary/10 pointer-events-none absolute h-64 w-64 rounded-full border' />
        <i className='border-primary/20 pointer-events-none absolute h-48 w-48 rounded-full border' />
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
        isSubmitting={isSubmitting}
        onPause={handlePauseClick}
        onResume={handleResumeClick}
        onSubmit={handleSubmitClick}
      />

      <CategoryModal
        isOpen={isCategoryModalOpen}
        onSelect={handleCategorySelect}
        onClose={handleCategoryModalClose}
      />
    </main>
  );
}
