interface StatusMessageProps {
  status: 'idle' | 'recording' | 'paused';
}

export const StatusMessage = ({status}: StatusMessageProps) => {
  return (
    <section className='mt-25 flex flex-col items-center gap-2'>
      <h2 className='text-text text-center text-2xl font-bold tracking-tight'>
        {status === 'idle' ? (
          <>
            마이크를 눌러
            <br />
            시작하세요
          </>
        ) : status === 'recording' ? (
          <>
            당신의 목소리를
            <br />
            듣고 있습니다...
          </>
        ) : (
          '일시정지 중...'
        )}
      </h2>
      <p className='font-pretendard text-primary2 text-base font-semibold opacity-70'>
        {status === 'idle'
          ? '(Press the mic to start...)'
          : status === 'recording'
            ? '(Listening to your path...)'
            : '(Recording paused...)'}
      </p>
    </section>
  );
};
