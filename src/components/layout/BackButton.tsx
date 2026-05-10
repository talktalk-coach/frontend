'use client';

import {useRouter} from 'next/navigation';

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
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M10 12L6 8L10 4'
          stroke='#485422'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </button>
  );
};
