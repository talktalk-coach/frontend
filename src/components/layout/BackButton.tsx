'use client';

import {useRouter} from 'next/navigation';
import ChevronLeft from '@/assets/stats/chevron-left.svg';

/**
 * 헤더에서 사용하는 뒤로가기 버튼.
 * 클릭 시 브라우저 히스토리상 이전 페이지로 이동한다.
 */
export const BackButton = () => {
  const router = useRouter();

  const handleBack = (): void => {
    router.back();
  };

  return (
    <button aria-label='뒤로가기' onClick={handleBack}>
      <ChevronLeft className='h-5 w-5' />
    </button>
  );
};
