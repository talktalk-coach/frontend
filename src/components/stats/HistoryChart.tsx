'use client';

import {LineChart, Line, XAxis, YAxis, ResponsiveContainer} from 'recharts';
import type {TargetLevel} from '@/types/common';
import type {GrowthHistoryItem} from '@/services/api/user/userGrowthHistoryApi';

const LEVEL_COLORS: Record<TargetLevel, string> = {
  ELEM_1_2: '#D4C28A',
  ELEM_3_4: '#BFCD8F',
  ELEM_5_6: '#8A9A5B',
  MIDDLE_1_2: '#606C38',
  MIDDLE_3: '#485422',
};

const LEVEL_ORDER: TargetLevel[] = [
  'ELEM_1_2',
  'ELEM_3_4',
  'ELEM_5_6',
  'MIDDLE_1_2',
  'MIDDLE_3',
];

const STEPS = 24;

interface HistoryChartProps {
  history: GrowthHistoryItem[];
}

type ChartRow = {x: number} & Partial<Record<TargetLevel, number>>;

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
  const series = LEVEL_ORDER.map((level) =>
    history.find((h) => h.targetLevel === level)
  )
    .filter(
      (item): item is GrowthHistoryItem => !!item && item.scores.length > 0
    )
    .map((item) => ({
      targetLevel: item.targetLevel,
      levelLabel: item.levelLabel,
      points: resample(item.scores),
    }));

  const all = series.flatMap((s) => s.points);
  const min = all.length ? Math.min(...all) : 0;
  const max = all.length ? Math.max(...all) : 1;
  const range = max - min || 1;
  const GAP = range * 0.6;

  const banded = series.map((s, bandIndex) => ({
    ...s,
    y: s.points.map((p) => p - min + bandIndex * GAP),
  }));

  const rows: ChartRow[] = Array.from({length: STEPS + 1}, (_, idx) => {
    const row: ChartRow = {x: idx};
    banded.forEach(({targetLevel, y}) => {
      row[targetLevel] = y[idx];
    });
    return row;
  });

  return (
    <section className='bg-surface border-divider/30 flex w-full flex-col gap-6 rounded-[32px] border p-6 shadow-sm'>
      <div className='flex flex-col gap-3'>
        <h3 className='text-primary text-xl font-bold tracking-[-0.32px]'>
          성장치 기록
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

        <ResponsiveContainer width='99%' height='100%'>
          <LineChart
            data={rows}
            margin={{top: 5, right: 4, left: 4, bottom: 0}}>
            <YAxis hide />
            {banded.map((item) => (
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
              dataKey='x'
              type='number'
              domain={[0, STEPS]}
              ticks={[0, STEPS / 2, STEPS]}
              tickFormatter={(v) =>
                v === 0 ? '시작' : v === STEPS ? '최근' : '중간'
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
