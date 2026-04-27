'use client';

import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';
import Overlay from '@/assets/result/overlay.svg';
import Icon from '@/assets/icons/Speech-off.svg';
import {WaveForm} from '@/components/loading/WaveForm';

export default function Loadingpage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(ROUTES.RESULT);
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className='to-background flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-[#F7F8E9] p-8'>
      {/* top */}
      <p className='text-primary/60 text-xs font-bold tracking-widest'>
        ANALYSIS IN PROGRESS
      </p>

      {/* center */}
      <div className='flex flex-col items-center gap-10'>
        <div className='relative flex aspect-square w-full items-center justify-center'>
          <span className='border-primary/40 absolute aspect-square w-[95%] rounded-full border shadow'></span>
          <span className='border-primary/20 absolute aspect-square w-[83%] rounded-full border shadow-inner'></span>
          <span className='bg-background absolute aspect-square w-[73%] rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.05)]'></span>
          <Icon className='absolute w-2/4 drop-shadow-md' />
        </div>
        <WaveForm />
        <p className='text-primary text-2xl font-bold'>심층 분석 중...</p>
        <p className='text-primary2/80 text-center text-sm font-bold'>
          잠시만 기다려주세요.
          <br />
          당신의 발음, 속도, 그리고 표현력을 인공지능이 세밀하게
          <br />
          파헤치고 있습니다.
        </p>
      </div>

      {/* bottom */}
      <div className='flex items-center gap-2'>
        <Overlay aria-label='장식 오버레이' />
        <p className='text-brown mt-1 text-[10px] font-extrabold tracking-wider'>
          TALKTALK COACH MINDSET
        </p>
        <Overlay aria-label='장식 오버레이2' />
      </div>
    </div>
  );
}
