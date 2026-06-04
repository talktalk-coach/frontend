'use client';

import {useStatistics, useGrowthHistory} from '@/hooks/queries/useStats';
import {mapScoreLabel} from '@/utils/labelMapping';
import {Spinner} from '@/components/common/Spinner';
import {ErrorScreen} from '@/components/common/ErrorScreen';
import {PageTitle} from '@/components/stats/PageTitle';
import {HighlightMessage} from '@/components/stats/HighlightMessage';
import {GrowthRateCard} from '@/components/stats/GrowthRateCard';
import {MasteryCard} from '@/components/stats/MasteryCard';
import {DailyScoreChart} from '@/components/stats/DailyScoreChart';
import {HistoryChart} from '@/components/stats/HistoryChart';

export default function StatsPage() {
  const {
    data: stats,
    isLoading: statsLoading,
    isError: statsError,
  } = useStatistics();
  const {
    data: history,
    isLoading: historyLoading,
    isError: historyError,
  } = useGrowthHistory();

  if (statsLoading || historyLoading) return <Spinner />;
  if (statsError || historyError || !stats || !history) return <ErrorScreen />;

  const highlight = {
    title: stats.summaryTitle,
    description: stats.summaryDetail,
  };
  const growthRate = {label: '전체 성장률', value: stats.growthRate};

  const metrics = mapScoreLabel(stats.totalScores);
  const overallAverage = stats.totalScores.averageScore;

  const dailyScores = stats.dailyScores.map((d) => ({
    date: `${d.date.slice(5, 7)}/${d.date.slice(8, 10)}`,
    score: d.averageScore,
  }));
  const dailyAverage =
    Math.round(
      (stats.dailyScores.reduce((sum, d) => sum + d.averageScore, 0) /
        stats.dailyScores.length) *
        10
    ) / 10;

  return (
    <>
      <PageTitle />
      <HighlightMessage highlight={highlight} />
      <GrowthRateCard growthRate={growthRate} />
      <MasteryCard metrics={metrics} overallAverage={overallAverage} />
      <DailyScoreChart scores={dailyScores} average={dailyAverage} />
      <HistoryChart history={history} />
    </>
  );
}
