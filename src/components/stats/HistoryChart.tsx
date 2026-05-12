'use client';

import {LineChart, Line, XAxis, ResponsiveContainer} from 'recharts';
import {HISTORY_GROUPS} from '@/mocks/stats';
import type {MonthlyScoreItem} from '@/mocks/stats';

interface HistoryChartProps {
  scores: MonthlyScoreItem[];
}

export const HistoryChart = ({scores}: HistoryChartProps) => {
  return (
    <section className='bg-surface border-divider/30 flex w-full flex-col gap-6 rounded-[32px] border p-6 shadow-sm'>
      <div className='flex flex-col gap-3'>
        <h3 className='text-primary text-xl font-bold tracking-[-0.32px]'>
          성장치 히스토리
        </h3>

        <ul className='flex flex-wrap gap-x-4 gap-y-2'>
          {HISTORY_GROUPS.map((group) => (
            <li key={group.key} className='flex items-center gap-1.5'>
              <span
                className='h-1 w-3 rounded-full'
                style={{backgroundColor: group.color}}
                aria-hidden='true'
              />
              <span className='text-primary2 text-[11px] font-bold tracking-[-0.32px]'>
                {group.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className='relative h-64 rounded-[48px] bg-[#EEEEE5]/30 px-5 py-6'>
        <div className='pointer-events-none absolute inset-x-[35px] top-4 bottom-12 flex justify-between'>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className='h-full w-px bg-[#1A1C17]/5'
              aria-hidden='true'
            />
          ))}
        </div>

        <ResponsiveContainer width='100%' height='100%'>
          <LineChart
            data={scores}
            margin={{top: 40, right: 4, left: 4, bottom: 0}}>
            {HISTORY_GROUPS.map((group) => (
              <Line
                key={group.key}
                type='monotone'
                dataKey={group.key}
                stroke={group.color}
                strokeWidth={3}
                dot={false}
                activeDot={{r: 4, fill: group.color}}
              />
            ))}
            <XAxis
              dataKey='month'
              axisLine={false}
              tickLine={false}
              interval={0}
              tick={{fill: '#46483C', fontSize: 11, fontWeight: 500}}
              tickMargin={8}
              padding={{left: 12, right: 12}}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};
