'use client';

import {useEffect, useRef, useState} from 'react';

interface UseRecordTimerProps {
  isRunning: boolean;
  onWarning: () => void;
  onDangerStart: () => void;
  onTimeLimit: () => void;
}

interface UseRecordTimerReturn {
  elapsedSeconds: number;
  resetTimer: () => void;
}

/**
 * 카운트업 타이머 훅
 * - 12분 경과 시 onWarning 콜백을 1회 호출한다. (경고 토스트용)
 * - 14분 경과 시 onDangerStart 콜백을 1회 호출한다. (시각 경고 시작용)
 * - 15분 도달 시 onTimeLimit 콜백을 호출한다. (자동 종료용)
 */
const TIMER_INTERVAL_MS = 1000;
const WARNING_THRESHOLD_SEC = 12 * 60;
const DANGER_THRESHOLD_SEC = 14 * 60;
const LIMIT_THRESHOLD_SEC = 15 * 60;

export const useRecordTimer = ({
  isRunning,
  onWarning,
  onDangerStart,
  onTimeLimit,
}: UseRecordTimerProps): UseRecordTimerReturn => {
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);

  const warningFiredRef = useRef<boolean>(false);
  const dangerFiredRef = useRef<boolean>(false);
  const limitFiredRef = useRef<boolean>(false);

  const onWarningRef = useRef(onWarning);
  const onDangerStartRef = useRef(onDangerStart);
  const onTimeLimitRef = useRef(onTimeLimit);

  useEffect(() => {
    onWarningRef.current = onWarning;
    onDangerStartRef.current = onDangerStart;
    onTimeLimitRef.current = onTimeLimit;
  }, [onWarning, onDangerStart, onTimeLimit]);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setElapsedSeconds((prev) => {
        const next = prev + 1;

        if (next === WARNING_THRESHOLD_SEC && !warningFiredRef.current) {
          warningFiredRef.current = true;
          onWarningRef.current();
        }
        if (next === DANGER_THRESHOLD_SEC && !dangerFiredRef.current) {
          dangerFiredRef.current = true;
          onDangerStartRef.current();
        }
        if (next >= LIMIT_THRESHOLD_SEC && !limitFiredRef.current) {
          limitFiredRef.current = true;
          onTimeLimitRef.current();
        }

        return next;
      });
    }, TIMER_INTERVAL_MS);

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const resetTimer = (): void => {
    setElapsedSeconds(0);
    warningFiredRef.current = false;
    dangerFiredRef.current = false;
    limitFiredRef.current = false;
  };

  return {elapsedSeconds, resetTimer};
};
