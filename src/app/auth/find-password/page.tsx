'use client';

import {useFindPasswordForm} from '@/hooks/useFindPasswordForm';
import {FindPasswordInputForm} from '@/components/auth/find-password/FindPasswordInputForm';
import {FindPasswordSuccessCard} from '@/components/auth/find-password/FindPasswordSuccessCard';
import {FindIdFailureCard} from '@/components/auth/find-id/FindIdFailureCard';
import {FindAccountFooter} from '@/components/layout/FindAccountFooter';

export default function FindPasswordPage() {
  const {
    id,
    setId,
    email,
    setEmail,
    emailError,
    step,
    result,
    handleSubmit,
    handleReset,
  } = useFindPasswordForm();

  return (
    <main className='flex min-h-[calc(100vh-64px)] flex-col items-center px-6 pt-5 pb-10'>
      <div className='flex w-full max-w-[342px] flex-col'>
        {step === 'input' && (
          <FindPasswordInputForm
            id={id}
            email={email}
            emailError={emailError}
            onIdChange={setId}
            onEmailChange={setEmail}
            onSubmit={handleSubmit}
          />
        )}

        {step === 'success' && result && (
          <FindPasswordSuccessCard result={result} />
        )}

        {step === 'failure' && <FindIdFailureCard onRetry={handleReset} />}
      </div>

      <FindAccountFooter />
    </main>
  );
}
