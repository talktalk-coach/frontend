'use client';

import {usePathname} from 'next/navigation';
import Link from 'next/link';
import HomeIcon from '@/assets/icons/home.svg';
import UserIcon from '@/assets/icons/user.svg';
import SpeechOn from '@/assets/icons/Speech-on.svg';
import SpeechOff from '@/assets/icons/Speech-off.svg';

/**
 * 내비게이션 바 컴포넌트
 * 기본은 active(on) 상태로 표시됨
 * 비활성 상태가 필요한 경우 isSpeechActive 조건 활성화
 */
export const NavBar = () => {
  /**
   * 스피치 버튼 비활성 상태 적용 시 아래 주석 해제
   * const pathname = usePathname();
   * const isSpeechActive = pathname.includes('/main/record');
   */

  return (
    <nav className='bg-background/90 fixed bottom-0 flex h-[75px] w-full max-w-[390px] items-center justify-between rounded-t-[24px] px-14 shadow-[0px_-4px_48px_rgba(26,28,23,0.1)] backdrop-blur-md'>
      <Link
        href='/main/homepage'
        className='flex h-[65px] w-[65px] items-center justify-center rounded-full'>
        <HomeIcon />
      </Link>

      <div className='absolute left-1/2 -translate-x-1/2 -translate-y-4'>
        <Link href='/main/record'>
          {/* 비활성 상태 적용 시 border-background bg-primary → border-primary bg-background, SpeechOn → SpeechOff 로 변경 */}
          <div className='border-background bg-primary flex h-[90px] w-[90px] items-center justify-center rounded-full border-4 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]'>
            <SpeechOn />
          </div>
        </Link>
      </div>

      <Link
        href='/main/mypage'
        className='flex h-[70px] w-[70px] items-center justify-center rounded-full'>
        <UserIcon />
      </Link>
    </nav>
  );
};
