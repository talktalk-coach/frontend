import {BackButton} from '@/components/layout/BackButton';

export default function StatsLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <header className='bg-background sticky top-0 z-50 flex items-center gap-2 px-6 py-4'>
        <BackButton />
        <h1 className='text-primary text-lg font-bold tracking-tight'>
          나의 학습 통계 상세
        </h1>
      </header>
      {children}
    </>
  );
}
