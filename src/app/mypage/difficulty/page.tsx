'use client';

import {useRouter} from 'next/navigation';
import {DifficultySelectionList} from '@/components/difficulty/DifficultySelectionList';
import {Spinner} from '@/components/common/Spinner';
import {ROUTES} from '@/constants/routes';
import {GRADE_CODE_TO_LABEL} from '@/constants/difficulty';
import {useUserInfo} from '@/hooks/queries/useUser';

/**
 * - 현재 학습 수준을 서버에서 조회해 미리 선택되어 있다.
 * - 변경 완료 시 마이페이지로 돌아간다.
 */
export default function MypageDifficultyPage() {
  const router = useRouter();
  const {data: userInfo, isLoading, isError, refetch} = useUserInfo();

  const handleConfirm = (): void => {
    router.push(ROUTES.MYPAGE);
  };

  return (
    <main className='bg-background flex min-h-screen flex-col items-center px-6 pt-8 pb-12'>
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

        {isLoading ? (
          <Spinner />
        ) : isError || !userInfo ? (
          <div className='flex flex-col items-center gap-4 pt-8'>
            <p className='text-primary2 text-base font-semibold'>
              정보를 불러오지 못했습니다. 다시 시도해 주세요
            </p>
            <button
              type='button'
              onClick={() => refetch()}
              className='bg-primary rounded-full px-8 py-3 text-base font-semibold text-white transition'>
              다시 시도
            </button>
          </div>
        ) : (
          <DifficultySelectionList
            initialSelected={GRADE_CODE_TO_LABEL[userInfo.targetLevel]}
            buttonText='변경 완료'
            onConfirm={handleConfirm}
          />
        )}
      </div>
    </main>
  );
}
