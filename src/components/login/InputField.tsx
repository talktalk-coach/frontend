'use client';

import {INPUT_FIELD_MAP, InputType} from '@/constants/auth';

type InputFieldProps = {
  label: InputType;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputField = ({label, value, onChange}: InputFieldProps) => {
  const {type, placeholder, icon: Icon} = INPUT_FIELD_MAP[label];

  return (
    <div className='flex flex-col gap-2'>
      <label className='text-primary text-shadow ml-4 text-[10px] font-extrabold tracking-wider'>
        {label}
      </label>
      <div className='flex items-center rounded-full bg-[#E9E9E0] px-5 py-3.5 shadow-xl'>
        <Icon className='mr-3' />
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className='flex-1 bg-transparent text-sm focus:outline-none'
        />
      </div>
    </div>
  );
};
