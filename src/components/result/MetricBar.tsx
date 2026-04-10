'use client';

import {useState, useEffect} from 'react';

export type MetricBarProps = {
  label: string;
  value: number;
};

export const MetricBar = ({label, value}: MetricBarProps) => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setWidth(value);
  }, [value]);

  return (
    <div className='flex flex-col gap-1'>
      <div className='text-primary2 flex justify-between text-xs font-bold'>
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className='h-2 w-full rounded-full bg-[#EEEEE5]'>
        <div
          className='bg-primary h-2 rounded-full transition-all duration-500 ease-out'
          style={{width: `${width}%`}}></div>
      </div>
    </div>
  );
};
