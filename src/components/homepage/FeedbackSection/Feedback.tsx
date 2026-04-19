import CheckIcon from '@/assets/homepage/check.svg';

type FeedbackProps = {
  text: string;
};

export const Feedback = ({text}: FeedbackProps) => {
  return (
    <div className='shadow-soft flex gap-3 rounded-4xl bg-white p-6'>
      <CheckIcon className='mt-0.5 shrink-0' />
      <p className='font-bold text-black'>{text}</p>
    </div>
  );
};
