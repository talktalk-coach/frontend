'use client';
import {useRouter} from 'next/navigation';
import BackIcon from '@/assets/mypage/back.svg';

export default function Historylayout({children}: {children: React.ReactNode}) {
  const router = useRouter();
  return (
    <div className='min-h-screen'>
      <header className='bg-background relative sticky top-0 z-50 flex items-center justify-between px-8 py-5'>
        <button onClick={() => router.back()} className='flex items-center'>
          <BackIcon />
        </button>
        <h1 className='text-primary/90 absolute left-1/2 -translate-x-1/2 text-lg'>
          과거 스피치 결과
        </h1>
      </header>
      {children}
    </div>
  );
}
