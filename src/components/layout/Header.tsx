'use client';

import Logo from '@/assets/icons/logo.svg';
import ProfileImage from '@/assets/user/user.svg';
import Link from 'next/link';
import Image from 'next/image';
import {ROUTES} from '@/constants/routes';
import {useUserStore} from '@/stores/userStore';

export const Header = () => {
  const profileImage = useUserStore((state) => state.profileImage);

  return (
    <header className='bg-background sticky top-0 z-50 flex items-center justify-between px-6 py-4 shadow-sm'>
      <Link href={ROUTES.HOMEPAGE}>
        <Logo className='h-5 w-55' />
      </Link>

      <Link
        href={ROUTES.MYPAGE}
        aria-label='마이페이지로 이동'
        className='block h-9 w-9 cursor-pointer overflow-hidden rounded-full transition-opacity hover:opacity-80'>
        {profileImage ? (
          <Image
            src={profileImage}
            alt='프로필 이미지'
            width={36}
            height={36}
            className='h-full w-full object-cover'
          />
        ) : (
          <ProfileImage className='h-full w-full object-contain' />
        )}
      </Link>
    </header>
  );
};
