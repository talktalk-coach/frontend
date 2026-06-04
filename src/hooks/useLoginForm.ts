'use client';

import {useMemo, useState} from 'react';
import {useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';
import {EMAIL_REGEX, PASSWORD_REGEX} from '@/constants/auth';
import {StatusModalVariant} from '@/components/common/StatusModal';
import {useLogin} from '@/hooks/queries/useAuth';
import {setTokens} from '@/utils/auth/token';

interface ModalState {
  isOpen: boolean;
  variant: StatusModalVariant;
  message: string;
  redirectPath?: string;
}

export const useLoginForm = () => {
  const router = useRouter();
  const {mutateAsync: login} = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // modal state
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    variant: 'info',
    message: '',
  });

  const openModal = (
    variant: StatusModalVariant,
    message: string,
    redirectPath?: string
  ) => {
    setModal({
      isOpen: true,
      variant,
      message,
      redirectPath,
    });
  };

  const closeModal = () => {
    setModal((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

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
      openModal('error', '이메일과 비밀번호를 입력하세요.');
      return;
    }

    if (emailError || passwordError) return;

    try {
      const data = await login({email, password});
      setTokens(data.accessToken, data.refreshToken);

      if (data.newUser) {
        // 신규 유저
        router.push(ROUTES.DIFFICULTY);
      } else {
        // 기존 유저
        router.push(ROUTES.HOMEPAGE);
      }
    } catch {
      openModal('error', '이메일 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,

    emailError,
    passwordError,

    handleLoginSubmit,
    modal,
    closeModal,
  };
};
