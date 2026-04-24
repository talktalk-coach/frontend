import {Header} from '@/components/layout/Header';
import {NavBar} from '@/components/layout/NavBar';

export default function MypageLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='bg-background min-h-screen'>
      <Header />
      {children}
      <NavBar />
    </div>
  );
}
