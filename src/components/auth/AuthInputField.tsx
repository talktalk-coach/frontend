'use client';

import {INPUT_FIELD_MAP, InputType} from '@/constants/auth';

type AuthInputFieldProps = {
  label: InputType;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  onButtonClick?: () => void;
  buttonDisabled?: boolean;
};

export const AuthInputField = ({
  label,
  value,
  onChange,
  error,
  onButtonClick,
  buttonDisabled,
}: AuthInputFieldProps) => {
  const {
    displayLabel,
    type,
    placeholder,
    icon: Icon,
    buttonLabel,
  } = INPUT_FIELD_MAP[label];

  return (
    <div className='flex flex-col gap-2'>
      <label className='text-primary ml-4 text-[10px] font-bold tracking-wider'>
        {displayLabel}
      </label>
      <div className='flex w-full gap-2'>
        <div
          className={`bg-input flex items-center rounded-full px-5 py-4 ${buttonLabel ? 'flex-1' : 'w-full'}`}>
          <Icon className='mr-3 shrink-0' />
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className='w-full bg-transparent text-sm focus:outline-none'
          />
        </div>
        {buttonLabel && onButtonClick && (
          <button
            type='button'
            onClick={onButtonClick}
            disabled={buttonDisabled}
            className='bg-input text-primary shrink-0 rounded-full px-5 py-4 text-xs disabled:opacity-40'>
            {buttonLabel}
          </button>
        )}
      </div>

      {error && <p className='ml-4 text-xs text-red-500'>{error}</p>}
    </div>
  );
};
