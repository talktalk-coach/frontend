'use client';

import {useMemo, useState} from 'react';
import {useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';
import {EMAIL_REGEX, PASSWORD_REGEX} from '@/constants/auth';

export const useLoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailError = useMemo(() => {
    if (!email) return '';

    if (!EMAIL_REGEX.test(email)) {
      return '올바른 이메일 형식이 아닙니다.';
    }

    return '';
  }, [email]);

  const passwordError = useMemo(() => {
    if (!password) return '';

    if (!PASSWORD_REGEX.test(password)) {
      return '비밀번호는 영문 + 숫자 포함 8자 이상이어야 합니다.';
    }

    return '';
  }, [password]);

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert('이메일과 비밀번호를 입력하세요.');
      return;
    }

    if (emailError || passwordError) {
      return;
    }
    // TODO: login API
    router.push(ROUTES.HOMEPAGE);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,

    emailError,
    passwordError,

    handleLoginSubmit,
  };
};
