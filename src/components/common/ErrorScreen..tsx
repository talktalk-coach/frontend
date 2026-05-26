'use client';

import SadFaceIcon from '@/assets/icons/sad-face.svg';
import {useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';

export const ErrorScreen = () => {
  const router = useRouter();

  return (
    <div className='flex flex-1 flex-col items-center justify-center gap-8 px-6 text-center'>
      <div className='flex h-20 w-20 items-center justify-center rounded-full'>
        <SadFaceIcon />
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-primary text-lg font-bold'>
          결과를 불러오지 못했어요
        </p>
        <p className='text-primary/60 text-sm leading-relaxed'>
          일시적인 오류가 발생했습니다.
          <br />
          다시 시도해 주세요.
        </p>
      </div>
      <button
        onClick={() => router.push(ROUTES.HOMEPAGE)}
        className='shadow-soft bg-primary/10 text-primary2 rounded-full px-8 py-3.5 text-sm font-bold'>
        홈으로 돌아가기
      </button>
    </div>
  );
};
