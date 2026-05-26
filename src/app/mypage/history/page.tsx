'use client';

import {useState, useMemo} from 'react';
import {UpDownButton} from '@/components/common/buttons/UpDownButton';
import {ToggleSegment} from '@/components/mypage/history/ToggleSegment';
import {DetailSpeechHistoryCardList} from '@/components/mypage/history/DetailSpeechHistoryCardList';
import {mockSpeechHistory} from '@/mocks/mypage';

type SortType = 'date' | 'score';
type ArrowType = 'up' | 'down';

export default function Historypage() {
  const [sortType, setSortType] = useState<SortType>('date');
  const [selectedArrow, setSelectedArrow] = useState<ArrowType>('down');

  const sortedSpeeches = useMemo(() => {
    const speeches = [...mockSpeechHistory];

    return speeches.sort((a, b) => {
      if (sortType === 'date') {
        const dateA = new Date(a.date.replaceAll('.', '-')).getTime();
        const dateB = new Date(b.date.replaceAll('.', '-')).getTime();

        if (selectedArrow === 'down') {
          return dateB - dateA;
        }

        return dateA - dateB;
      }

      if (selectedArrow === 'down') {
        return b.score - a.score;
      }

      return a.score - b.score;
    });
  }, [sortType, selectedArrow]);

  return (
    <div className='flex min-h-screen flex-col gap-8 p-6'>
      <div className='flex items-center justify-between'>
        <ToggleSegment tab={sortType} onChange={setSortType} />
        <UpDownButton
          selected={selectedArrow}
          onUpClick={() => setSelectedArrow('up')}
          onDownClick={() => setSelectedArrow('down')}
        />
      </div>
      <DetailSpeechHistoryCardList speeches={sortedSpeeches} />
    </div>
  );
}
