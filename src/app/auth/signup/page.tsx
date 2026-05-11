'use client';

import {AuthHeader} from '@/components/auth/AuthHeader';
import {SignupFooter} from '@/components/auth/signup/SignupFooter';
import {SignupForm} from '@/components/auth/signup/SignupForm';

export default function Signuppage() {
  return (
    <div className='flex min-h-screen flex-col items-center px-6 pt-9 pb-10'>
      <AuthHeader mode='signup' />

      <main className='flex w-full flex-col'>
        <SignupForm />
      </main>

      <SignupFooter />
    </div>
  );
}
