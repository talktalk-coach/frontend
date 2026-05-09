'use client';

import {Check} from 'lucide-react';

type AgreementCheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
};

export const AgreementCheckbox = ({
  label,
  checked,
  onChange,
  required = false,
}: AgreementCheckboxProps) => {
  return (
    <label className='flex items-center gap-3'>
      <input
        type='checkbox'
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className='hidden'
      />

      <div
        className={`flex h-5 w-5 items-center justify-center rounded-md border border-[#C7C8B9] bg-[#EEEEE5]`}>
        {checked && (
          <Check className='text-primary2 h-4 w-4' strokeWidth={2.5} />
        )}
      </div>

      <span className='text-primary2 text-sm font-semibold'>
        {label}

        {required && <span className='text-primary ml-1 text-sm'>(필수)</span>}
      </span>
    </label>
  );
};
