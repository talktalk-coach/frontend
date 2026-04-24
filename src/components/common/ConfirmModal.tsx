'use client';

import {useEffect} from 'react';

type ConfirmModalVariant = 'default' | 'danger';

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: ConfirmModalVariant;
  onConfirm: () => void;
  onCancel: () => void;
}

/**
 * 공용 확인 모달
 * - 배경 오버레이 클릭 시 onCancel이 호출
 * - ESC 키로 창 닫을 수 있음
 * - 열린 동안 배경 스크롤 x
 *
 * variant 종류:
 * - default: 일반 확인 (로그아웃 등). 확인 버튼이 primary 색상
 * - danger: 위험 작업 (회원탈퇴, 삭제 등). 확인 버튼이 빨간색
 *
 * @example
 * <ConfirmModal
 *   isOpen={isOpen}
 *   title='로그아웃'
 *   message='로그아웃하시겠습니까?'
 *   confirmText='로그아웃'
 *   onConfirm={handleLogout}
 *   onCancel={closeModal}
 * />
 */

const VARIANT_CONFIRM_STYLES: Record<ConfirmModalVariant, string> = {
  default: 'bg-primary text-white',
  danger: 'bg-[#BA1A1A] text-white',
};

export default function ConfirmModal({
  isOpen,
  title,
  message,
  confirmText = '확인',
  cancelText = '취소',
  variant = 'default',
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscKey = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') onCancel();
    };

    document.addEventListener('keydown', handleEscKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-title'
      className='fixed inset-0 z-50 flex items-center justify-center px-6'>
      <div
        className='absolute inset-0 bg-black/40 backdrop-blur-sm'
        onClick={onCancel}
      />

      <div className='bg-background relative z-10 w-full max-w-sm rounded-3xl p-6 shadow-xl'>
        <h2 id='modal-title' className='text-text text-lg font-bold'>
          {title}
        </h2>

        <p className='mt-3 text-sm leading-relaxed whitespace-pre-line text-[#46483C]'>
          {message}
        </p>

        <div className='mt-6 flex gap-3'>
          <button
            type='button'
            onClick={onCancel}
            className='bg-surface text-text flex-1 rounded-full py-3 text-sm font-semibold'>
            {cancelText}
          </button>
          <button
            type='button'
            onClick={onConfirm}
            className={`flex-1 rounded-full py-3 text-sm font-semibold ${VARIANT_CONFIRM_STYLES[variant]}`}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
