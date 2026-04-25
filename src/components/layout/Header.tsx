import Logo from '@/assets/icons/logo.svg';
import ProfileImage from '@/assets/user/user.svg';
import Link from 'next/link';
import {ROUTES} from '@/constants/routes';

export const Header = () => {
  return (
    <header className='bg-background sticky top-0 z-50 flex items-center justify-between px-6 py-4 shadow-sm'>
      <Link href={ROUTES.HOMEPAGE}>
        <Logo className='h-5 w-55' />
      </Link>

      <div className='h-9 w-9 overflow-hidden rounded-full'>
        <ProfileImage className='h-full w-full object-contain' />
      </div>
    </header>
  );
};
