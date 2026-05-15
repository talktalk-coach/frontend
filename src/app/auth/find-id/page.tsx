'use client';

import {useFindIdForm} from '@/hooks/useFindIdForm';
import {FindIdInputForm} from '@/components/find-id/FindIdInputForm';

export default function FindIdPage() {
  const {email, setEmail, emailError, step, handleSubmit} = useFindIdForm();

  return (
    <main className='flex min-h-[calc(100vh-64px)] flex-col items-center px-6 pt-6 pb-10'>
      <div className='flex w-full max-w-[342px] flex-col'>
        {step === 'input' && (
          <FindIdInputForm
            email={email}
            emailError={emailError}
            onEmailChange={setEmail}
            onSubmit={handleSubmit}
          />
        )}
        {/* TODO: success, failure 화면은 다음 단계에서 추가 */}
      </div>
    </main>
  );
}
