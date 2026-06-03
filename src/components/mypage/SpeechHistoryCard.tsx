import {GradeBadge} from '@/components/mypage/GradeBadge';
import {formatDate} from '@/utils/formatDate';
import type {Speech} from '@/services/api/user/userSpeechesApi';

interface SpeechHistoryCardProps {
  speech: Speech;
}

export const SpeechHistoryCard = ({speech}: SpeechHistoryCardProps) => {
  return (
    <div className='flex cursor-pointer items-center justify-between rounded-[48px] bg-white px-6 py-6 transition hover:shadow-md'>
      <div className='flex flex-col gap-1.5'>
        <h3 className='text-text text-xl font-extrabold'>{speech.title}</h3>
        <div className='flex items-center gap-2'>
          <p className='text-sm font-semibold text-[#46483C]'>
            {formatDate(speech.createdAt)}
          </p>
          <GradeBadge score={speech.averageScore} />
        </div>
      </div>

      <span className='text-primary text-4xl leading-none font-extrabold'>
        {Math.round(speech.averageScore)}
      </span>
    </div>
  );
};
