'use client';

import {AuthInputField} from '@/components/auth/AuthInputField';
import {useSignupForm} from '@/hooks/useSignupForm';
import {StatusModal} from '@/components/common/StatusModal';
import {AgreementCheckBoxList} from '@/components/auth/signup/AgreementCheckBoxList';
import {AuthButton} from '@/components/common/buttons/AuthButton';

export const SignupForm = () => {
  const {
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

    parentEmail,
    setParentEmail,
    parentVerificationCode,
    setParentVerificationCode,

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
  } = useSignupForm();

  return (
    <>
      <form
        className='flex w-full flex-col gap-7'
        onSubmit={handleSignUpSubmit}>
        <div className='flex flex-col gap-4'>
          <AuthInputField
            label='EMAIL'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            onButtonClick={() => handleSendVerification('USER')}
            buttonDisabled={!email || !!emailError}
          />
          <AuthInputField
            label='VERIFICATION_CODE'
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            onButtonClick={() => handleVerifyCode('USER')}
            buttonDisabled={!verificationCode}
          />
          <AuthInputField
            label='NICKNAME'
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <AuthInputField
            label='PASSWORD'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
          />
          <AuthInputField
            label='CONFIRM_PASSWORD'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={confirmPasswordError}
          />
        </div>

        <AgreementCheckBoxList
          isUnder14={isUnder14}
          setIsUnder14={setIsUnder14}
          isPrivacyChecked={isPrivacyChecked}
          setIsPrivacyChecked={setIsPrivacyChecked}
          isVoiceChecked={isVoiceChecked}
          setIsVoiceChecked={setIsVoiceChecked}
        />

        {isUnder14 && (
          <div className='flex flex-col'>
            <p className='mb-2 ml-2 text-xs font-medium text-black'>
              만 14세 미만 회원은 보호자 인증이 필요합니다.
            </p>
            <div className='flex flex-col gap-4'>
              <AuthInputField
                label='PARENT_EMAIL'
                value={parentEmail}
                error={parentEmailError}
                onChange={(e) => setParentEmail(e.target.value)}
                onButtonClick={() => handleSendVerification('PARENT')}
                buttonDisabled={!parentEmail}
              />

              <AuthInputField
                label='PARENT_VERIFICATION_CODE'
                value={parentVerificationCode}
                onChange={(e) => setParentVerificationCode(e.target.value)}
                onButtonClick={() => handleVerifyCode('PARENT')}
                buttonDisabled={!parentVerificationCode}
              />
            </div>
          </div>
        )}

        <AuthButton label='SIGNUP' />
      </form>

      <StatusModal
        isOpen={modal.isOpen}
        variant={modal.variant}
        message={modal.message}
        onClose={closeModal}
      />
    </>
  );
};
