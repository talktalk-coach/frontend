import {BackButton} from '@/components/layout/BackButton';

export default function StatsLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex min-h-screen flex-col'>
      <header className='bg-background sticky top-0 z-50 flex h-16 items-center gap-3 px-6'>
        <BackButton />
        <h1 className='text-primary absolute left-1/2 -translate-x-1/2 text-xl font-bold tracking-tight'>
          나의 학습 통계 상세
        </h1>
      </header>
      {children}
    </div>
  );
}
