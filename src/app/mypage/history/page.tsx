'use client';

import {useState} from 'react';
import {UpDownButton} from '@/components/common/buttons/UpDownButton';
import {ToggleSegment} from '@/components/mypage/history/ToggleSegment';
import {DetailSpeechHistoryCardList} from '@/components/mypage/history/DetailSpeechHistoryCardList';
import {Pagination} from '@/components/common/Pagination';
import {useSpeechList} from '@/hooks/queries/useUser';
import {Spinner} from '@/components/common/Spinner';
import {ErrorScreen} from '@/components/common/ErrorScreen';
import type {SpeechListParams} from '@/services/api/user/userSpeechesApi';

type SortType = 'date' | 'score';
type ArrowType = 'up' | 'down';

export default function Historypage() {
  const [sortType, setSortType] = useState<SortType>('date');
  const [selectedArrow, setSelectedArrow] = useState<ArrowType>('down');
  const [currentPage, setCurrentPage] = useState(0);

  const sortParam =
    `${sortType}_${selectedArrow === 'down' ? 'desc' : 'asc'}` as SpeechListParams['sort'];

  const {data, isLoading, isError} = useSpeechList({
    page: currentPage,
    sort: sortParam,
  });

  const handleSortTypeChange = (type: SortType) => {
    setSortType(type);
    setCurrentPage(0);
  };

  const handleArrowChange = (arrow: ArrowType) => {
    setSelectedArrow(arrow);
    setCurrentPage(0);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page - 1);
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  if (isLoading) return <Spinner />;
  if (isError || !data) return <ErrorScreen />;

  return (
    <div className='flex min-h-screen flex-col gap-8 p-6'>
      <div className='flex items-center justify-between'>
        <ToggleSegment tab={sortType} onChange={handleSortTypeChange} />
        <UpDownButton
          selected={selectedArrow}
          onUpClick={() => handleArrowChange('up')}
          onDownClick={() => handleArrowChange('down')}
        />
      </div>

      <DetailSpeechHistoryCardList speeches={data.speeches} />

      <Pagination
        currentPage={data.currentPage + 1}
        totalPages={data.totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
