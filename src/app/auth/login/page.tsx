'use client';

import {SocialLoginButton} from '@/components/common/buttons/SocialLoginButton';
import {AuthHeader} from '@/components/auth/AuthHeader';
import {LoginFooter} from '@/components/auth/login/LoginFooter';
import {Divider} from '@/components/auth/login/Divider';
import {LoginForm} from '@/components/auth/login/LoginForm';

export default function Loginpage() {
  return (
    <div className='flex min-h-screen flex-col items-center px-6 pt-9 pb-10'>
      <AuthHeader mode='login' />

      <main className='flex w-full flex-1 flex-col justify-center gap-8'>
        <LoginForm />
        <Divider />
        <div className='flex w-full flex-col gap-4'>
          <SocialLoginButton label='KAKAO' />
          <SocialLoginButton label='GOOGLE' />
        </div>
      </main>

      <LoginFooter />
    </div>
  );
}
