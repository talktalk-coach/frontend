import SparklesIcon from '@/assets/homepage/sparkles.svg';
import MicrophoneIcon from '@/assets/homepage/microphone.svg';
import {Feedback} from '@/components/homepage/FeedbackSection/Feedback';

type FeedbackListProps = {
  feedbacks: string[] | null;
};

export const FeedbackList = ({feedbacks}: FeedbackListProps) => {
  return (
    <div className='flex flex-col gap-4 rounded-4xl bg-[#F4F4EB] p-6'>
      <div className='flex gap-3'>
        <SparklesIcon />
        <h2 className='text-lg font-bold text-black'>AI 통합 피드백</h2>
      </div>
      <div className='flex flex-col gap-6'>
        {feedbacks ? (
          feedbacks.map((text, index) => <Feedback key={index} text={text} />)
        ) : (
          <p className='flex items-center gap-1 font-bold text-gray-500'>
            오늘 첫 스피치에 도전해보세요 <MicrophoneIcon className='mt-1' />
          </p>
        )}
      </div>
    </div>
  );
};
