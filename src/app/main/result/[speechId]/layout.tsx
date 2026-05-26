import {Header} from '@/components/layout/Header';

export default function ResultLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      {children}
    </div>
  );
}
