import type {PerformanceMetric} from '@/mocks/stats';

interface MasteryCardProps {
  metrics: PerformanceMetric[];
  overallAverage: number;
}

export const MasteryCard = ({metrics, overallAverage}: MasteryCardProps) => {
  return (
    <section className='bg-surface border-divider/30 flex w-full flex-col gap-6 rounded-3xl border p-6 shadow-sm'>
      <header className='flex items-start justify-between'>
        <h3 className='text-primary text-xl font-bold tracking-[-0.32px]'>
          핵심 역량 마스터리
        </h3>
        <div className='flex flex-col items-end gap-0.5'>
          <span className='font-pretendard text-primary text-3xl leading-none font-bold'>
            {overallAverage}
          </span>
          <span className='font-pretendard text-primary2 text-[10px] font-semibold'>
            종합 평균 점수
          </span>
        </div>
      </header>

      <ul className='flex flex-col gap-4 pb-2'>
        {metrics.map((metric) => (
          <li key={metric.label} className='flex flex-col gap-1.5'>
            <div className='flex items-center justify-between'>
              <span className='font-pretendard text-primary2 text-xs font-semibold'>
                {metric.label}
              </span>
              <span className='font-pretendard text-primary2 text-xs font-bold'>
                {metric.value}
              </span>
            </div>
            <div
              role='progressbar'
              aria-label={metric.label}
              aria-valuenow={metric.value}
              aria-valuemin={0}
              aria-valuemax={100}
              className='bg-input relative h-2 w-full overflow-hidden rounded-full'>
              <div
                className='bg-primary absolute inset-y-0 left-0 rounded-full'
                style={{width: `${metric.value}%`}}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
