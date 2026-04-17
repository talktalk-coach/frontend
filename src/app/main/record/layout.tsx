import {Header} from '@/components/layout/Header';
import {NavBar} from '@/components/layout/NavBar';

export default function RecordLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Header />
      {children}
      <NavBar />
    </div>
  );
}
