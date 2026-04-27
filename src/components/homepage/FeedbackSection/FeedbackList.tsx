import SparklesIcon from '@/assets/homepage/sparkles.svg';
import {Feedback} from '@/components/homepage/FeedbackSection/Feedback';

export type FeedbackProps = {
  id: number;
  text: string;
};

type FeedbackListProps = {
  feedbacks: FeedbackProps[];
};

export const FeedbackList = ({feedbacks}: FeedbackListProps) => {
  return (
    <div className='flex flex-col gap-4 rounded-4xl bg-[#F4F4EB] p-6'>
      <div className='flex gap-3'>
        <SparklesIcon />
        <h2 className='text-balck text-lg font-bold'>AI 통합 피드백</h2>
      </div>
      <div className='flex flex-col gap-6'>
        {feedbacks.map((feedback) => (
          <Feedback key={feedback.id} text={feedback.text} />
        ))}
      </div>
    </div>
  );
};
