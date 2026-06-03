'use client';

import {useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';
import {GradeBadge} from '@/components/mypage/GradeBadge';
import type {Speech} from '@/services/api/user/userSpeechesApi';
import CalenderIcon from '@/assets/mypage/calender.svg';
import {formatDate} from '@/utils/formatDate';

interface DetailSpeechHistoryCardProps {
  speech: Speech;
}

export const DetailSpeechHistoryCard = ({
  speech,
}: DetailSpeechHistoryCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`${ROUTES.RESULT}/${speech.speechId}`);
  };

  return (
    <button
      type='button'
      onClick={handleClick}
      className='flex h-42.5 w-full rounded-4xl bg-white px-8 py-6 text-left transition-opacity hover:opacity-80'>
      <div className='flex w-full flex-col justify-between'>
        <div className='flex justify-between'>
          <h3 className='text-primary max-w-3/4 text-2xl font-extrabold'>
            {speech.title}
          </h3>

          <div className='h-3'>
            <GradeBadge score={speech.averageScore} />
          </div>
        </div>

        <div className='flex place-items-end justify-between'>
          <div className='flex items-center gap-2'>
            <CalenderIcon className='mb-0.5' />
            <p className='text-primary2 text-sm font-semibold'>
              {formatDate(speech.createdAt)}
            </p>
          </div>

          <div className='flex flex-col'>
            <span className='text-primary2/50 ml-0.5 text-xs font-bold'>
              SCORE
            </span>

            <span className='text-primary text-4xl leading-none font-extrabold'>
              {Math.round(speech.averageScore)}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
};
