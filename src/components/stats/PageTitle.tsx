/**
 * 학습 통계 상세 페이지 상단의 페이지 타이틀.
 */
export const PageTitle = () => {
  return (
    <div className='flex w-full flex-col gap-2'>
      <span className='font-pretendard text-brown text-sm font-semibold tracking-[0.35px] uppercase'>
        TALKTALK REPORT
      </span>
      <h2 className='text-text text-4xl font-extrabold tracking-[-0.9px]'>
        학습 성취도 분석
      </h2>
    </div>
  );
};
