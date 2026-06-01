import {Header} from '@/components/layout/Header';
import {NavBar} from '@/components/layout/NavBar';

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-background flex min-h-screen flex-col'>
      <Header />
      {children}
      <NavBar />
    </div>
  );
}
