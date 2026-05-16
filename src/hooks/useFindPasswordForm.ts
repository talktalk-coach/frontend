import {useState, useMemo, FormEvent} from 'react';
import {mockFindPasswordSent} from '@/mocks/find-account';
import type {FindPasswordSent} from '@/mocks/find-account';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type FindPasswordStep = 'input' | 'success' | 'failure';

export const useFindPasswordForm = () => {
  const [id, setId] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [step, setStep] = useState<FindPasswordStep>('input');
  const [result, setResult] = useState<FindPasswordSent | null>(null);

  const emailError = useMemo(() => {
    if (!email) return '';
    if (!EMAIL_REGEX.test(email)) return '올바른 이메일 형식이 아닙니다.';
    return '';
  }, [email]);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (!id || !email || emailError) return;

    /* TODO: 비밀번호 찾기(재설정 메일 발송) API 연동
     * 테스트용 분기 처리 (이메일이 fail@test.com 이면 실패 화면 표시)
     */
    if (email === 'fail@test.com') {
      setStep('failure');
      return;
    }

    setResult({...mockFindPasswordSent, email: email});
    setStep('success');
  };

  const handleReset = (): void => {
    setId('');
    setEmail('');
    setResult(null);
    setStep('input');
  };

  return {
    id,
    setId,
    email,
    setEmail,
    emailError,
    step,
    result,
    handleSubmit,
    handleReset,
  };
};
