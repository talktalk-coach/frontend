import {PageTitle} from '@/components/stats/PageTitle';
import {HighlightMessage} from '@/components/stats/HighlightMessage';
import {GrowthRateCard} from '@/components/stats/GrowthRateCard';
import {mockHighlight, mockGrowthRate} from '@/mocks/stats';

export default function StatsPage() {
  return (
    <main className='flex flex-col items-center px-6 pt-6 pb-44'>
      <div className='flex w-full max-w-[342px] flex-col gap-8'>
        <PageTitle />
        <HighlightMessage highlight={mockHighlight} />
        <GrowthRateCard growthRate={mockGrowthRate} />
      </div>
    </main>
  );
}
