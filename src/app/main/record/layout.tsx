import {Header} from '@/components/layout/Header';
import {NavBar} from '@/components/layout/NavBar';
import {Suspense} from 'react';
import {Spinner} from '@/components/common/Spinner';

export default function RecordLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Header />
      <Suspense fallback={<Spinner />}>{children}</Suspense>
      <NavBar />
    </div>
  );
}
