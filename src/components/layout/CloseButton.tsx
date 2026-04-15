'use client';

import {useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';

/*
 * share 페이지 헤더에서 사용하는 닫기 버튼.
 * 클릭 시 홈 페이지로 이동한다.
 */
export const CloseButton = () => {
  const router = useRouter();

  const handleClose = () => router.push(ROUTES.HOMEPAGE);

  return (
    <button aria-label='닫기' onClick={handleClose}>
      <svg
        width='14'
        height='14'
        viewBox='0 0 14 14'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1 1L13 13M13 1L1 13'
          stroke='#485422'
          strokeWidth='2'
          strokeLinecap='round'
        />
      </svg>
    </button>
  );
};
