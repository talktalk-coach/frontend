'use client';

import {AreaChart, Area, XAxis, ResponsiveContainer, Dot} from 'recharts';
import type {DailyScoreItem} from '@/types/stats';

interface DailyScoreChartProps {
  scores: DailyScoreItem[];
  average: number;
}

export const DailyScoreChart = ({scores, average}: DailyScoreChartProps) => {
  return (
    <section className='bg-surface border-divider/30 flex w-full flex-col gap-6 rounded-[32px] border p-6 shadow-sm'>
      <header className='flex items-center justify-between'>
        <h3 className='text-primary text-xl font-bold tracking-[-0.32px]'>
          일별 나의 성장치
        </h3>
        <span className='font-pretendard text-primary2 rounded-2xl bg-[#EEEEE5] px-2 py-1 text-[10px] font-bold'>
          LATEST 7 DAYS
        </span>
      </header>

      <div className='rounded-[48px] bg-[#EEEEE5]/30 px-5 py-6'>
        <div className='h-50 w-full'>
          <ResponsiveContainer width='100%' height='100%'>
            <AreaChart
              data={scores}
              margin={{top: 40, right: 4, left: 4, bottom: 0}}>
              <defs>
                <linearGradient id='dailyScoreFill' x1='0' y1='0' x2='0' y2='1'>
                  <stop offset='0%' stopColor='#485422' stopOpacity={0.3} />
                  <stop offset='100%' stopColor='#485422' stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type='monotone'
                dataKey='score'
                stroke='#485422'
                strokeWidth={2}
                fill='url(#dailyScoreFill)'
                dot={<Dot r={3} fill='#485422' />}
                activeDot={{r: 5, fill: '#485422'}}
              />
              <XAxis
                dataKey='date'
                axisLine={false}
                tickLine={false}
                interval={0}
                tick={{fill: '#46483C', fontSize: 11, fontWeight: 500}}
                tickMargin={8}
                padding={{left: 15, right: 15}}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <footer className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <span
            className='bg-primary h-3 w-3 rounded-full'
            aria-hidden='true'
          />
          <span className='font-pretendard text-primary2 text-sm font-medium'>
            Daily Score Distribution
          </span>
        </div>
        <span className='font-pretendard text-primary text-sm font-bold'>
          Avg. {average}
        </span>
      </footer>
    </section>
  );
};
