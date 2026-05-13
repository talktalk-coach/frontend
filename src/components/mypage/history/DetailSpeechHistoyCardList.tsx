import {AnimatedCard} from '@/components/mypage/history/AnimatedCard';
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
      {speeches.map((speech, index) => (
        <AnimatedCard
          key={`${speech.title}-${speech.date}`}
          delay={index * 0.1}>
          <DetailSpeechHistoryCard speech={speech} />
        </AnimatedCard>
      ))}
    </div>
  );
};
