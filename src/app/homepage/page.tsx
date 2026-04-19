'use client';

import {
  mockUserName,
  mockRadarChart,
  mockMonthlyScore,
  mockTodayPractice,
  mockFeedbacks,
  mockDailyQuiz,
} from '@/mocks/homepage';
import {useState} from 'react';
import {ROUTES} from '@/constants/routes';
import {useRouter} from 'next/navigation';
import {Greeting} from '@/components/homepage/Greeting';
import {GrowthChart} from '@/components/homepage/GrowthChart';
import {MonthlyScore} from '@/components/homepage/MonthlyScore';
import {TodayPractice} from '@/components/homepage/TodayPractice';
import {FeedbackList} from '@/components/homepage/FeedbackSection/FeedbackList';
import {DailyQuiz} from '@/components/homepage/DailyQuiz';
import {Button} from '@/components/homepage/Button';

export default function Homepage() {
  const router = useRouter();

  const [index, setIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const current = mockDailyQuiz[index];
  const {score, changeRate} = mockMonthlyScore;
  const {minutes} = mockTodayPractice;

  const handleQuizNext = () => {
    setIndex((prev) => {
      if (prev + 1 >= mockDailyQuiz.length) {
        setIsFinished(true);
        return prev;
      }
      return prev + 1;
    });
  };

  const handleButtonClick = () => {
    router.push(ROUTES.RECORD);
  };

  return (
    <div className='flex flex-col gap-8 p-6 px-6 pt-8 pb-29'>
      <Greeting userName={mockUserName} />

      <GrowthChart data={mockRadarChart} />

      <MonthlyScore score={score} changeRate={changeRate} />

      <TodayPractice minutes={minutes} />

      <section>
        <FeedbackList feedbacks={mockFeedbacks} />
      </section>

      <section className='flex flex-col gap-4'>
        <DailyQuiz
          {...current}
          currentIndex={index}
          isFinished={isFinished}
          totalIndex={mockDailyQuiz.length}
          onNext={handleQuizNext}
        />
      </section>

      <Button onClick={handleButtonClick} />
    </div>
  );
}
