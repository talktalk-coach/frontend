import {useState, useMemo, FormEvent} from 'react';
import {EMAIL_REGEX} from '@/constants/auth';
import {mockFindIdSuccess} from '@/mocks/find-account';
import type {FindIdResult} from '@/mocks/find-account';

export type FindIdStep = 'input' | 'success' | 'failure';

/**
 * - 이메일 입력 및 검증
 * - 단계 상태(input/success/failure) 전환
 * - 성공 시 결과 데이터 보관
 * - TODO: 아이디 찾기 API 연동
 */
export const useFindIdForm = () => {
  const [email, setEmail] = useState<string>('');
  const [step, setStep] = useState<FindIdStep>('input');
  const [result, setResult] = useState<FindIdResult | null>(null);

  const emailError = useMemo(() => {
    if (!email) return '';
    if (!EMAIL_REGEX.test(email)) return '올바른 이메일 형식이 아닙니다.';
    return '';
  }, [email]);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (!email || emailError) return;

    /* TODO: 아이디 찾기 API 연동
     * - 성공: setResult(데이터), setStep('success')
     * - 실패: setStep('failure')
     */
    if (email === 'fail@test.com') {
      setStep('failure');
      return;
    }
    setResult(mockFindIdSuccess);
    setStep('success');
  };

  const handleReset = (): void => {
    setEmail('');
    setResult(null);
    setStep('input');
  };

  return {
    email,
    setEmail,
    emailError,
    step,
    result,
    handleSubmit,
    handleReset,
  };
};
