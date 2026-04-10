import WaveForm from '@/assets/result/waveform.svg';
import LogoCircleContainer from '@/assets/result/logocirclecontainer.svg';
import Overlay from '@/assets/result/overlay.svg';

export default function Loadingpage() {
  return (
    <div className='flex flex-col items-center p-8'>
      <div className='flex flex-col items-center gap-9'>
        <p className='text-primary/60 text-xs font-bold tracking-widest'>
          ANALYSIS IN PROGRESS
        </p>
        <LogoCircleContainer alt='로고 원형 컨테이너' />
        <WaveForm alt='음성 파형' />
        <p className='text-primary text-2xl font-bold'>심층 분석 중...</p>
        <p className='text-primary2/80 text-center text-sm font-bold'>
          잠시만 기다려주세요.
          <br />
          당신의 발음, 속도, 그리고 표현력을 인공지능이 세밀하게
          <br />
          파헤치고 있습니다.
        </p>
        <div className='flex items-center gap-2'>
          <Overlay alt='오버레이' />
          <p className='text-brown mt-1 text-[10px] font-extrabold tracking-wider'>
            TALKTALK COACH MINDSET
          </p>
          <Overlay alt='오버레이2' />
        </div>
      </div>
    </div>
  );
}
