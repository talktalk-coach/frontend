import WaveForm from '@/assets/loading/waveform.svg';
import LogoCircleContainer from '@/assets/loading/logocirclecontainer.svg';

export default function Loadingpage() {
  return (
    <div className='flex h-screen flex-col items-center p-8'>
      <div className='flex flex-col items-center gap-9'>
        <p className='text-primary/60 text-xs font-bold tracking-widest'>
          ANALYSIS IN PROGRESS
        </p>
        <LogoCircleContainer alt='로고 원형 컨테이너' />
        <WaveForm alt='음성 파형' />
        <p className='text-primary text-2xl font-bold'>심층 분석 중...</p>
        <p className='text-primary2 text-center text-sm font-bold'>
          잠시만 기다려주세요.
          <br />
          당신의 발음, 속도, 그리고 표현력을 인공지능이 세밀하게
          <br />
          파헤치고 있습니다.
        </p>
      </div>
      <p className='text-brown mt-auto text-[10px] font-extrabold'>
        TALKTALK COACH MINDSET
      </p>
    </div>
  );
}
