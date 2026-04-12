import {mockSessionTime} from '@/mocks/record';
import PauseIcon from '@/assets/icons/pause.svg';
import PlayIcon from '@/assets/icons/play.svg';

interface RecordFooterProps {
  status: 'idle' | 'recording' | 'paused';
  onPause: () => void;
  onResume: () => void;
  onSubmit: () => void;
}

export const RecordFooter = ({
  status,
  onPause,
  onResume,
  onSubmit,
}: RecordFooterProps) => {
  return (
    <footer className='mt-10 flex w-full flex-col gap-10 px-5 pb-[115px]'>
      <div className='flex w-full gap-4'>
        <section className='bg-surface flex flex-1 flex-col items-center justify-center gap-1 rounded-3xl py-5'>
          <h3 className='font-pretendard text-primary text-xs font-semibold tracking-widest'>
            SESSION TIME
          </h3>
          <time className='text-text text-2xl font-bold'>
            {status === 'idle' ? '00:00' : mockSessionTime}
          </time>
        </section>

        {status === 'idle' ? (
          <div className='bg-surface flex flex-1 items-center justify-center rounded-3xl py-5'>
            <img
              src='/icons/Speech-off.svg'
              alt='speech'
              width={45}
              height={45}
            />
          </div>
        ) : status === 'recording' ? (
          <button
            className='bg-surface flex flex-1 items-center justify-center rounded-3xl py-5'
            onClick={onPause}>
            <PauseIcon />
          </button>
        ) : (
          <button
            className='bg-surface flex flex-1 items-center justify-center rounded-3xl py-5'
            onClick={onResume}>
            <PlayIcon />
          </button>
        )}
      </div>

      <button
        className='bg-primary w-full rounded-[48px] py-4 font-semibold text-white'
        onClick={onSubmit}>
        제출하기
      </button>
    </footer>
  );
};
