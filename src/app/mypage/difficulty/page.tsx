'use client';

import {useRouter} from 'next/navigation';
import {DifficultySelectionList} from '@/components/difficulty/DifficultySelectionList';
import {ROUTES} from '@/constants/routes';
import type {DifficultyLevel} from '@/constants/difficulty';
import {mockDifficultyLevel} from '@/mocks/mypage';

/**
 * - 현재 학습 수준이 미리 선택되어 있다.
 * - 변경 완료 시 마이페이지로 돌아간다.
 */
export default function MypageDifficultyPage() {
  const router = useRouter();

  const handleConfirm = (level: DifficultyLevel): void => {
    /* TODO: 학습 수준 변경 API 연동 */
    console.log('학습 수준 변경:', level);
    router.push(ROUTES.MYPAGE);
  };

  return (
    <main className='bg-background flex min-h-screen flex-col items-center px-6 pt-8 pb-30'>
      <div className='flex w-full max-w-[342px] flex-col gap-8'>
        <header className='flex flex-col items-center gap-3 text-center'>
          <span className='text-primary text-sm font-bold tracking-[1.4px] uppercase opacity-70'>
            Change Level
          </span>
          <h1 className='text-text text-4xl leading-[1.25] font-semibold'>
            학습 수준을
            <br />
            변경해 주세요
          </h1>
          <p className='text-base leading-relaxed font-semibold text-[#46483C]'>
            나에게 맞는 학습 수준을 선택해 주세요.
            <br />
            맞춤형 스피치 커리큘럼을 제공합니다.
          </p>
        </header>

        <DifficultySelectionList
          initialSelected={mockDifficultyLevel}
          buttonText='변경 완료'
          onConfirm={handleConfirm}
        />
      </div>
    </main>
  );
}
