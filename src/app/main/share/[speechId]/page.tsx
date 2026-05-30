'use client';

import {useRef} from 'react';
import {useParams} from 'next/navigation';
import {toPng} from 'html-to-image';
import {SaveImageButton} from '@/components/common/buttons/SaveImageButton';
import {ShareCard} from '@/components/share/ShareCard';
import {useSpeechResult} from '@/hooks/queries/useSpeech';
import {Spinner} from '@/components/common/Spinner';
import {ErrorScreen} from '@/components/common/ErrorScreen.';
import {mapScoreLabel} from '@/utils/labelMapping';

export default function ResultSharePage() {
  const params = useParams();
  const speechId = Number(params.speechId);

  const {data, isLoading, isError} = useSpeechResult(speechId);

  const captureRef = useRef<HTMLDivElement>(null);

  const handleSaveImage = async (): Promise<void> => {
    const targetElement = captureRef.current;
    if (!targetElement) return;

    try {
      const dataUrl = await toPng(targetElement, {
        cacheBust: true,
        pixelRatio: 2,
      });

      const blob = await (await fetch(dataUrl)).blob();
      const file = new File([blob], 'talktalk-coach-daily-report.png', {
        type: 'image/png',
      });

      const isMobile =
        /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
        (navigator.maxTouchPoints > 0 && window.innerWidth < 768);

      if (isMobile && navigator.canShare?.({files: [file]})) {
        await navigator.share({
          files: [file],
          title: 'TalkTalk Coach Daily Report',
        });
      } else {
        const downloadLink = document.createElement('a');
        downloadLink.download = 'talktalk-coach-daily-report.png';
        downloadLink.href = dataUrl;
        downloadLink.click();
      }
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        console.error('이미지 저장에 실패했습니다:', error);
      }
    }
  };

  if (isLoading) return <Spinner />;

  if (isError || !data) return <ErrorScreen />;

  const score = Math.round(data.averageScore);

  return (
    <main className='flex min-h-screen flex-col items-center px-6 py-10'>
      <div className='w-full max-w-[448px]'>
        <ShareCard score={score} metrics={mapScoreLabel(data)} />
      </div>

      <SaveImageButton onClick={handleSaveImage} />

      <footer className='mt-8'>
        <p className='font-pretendard text-primary2 text-center text-xs font-medium opacity-60'>
          Improve your communication daily with TalkTalk Coach
        </p>
      </footer>

      <div
        aria-hidden='true'
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 0,
          pointerEvents: 'none',
        }}>
        <div ref={captureRef} className='bg-background w-[448px] p-8'>
          <ShareCard score={score} metrics={mapScoreLabel(data)} />
        </div>
      </div>
    </main>
  );
}
