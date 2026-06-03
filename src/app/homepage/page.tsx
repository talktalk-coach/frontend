'use client';

import {mockUserName} from '@/mocks/homepage';
import {ROUTES} from '@/constants/routes';
import {useRouter} from 'next/navigation';
import {Greeting} from '@/components/homepage/Greeting';
import {GrowthChart} from '@/components/homepage/GrowthChart';
import {MonthlyScore} from '@/components/homepage/MonthlyScore';
import {TodayPractice} from '@/components/homepage/TodayPractice';
import {FeedbackList} from '@/components/homepage/FeedbackSection/FeedbackList';
import {DailyQuiz} from '@/components/homepage/DailyQuiz';
import {HomePageButton} from '@/components/common/buttons/HomePageButton';
import {ErrorScreen} from '@/components/common/ErrorScreen';
import {Spinner} from '@/components/common/Spinner';
import {mapScoreLabel} from '@/utils/labelMapping';
import {useHome} from '@/hooks/queries/useHome';
import {useTodayQuiz} from '@/hooks/queries/useQuiz';
import {useQuizProgress} from '@/hooks/useQuizProgress';

export default function Homepage() {
  const router = useRouter();
  const {
    data: homeData,
    isLoading: isHomeLoading,
    isError: isHomeError,
  } = useHome();
  const {
    data: quizData,
    isLoading: isQuizLoading,
    isError: isQuizError,
  } = useTodayQuiz();

  const {index, quizFinished, handleQuizNext} = useQuizProgress(quizData);

  if (isHomeLoading || isQuizLoading) return <Spinner />;
  if (isHomeError || !homeData || isQuizError || !quizData)
    return <ErrorScreen />;

  const current = quizData[index];

  const monthlyScores = homeData?.monthlyScores ?? [];
  const currentMonth = monthlyScores[0];
  const prevMonth = monthlyScores[1];

  const score = currentMonth?.averageScore ?? 0;
  const changeRate = prevMonth?.averageScore
    ? score - prevMonth.averageScore
    : 0;

  const monthlyMessage = prevMonth?.message ?? '';

  const handleButtonClick = () => {
    router.push(ROUTES.RECORD);
  };

  return (
    <div className='flex flex-col gap-8 p-6 px-6 pt-8 pb-29'>
      {/* user api 연동 후 반영할 예정 */}
      <Greeting userName={mockUserName} />

      <GrowthChart data={mapScoreLabel(homeData.radarAverage)} />

      <MonthlyScore
        score={score}
        changeRate={changeRate}
        message={monthlyMessage}
      />

      <TodayPractice minutes={homeData.todayPracticeMinutes} />

      <section>
        <FeedbackList feedbacks={homeData.summaryFeedback} />
      </section>

      <section className='flex flex-col gap-4'>
        <DailyQuiz
          key={index}
          wordId={current.wordId}
          question={current.description}
          options={current.options}
          currentIndex={index}
          isFinished={quizFinished}
          totalIndex={quizData.length}
          onNext={handleQuizNext}
        />
      </section>

      <HomePageButton onClick={handleButtonClick} />
    </div>
  );
}
