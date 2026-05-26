'use client';

import {AuthInputField} from '@/components/auth/AuthInputField';
import {AuthButton} from '@/components/common/buttons/AuthButton';
import {useLoginForm} from '@/hooks/useLoginForm';
import {StatusModal} from '@/components/common/StatusModal';

export const LoginForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    handleLoginSubmit,
    modal,
    closeModal,
  } = useLoginForm();

  return (
    <>
      <form className='flex w-full flex-col gap-4' onSubmit={handleLoginSubmit}>
        <AuthInputField
          label='EMAIL'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
        />

        <AuthInputField
          label='PASSWORD'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
        />

        <div className='mt-3'>
          <AuthButton label='LOGIN' />
        </div>
      </form>

      <StatusModal
        isOpen={modal.isOpen}
        variant={modal.variant}
        message={modal.message}
        onClose={closeModal}
        redirectPath={modal.redirectPath}
      />
    </>
  );
};
