import Link from 'next/link';
import {ROUTES} from '@/constants/routes';
import Logo from '@/assets/logo/headerlogo.svg';
import {CloseButton} from '@/components/layout/CloseButton';

export default function ShareLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='min-h-screen'>
      <header className='bg-background sticky top-0 z-50 flex items-center justify-between px-6 py-6 shadow-sm'>
        <Link href={ROUTES.HOMEPAGE}>
          <Logo />
        </Link>
        <CloseButton />
      </header>
      {children}
    </div>
  );
}
