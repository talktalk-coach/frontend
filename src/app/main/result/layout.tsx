import {Header} from '@/components/layout/Header';

export default function ResultLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
