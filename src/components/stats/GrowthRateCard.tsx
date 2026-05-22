import TrendUpIcon from '@/assets/stats/trend-up.svg';
import type {GrowthRate} from '@/mocks/stats';

interface GrowthRateCardProps {
  growthRate: GrowthRate;
}

export const GrowthRateCard = ({growthRate}: GrowthRateCardProps) => {
  return (
    <div className='bg-input flex w-full items-center gap-4 rounded-[32px] p-6'>
      <div className='bg-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full'>
        <TrendUpIcon className='h-5 w-3' />
      </div>
      <div className='flex flex-col'>
        <span className='text-primary2 text-xs font-bold'>
          {growthRate.label}
        </span>
        <span className='font-pretendard text-primary text-2xl font-black'>
          +{growthRate.value}%
        </span>
      </div>
    </div>
  );
};
