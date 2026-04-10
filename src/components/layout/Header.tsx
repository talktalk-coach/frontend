import Logo from '@/assets/logo/headerlogo.svg';
import ProfileImage from '@/assets/user/userprofile.svg';
import Link from 'next/link';
import {ROUTES} from '@/constants/routes';

export const Header = () => {
  return (
    <header className='flex items-center justify-between px-6 py-4'>
      <Link href={ROUTES.HOMEPAGE}>
        <Logo />
      </Link>

      <div className='h-9 w-9 overflow-hidden rounded-full'>
        <ProfileImage className='h-full w-full object-contain' />
      </div>
    </header>
  );
};
