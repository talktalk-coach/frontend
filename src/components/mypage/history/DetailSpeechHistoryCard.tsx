import {GradeBadge} from '@/components/mypage/GradeBadge';
import type {SpeechHistoryItem} from '@/mocks/mypage';
import CalenderIcon from '@/assets/mypage/calender.svg';

interface DetailSpeechHistoryCardProps {
  speech: SpeechHistoryItem;
}

export const DetailSpeechHistoryCard = ({
  speech,
}: DetailSpeechHistoryCardProps) => {
  return (
    <div className='flex h-42.5 w-full rounded-4xl bg-white px-8 py-6'>
      <div className='flex w-full flex-col justify-between'>
        <div className='flex justify-between'>
          <h3 className='text-primary max-w-3/4 text-2xl font-extrabold'>
            {speech.title}
          </h3>
          <div className='h-3'>
            <GradeBadge grade={speech.grade} />
          </div>
        </div>

        <div className='flex place-items-end justify-between'>
          <div className='flex items-center gap-2'>
            <CalenderIcon className='mb-0.5' />
            <p className='text-primary2 text-sm font-semibold'>{speech.date}</p>
          </div>
          <div className='flex flex-col'>
            <span className='text-primary2/50 ml-0.5 text-xs font-bold'>
              SCORE
            </span>
            <span className='text-primary text-4xl leading-none font-extrabold'>
              {speech.score}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
