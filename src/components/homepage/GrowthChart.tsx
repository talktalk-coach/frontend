import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarRadiusAxis,
} from 'recharts';
import Growthchart from '@/assets/homepage/growthchart.svg';

type GrowthChartDataProps = {
  label: string;
  value: number;
};

type GrowthChartProps = {
  data: GrowthChartDataProps[];
};

export const GrowthChart = ({data}: GrowthChartProps) => {
  return (
    <section className='shadow-soft flex flex-col gap-6 rounded-4xl bg-white px-6 pt-6'>
      <div className='flex flex-col gap-0.5'>
        <div className='flex justify-between'>
          <h2 className='text-primary text-lg font-extrabold'>성장치 그래프</h2>
          <Growthchart />
        </div>
        <span className='text-primary2 text-[12px] font-semibold'>
          최근 5회 연습 데이터 기반
        </span>
        <div className='h-70 w-full'>
          <ResponsiveContainer>
            <RadarChart data={data}>
              <PolarGrid
                gridType='polygon'
                radialLines={false}
                stroke='#77786B'
              />
              <PolarAngleAxis
                dataKey='label'
                tick={{fontSize: 10, fill: '#46483C', fontWeight: 600}}
              />
              <PolarRadiusAxis
                tickCount={4}
                tick={false}
                axisLine={false}
                domain={[0, 100]}
              />
              <Radar
                name='value'
                dataKey='value'
                stroke='#485422'
                fill='#485422'
                fillOpacity={0.2}
                strokeWidth={4}
                dot={{r: 4, fill: '#485422', stroke: 'none', fillOpacity: 1}}
                isAnimationActive={true}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};
