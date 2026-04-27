import ChevronIcon from '@/assets/homepage/chevron.svg';

export const HomePageButton = ({onClick}: {onClick: () => void}) => {
  return (
    <section>
      <button
        onClick={onClick}
        className='bg-primary shadow-soft flex w-full items-center justify-center gap-3 rounded-full py-4 text-lg font-bold text-white'>
        지금 연습하러 가볼까요?
        <ChevronIcon />
      </button>
    </section>
  );
};
