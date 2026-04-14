import {Header} from '@/components/layout/Header';
import {NavBar} from '@/components/layout/NavBar';

export default function MainLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Header />
      {children}
      <NavBar />
    </div>
  );
}
