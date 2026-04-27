'use client';

import Link from 'next/link';
import HomeIcon from '@/assets/icons/home.svg';
import UserIcon from '@/assets/icons/user.svg';
import SpeechOn from '@/assets/icons/Speech-on.svg';
import SpeechOff from '@/assets/icons/Speech-off.svg';
import {ROUTES} from '@/constants/routes';

/**
 * 내비게이션 바 컴포넌트
 * 중앙 스피치 버튼은 기본 on 상태이며, hover 시 off 상태로 자연스럽게 전환된다.
 */
export const NavBar = () => {
  return (
    <nav className='bg-background/90 fixed bottom-0 flex h-[75px] w-full max-w-[390px] items-center justify-between rounded-t-[24px] px-14 shadow-[0px_-4px_48px_rgba(26,28,23,0.1)] backdrop-blur-md'>
      <Link
        href={ROUTES.HOMEPAGE}
        className='flex h-[65px] w-[65px] items-center justify-center rounded-full'>
        <HomeIcon />
      </Link>

      <div className='absolute left-1/2 -translate-x-1/2 -translate-y-4'>
        <Link href={ROUTES.RECORD} className='group block'>
          <div className='border-background bg-primary group-hover:border-primary group-hover:bg-background relative flex h-[90px] w-[90px] items-center justify-center rounded-full border-4 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out'>
            {/* 기본 상태 (on) */}
            <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0'>
              <SpeechOn />
            </div>
            {/* hover 상태 (off) */}
            <div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              <SpeechOff />
            </div>
          </div>
        </Link>
      </div>

      <Link
        href={ROUTES.MYPAGE}
        className='flex h-[70px] w-[70px] items-center justify-center rounded-full'>
        <UserIcon />
      </Link>
    </nav>
  );
};
