import {useEffect} from 'react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

/**
 * 상단에서 슬라이드 다운으로 나타나 일정 시간 후 페이드 아웃되는 토스트.
 * - isVisible이 true가 되면 표시되고, duration 이후 자동으로 onClose를 호출한다.
 * - 스크린 리더 사용자를 위해 role="status", aria-live="polite"를 적용한다.
 */
const DEFAULT_DURATION_MS = 3000;

const Toast = ({
  message,
  isVisible,
  onClose,
  duration = DEFAULT_DURATION_MS,
}: ToastProps) => {
  /* isVisible이 true가 되면 duration 후 onClose를 호출한다 */
  useEffect(() => {
    if (!isVisible) return;

    const timeoutId = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isVisible, duration, onClose]);

  return (
    <div
      role='status'
      aria-live='polite'
      className={`text-primary fixed top-24 left-1/2 z-50 max-w-[90vw] -translate-x-1/2 transform rounded-full bg-[#EAEAD1] px-6 py-3 text-sm font-semibold whitespace-nowrap shadow-lg transition-all duration-300 ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none -translate-y-4 opacity-0'
      }`}>
      {message}
    </div>
  );
};

export default Toast;
