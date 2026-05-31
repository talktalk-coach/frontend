'use client';

import {useState, useMemo} from 'react';
import {UpDownButton} from '@/components/common/buttons/UpDownButton';
import {ToggleSegment} from '@/components/mypage/history/ToggleSegment';
import {DetailSpeechHistoryCardList} from '@/components/mypage/history/DetailSpeechHistoryCardList';
import {useSpeechList} from '@/hooks/queries/useUser';
import {Spinner} from '@/components/common/Spinner';
import {ErrorScreen} from '@/components/common/ErrorScreen.';

type SortType = 'date' | 'score';
type ArrowType = 'up' | 'down';

export default function Historypage() {
  const [sortType, setSortType] = useState<SortType>('date');
  const [selectedArrow, setSelectedArrow] = useState<ArrowType>('down');

  const {data, isLoading, isError} = useSpeechList();

  const sortedSpeeches = useMemo(() => {
    const speeches = [...(data?.speeches ?? [])];

    return speeches.sort((a, b) => {
      if (sortType === 'date') {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return selectedArrow === 'down' ? dateB - dateA : dateA - dateB;
      }

      return selectedArrow === 'down'
        ? b.averageScore - a.averageScore
        : a.averageScore - b.averageScore;
    });
  }, [data?.speeches, sortType, selectedArrow]);

  if (isLoading) return <Spinner />;
  if (isError || !data) return <ErrorScreen />;

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
