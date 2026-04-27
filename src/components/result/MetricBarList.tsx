'use client';

import {MetricBar, MetricBarProps} from '@/components/result/MetricBar';

type MetricBarListProps = {
  metrics: MetricBarProps[];
};

export const MetricBarList = ({metrics}: MetricBarListProps) => {
  return (
    <section className='shadow-soft flex flex-col gap-6 rounded-4xl bg-white p-6'>
      <h2 className='text-primary font-extrabold'>평가 지표</h2>
      <div className='flex flex-col gap-6'>
        {metrics.map((item) => (
          <MetricBar key={item.label} label={item.label} value={item.value} />
        ))}
      </div>
    </section>
  );
};
