'use client';

import {useEffect} from 'react';

export type StatusModalVariant = 'info' | 'success' | 'error';

export interface StatusModalProps {
  isOpen: boolean;
  variant: StatusModalVariant;
  message: string;
  onClose: () => void;
}

const VARIANT_STATUS_STYLES: Record<StatusModalVariant, string> = {
  info: 'text-[#46483C]',
  success: 'text-[#46483C]',
  error: 'text-red-700',
};

export const StatusModal = ({
  isOpen,
  variant,
  message,
  onClose,
}: StatusModalProps) => {
  const textColor = VARIANT_STATUS_STYLES[variant];

  useEffect(() => {
    if (!isOpen) return;

    const handleEscKey = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscKey = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-title'
      className='fixed inset-0 z-50 flex items-center justify-center px-12'>
      <div
        className='absolute inset-0 bg-black/40 backdrop-blur-sm'
        onClick={onClose}
      />

      <div className='bg-background relative z-10 w-full max-w-sm rounded-3xl p-6 shadow-xl'>
        <p
          id='modal-title'
          className={`mt-3 text-center text-sm leading-relaxed whitespace-pre-line ${textColor}`}>
          {message}
        </p>

        <div className='mt-6 flex justify-center gap-3'>
          <button
            type='button'
            onClick={onClose}
            className='bg-primary rounded-full px-8 py-3 text-sm font-semibold text-white'>
            확인
          </button>
        </div>
      </div>
    </div>
  );
};
