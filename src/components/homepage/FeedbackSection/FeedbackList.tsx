import SparklesIcon from '@/assets/homepage/sparkles.svg';
import {Feedback} from '@/components/homepage/FeedbackSection/Feedback';

type FeedbackListProps = {
  feedbacks: string[];
};

export const FeedbackList = ({feedbacks}: FeedbackListProps) => {
  return (
    <div className='flex flex-col gap-4 rounded-4xl bg-[#F4F4EB] p-6'>
      <div className='flex gap-3'>
        <SparklesIcon />
        <h2 className='text-lg font-bold text-black'>AI 통합 피드백</h2>
      </div>
      <div className='flex flex-col gap-6'>
        {feedbacks.map((text, index) => (
          <Feedback key={index} text={text} />
        ))}
      </div>
    </div>
  );
};
