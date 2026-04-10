type ScoreProps = {
  score: number;
};

export const Score = ({score}: ScoreProps) => {
  return (
    <section className='bg-gray flex flex-col items-center gap-6 rounded-4xl p-6'>
      <h2 className='text-primary text-sm font-extrabold tracking-wider'>
        TOTAL SCORE
      </h2>
      <div className='border-primary flex h-36 w-36 items-center justify-center rounded-full border-9'>
        <span className='font-pretendard text-5xl font-extrabold text-black'>
          {score}
        </span>
      </div>
    </section>
  );
};
