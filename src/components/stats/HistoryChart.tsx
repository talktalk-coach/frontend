'use client';

import {LineChart, Line, XAxis, ResponsiveContainer} from 'recharts';
import type {GradeCode} from '@/constants/difficulty';
import type {GrowthHistoryItem} from '@/services/api/user/userGrowthHistoryApi';

const LEVEL_COLORS: Record<GradeCode, string> = {
  ELEM_1_2: '#D4C28A',
  ELEM_3_4: '#BFCD8F',
  ELEM_5_6: '#8A9A5B',
  MIDDLE_1_2: '#606C38',
  MIDDLE_3: '#485422',
};

interface HistoryChartProps {
  history: GrowthHistoryItem[];
}

type ChartRow = {x: number} & Partial<Record<GradeCode, number>>;

export const HistoryChart = ({history}: HistoryChartProps) => {
  const rows: ChartRow[] = history.flatMap((item) => {
    const n = item.scores.length;
    return item.scores.map((score, i) => ({
      x: n === 1 ? 0.5 : i / (n - 1),
      [item.targetLevel]: score.averageScore,
    }));
  });

  return (
    <section className='bg-surface border-divider/30 flex w-full flex-col gap-6 rounded-[32px] border p-6 shadow-sm'>
      <div className='flex flex-col gap-3'>
        <h3 className='text-primary text-xl font-bold tracking-[-0.32px]'>
          성장치 히스토리
        </h3>

        <ul className='flex flex-wrap gap-x-4 gap-y-2'>
          {history.map((item) => (
            <li key={item.targetLevel} className='flex items-center gap-1.5'>
              <span
                className='h-1 w-3 rounded-full'
                style={{backgroundColor: LEVEL_COLORS[item.targetLevel]}}
                aria-hidden='true'
              />
              <span className='text-primary2 text-[11px] font-bold tracking-[-0.32px]'>
                {item.levelLabel}
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
            data={rows}
            margin={{top: 40, right: 4, left: 4, bottom: 0}}>
            {history.map((item) => (
              <Line
                key={item.targetLevel}
                type='monotone'
                dataKey={item.targetLevel}
                stroke={LEVEL_COLORS[item.targetLevel]}
                strokeWidth={3}
                dot={
                  item.scores.length === 1
                    ? {r: 4, fill: LEVEL_COLORS[item.targetLevel]}
                    : false
                }
                activeDot={{r: 4, fill: LEVEL_COLORS[item.targetLevel]}}
                connectNulls
              />
            ))}
            <XAxis
              dataKey='x'
              type='number'
              domain={[0, 1]}
              ticks={[0, 0.5, 1]}
              tickFormatter={(v) =>
                v === 0 ? '시작' : v === 1 ? '최근' : '중간'
              }
              axisLine={false}
              tickLine={false}
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
