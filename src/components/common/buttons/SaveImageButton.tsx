type SaveImageButtonProps = {
  onClick: () => void;
};

export const SaveImageButton = ({onClick}: SaveImageButtonProps) => {
  return (
    <button
      className='bg-primary mt-10 flex w-full max-w-[448px] items-center justify-center gap-2 rounded-[48px] py-[14px] text-white shadow-xl'
      onClick={onClick}>
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'>
        <path
          d='M8 1V11M8 11L4 7M8 11L12 7M2 13H14'
          stroke='white'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <span className='font-pretendard text-sm font-bold'>Save Image</span>
    </button>
  );
};
