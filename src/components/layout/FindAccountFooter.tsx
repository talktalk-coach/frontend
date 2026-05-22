import Link from 'next/link';
import {ROUTES} from '@/constants/routes';

/**
 * 아이디/비밀번호 찾기 페이지 하단의 공용 푸터.
 * Back to Login 링크와 카피라이트를 표시한다.
 */
export const FindAccountFooter = () => {
  return (
    <footer className='mt-auto flex w-full flex-col items-center gap-4 pt-8'>
      <nav className='flex items-center gap-6'>
        <Link
          href={ROUTES.LOGIN}
          className='font-pretendard text-primary2 text-sm'>
          Back to Login
        </Link>
        <span className='font-pretendard text-primary2 text-sm'>
          Privacy Policy
        </span>
        <span className='font-pretendard text-primary2 text-sm'>Support</span>
      </nav>
      <p className='font-pretendard text-primary2 text-sm opacity-60'>
        © 2026 TalkTalk Coach. All rights reserved.
      </p>
    </footer>
  );
};
