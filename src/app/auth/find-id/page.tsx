'use client';

import {useFindIdForm} from '@/hooks/useFindIdForm';
import {FindIdInputForm} from '@/components/auth/find-id/FindIdInputForm';
import {FindIdSuccessCard} from '@/components/auth/find-id/FindIdSuccessCard';
import {FindIdFailureCard} from '@/components/auth/find-id/FindIdFailureCard';
import {FindAccountFooter} from '@/components/layout/FindAccountFooter';

export default function FindIdPage() {
  const {email, setEmail, emailError, step, result, handleSubmit, handleReset} =
    useFindIdForm();

  return (
    <main className='flex min-h-[calc(100vh-64px)] flex-col items-center px-6 pt-5 pb-10'>
      <div className='flex w-full max-w-[342px] flex-col'>
        {step === 'input' && (
          <FindIdInputForm
            email={email}
            emailError={emailError}
            onEmailChange={setEmail}
            onSubmit={handleSubmit}
          />
        )}
        {step === 'success' && result && <FindIdSuccessCard result={result} />}
        {step === 'failure' && <FindIdFailureCard onRetry={handleReset} />}
      </div>

      <FindAccountFooter />
    </main>
  );
}
