import {DetailSpeechHistoryCard} from '@/components/mypage/history/DetailSpeechHistoryCard';
import type {SpeechHistoryItem} from '@/mocks/mypage';

interface DetailSpeechHistoryListProps {
  speeches: SpeechHistoryItem[];
}

export const DetailSpeechHistoyCardList = ({
  speeches,
}: DetailSpeechHistoryListProps) => {
  return (
    <div className='flex flex-col gap-6'>
      {speeches.map((speech) => (
        <DetailSpeechHistoryCard
          key={`${speech.title}-${speech.date}`}
          speech={speech}
        />
      ))}
    </div>
  );
};
