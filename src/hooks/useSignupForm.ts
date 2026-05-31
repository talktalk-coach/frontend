'use client';

import {useMemo, useState} from 'react';
import {ROUTES} from '@/constants/routes';
import {EMAIL_REGEX, PASSWORD_REGEX} from '@/constants/auth';
import {StatusModalVariant} from '@/components/common/StatusModal';

interface ModalState {
  isOpen: boolean;
  variant: StatusModalVariant;
  message: string;
  redirectPath?: string;
}

export const useSignupForm = () => {
  //signup state
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  // agreement state
  const [isUnder14, setIsUnder14] = useState(false);
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const [isVoiceChecked, setIsVoiceChecked] = useState(false);

  //보호자 인증 state
  const [parentEmail, setParentEmail] = useState('');
  const [parentVerificationCode, setParentVerificationCode] = useState('');
  const [isParentVerified, setIsParentVerified] = useState(false);

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

  //signup 검증로직
  const emailError = useMemo(() => {
    if (!email) return '';

    if (!EMAIL_REGEX.test(email)) {
      return '올바른 이메일 형식이 아닙니다.';
    }

    return '';
  }, [email]);

  const parentEmailError = useMemo(() => {
    if (!parentEmail) return '';

    if (!EMAIL_REGEX.test(parentEmail)) {
      return '올바른 보호자 이메일 형식이 아닙니다.';
    }

    return '';
  }, [parentEmail]);

  const passwordError = useMemo(() => {
    if (!password) return '';

    if (!PASSWORD_REGEX.test(password)) {
      return '비밀번호는 영문 + 숫자 포함 8자 이상이어야 합니다.';
    }

    return '';
  }, [password]);

  const confirmPasswordError = useMemo(() => {
    if (!confirmPassword) return '';
    return password === confirmPassword ? '' : '비밀번호가 일치하지 않습니다.';
  }, [password, confirmPassword]);

  const isAgreementValid = isPrivacyChecked && isVoiceChecked;

  //signup 함수
  const handleSendVerification = async (type: 'USER' | 'PARENT') => {
    const targetEmail = type === 'USER' ? email : parentEmail;
    if (!targetEmail) return;
    openModal('info', '인증 코드를 발송했습니다.');
  };

  const handleVerifyCode = async (type: 'USER' | 'PARENT') => {
    const code = type === 'USER' ? verificationCode : parentVerificationCode;
    if (!code) return;
    if (type === 'USER') {
      setIsVerified(true);
      openModal('success', '본인 확인이 완료되었습니다.');
    } else {
      setIsParentVerified(true);
      openModal('success', '보호자 인증이 완료되었습니다.');
    }
  };

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (emailError || passwordError || confirmPasswordError) {
      openModal('error', '입력값을 다시 확인해주세요.');
      return;
    }

    if (
      !email ||
      !verificationCode ||
      !nickname ||
      !password ||
      !confirmPassword
    ) {
      openModal('error', '모든 항목을 입력해주세요.');
      return;
    }

    if (!isVerified) {
      openModal('error', '이메일 인증을 완료해주세요.');
      return;
    }

    if (!isAgreementValid) {
      openModal('error', '필수 약관에 동의해주세요.');
      return;
    }

    if (isUnder14) {
      if (!parentEmail || !parentVerificationCode) {
        openModal('error', '보호자 인증 정보를 입력해주세요.');
        return;
      }

      if (parentEmailError) {
        openModal('error', parentEmailError);
        return;
      }

      if (!isParentVerified) {
        openModal('error', '보호자 인증을 완료해주세요.');
        return;
      }
    }

    openModal('success', '회원가입이 완료되었습니다.', ROUTES.DIFFICULTY);
  };

  return {
    email,
    setEmail,
    verificationCode,
    setVerificationCode,
    nickname,
    setNickname,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    isVerified,

    parentEmail,
    setParentEmail,
    parentVerificationCode,
    setParentVerificationCode,
    isParentVerified,

    isUnder14,
    setIsUnder14,
    isPrivacyChecked,
    setIsPrivacyChecked,
    isVoiceChecked,
    setIsVoiceChecked,

    emailError,
    parentEmailError,
    passwordError,
    confirmPasswordError,

    handleSendVerification,
    handleVerifyCode,
    handleSignUpSubmit,

    modal,
    closeModal,
  };
};
