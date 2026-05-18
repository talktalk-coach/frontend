type OverallFeedbackProps = {
  text: string;
};

export const OverallFeedback = ({text}: OverallFeedbackProps) => {
  return (
    <section className='relative flex flex-col gap-6'>
      <div className='flex justify-between'>
        <h2 className='text-primary text-lg font-extrabold'>전체 피드백</h2>
      </div>

      <div className='border-primary/20 flex border-l-4 p-5'>
        <p className='font-pretendard text-[15px] leading-relaxed whitespace-pre-line text-black'>
          {text}
        </p>
      </div>
    </section>
  );
};
