'use client';

import {LineChart, Line, XAxis, ResponsiveContainer} from 'recharts';
import type {TargetLevel} from '@/types/common';
import type {GrowthHistoryItem} from '@/services/api/user/userGrowthHistoryApi';

const LEVEL_COLORS: Record<TargetLevel, string> = {
  ELEM_1_2: '#D4C28A',
  ELEM_3_4: '#BFCD8F',
  ELEM_5_6: '#8A9A5B',
  MIDDLE_1_2: '#606C38',
  MIDDLE_3: '#485422',
};

const STEPS = 24;

interface HistoryChartProps {
  history: GrowthHistoryItem[];
}

type ChartRow = {label: string} & Partial<Record<TargetLevel, number>>;

const resample = (values: number[]): number[] => {
  if (values.length === 0) return [];
  if (values.length === 1) return Array(STEPS + 1).fill(values[0]);
  return Array.from({length: STEPS + 1}, (_, s) => {
    const pos = (s / STEPS) * (values.length - 1);
    const lo = Math.floor(pos);
    const hi = Math.ceil(pos);
    return (
      Math.round((values[lo] + (values[hi] - values[lo]) * (pos - lo)) * 10) /
      10
    );
  });
};

export const HistoryChart = ({history}: HistoryChartProps) => {
  const series = history
    .filter((item) => item.scores.length > 0)
    .map((item) => ({
      targetLevel: item.targetLevel,
      levelLabel: item.levelLabel,
      points: resample(item.scores.map((s) => s.averageScore)),
    }));

  const rows: ChartRow[] = Array.from({length: STEPS + 1}, (_, s) => {
    const row: ChartRow = {
      label:
        s === 0 ? '시작' : s === STEPS / 2 ? '중간' : s === STEPS ? '최근' : '',
    };
    series.forEach(({targetLevel, points}) => {
      row[targetLevel] = points[s];
    });
    return row;
  });

  return (
    <section className='bg-surface border-divider/30 flex w-full flex-col gap-6 rounded-[32px] border p-6 shadow-sm'>
      <div className='flex flex-col gap-3'>
        <h3 className='text-primary text-xl font-bold tracking-[-0.32px]'>
          성장치 히스토리
        </h3>

        <ul className='flex flex-wrap gap-x-4 gap-y-2'>
          {series.map((item) => (
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
            {series.map((item) => (
              <Line
                key={item.targetLevel}
                type='monotone'
                dataKey={item.targetLevel}
                stroke={LEVEL_COLORS[item.targetLevel]}
                strokeWidth={3}
                dot={false}
                activeDot={{r: 4, fill: LEVEL_COLORS[item.targetLevel]}}
                isAnimationActive={false}
              />
            ))}
            <XAxis
              dataKey='label'
              interval={0}
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
