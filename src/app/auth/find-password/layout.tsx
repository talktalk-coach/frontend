import {BackButton} from '@/components/layout/BackButton';

export default function FindIdLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='bg-background min-h-screen'>
      <header className='bg-background sticky top-0 z-50 flex h-16 items-center px-6'>
        <BackButton />
      </header>
      {children}
    </div>
  );
}
