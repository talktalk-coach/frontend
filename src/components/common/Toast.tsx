import {useEffect} from 'react';

type ToastVariant = 'info' | 'error' | 'success';
type ToastPosition = 'viewport-top' | 'container-top' | 'container-bottom';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  variant?: ToastVariant;
  position?: ToastPosition;
  duration?: number;
}

/**
 * 상단에서 슬라이드 다운으로 나타나 일정 시간 후 페이드 아웃되는 토스트.
 * - isVisible이 true가 되면 표시되고, duration 이후 자동으로 onClose를 호출한다.
 * - 스크린 리더 사용자를 위해 role="status", aria-live="polite"를 적용한다.
 *
 * variant 종류:
 * - info (기본): 크림톤, 정보 안내용. 녹음 페이지 등에서 사용
 * - error: 연빨강, 오류/경고용. home 퀴즈 오답 등에서 사용
 * - success: 다크, 성공 확인용. result 복사 완료 등에서 사용
 *
 * position 종류:
 * - viewport-top: 뷰포트 상단 고정. 전체 화면 맥락의 안내용
 * - container-top (기본): 부모 컨테이너 내부 상단.
 *   사용 시 부모 요소에 `relative` 클래스를 반드시 추가해야 한다.
 * - container-bottom: 부모 컨테이너 내부 하단.
 *   사용 시 부모 요소에 `relative` 클래스를 반드시 추가해야 한다.
 *
 * @example
 * // 뷰포트 상단 안내 (기본 info)
 * <Toast message='저장되었습니다' isVisible={open} onClose={close} />
 *
 * @example
 * // 컨테이너 내부 오답 피드백
 * <section className='relative'>
 *   <Toast
 *     variant='error'
 *     position='container-top'
 *     message='틀렸습니다'
 *     isVisible={open}
 *     onClose={close}
 *   />
 * </section>
 */

/* variant별 기본 노출 시간 */
const DEFAULT_DURATIONS: Record<ToastVariant, number> = {
  info: 3000,
  error: 1500,
  success: 1500,
};

/* variant별 색상/테두리 */
const VARIANT_STYLES: Record<ToastVariant, string> = {
  info: 'bg-surface text-primary',
  error: 'bg-red-50 text-red-700 border border-red-200 backdrop-blur-md',
  success: 'bg-black/80 text-white backdrop-blur-md',
};

/* position별 위치 지정 */
const POSITION_STYLES: Record<ToastPosition, string> = {
  'viewport-top': 'fixed top-24 left-1/2 -translate-x-1/2',
  'container-top': 'absolute top-4 left-1/2 -translate-x-1/2',
  'container-bottom': 'absolute bottom-4 left-1/2 -translate-x-1/2',
};

/* position별 숨김 상태의 슬라이드 방향 */
const HIDDEN_TRANSFORMS: Record<ToastPosition, string> = {
  'viewport-top': '-translate-y-4',
  'container-top': '-translate-y-4',
  'container-bottom': 'translate-y-4',
};

export default function Toast({
  message,
  isVisible,
  onClose,
  variant = 'info',
  position = 'container-top',
  duration,
}: ToastProps) {
  const actualDuration = duration ?? DEFAULT_DURATIONS[variant];

  /* isVisible이 true가 되면 duration 후 onClose를 호출한다 */
  useEffect(() => {
    if (!isVisible) return;

    const timeoutId = setTimeout(() => {
      onClose();
    }, actualDuration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isVisible, actualDuration, onClose]);

  return (
    <div
      role='status'
      aria-live='polite'
      className={`z-50 max-w-[90vw] transform rounded-full px-6 py-3 text-sm font-semibold whitespace-nowrap shadow-lg transition-all duration-300 ${
        POSITION_STYLES[position]
      } ${VARIANT_STYLES[variant]} ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : `${HIDDEN_TRANSFORMS[position]} pointer-events-none opacity-0`
      }`}>
      {variant === 'success' && <span className='mr-2'>✓</span>}
      {message}
    </div>
  );
}
