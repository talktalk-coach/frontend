'use client';

import {useState} from 'react';
import {InputField} from '@/components/login/InputField';
import {AuthButton} from '@/components/common/buttons/AuthButton';
import {SocialLoginButton} from '@/components/common/buttons/SocialLoginButton';
import {LoginHeader} from '@/components/login/LoginHeader';
import {LoginFooter} from '@/components/login/LoginFooter';
import {useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';
import {Divider} from '@/components/login/Divider';

export default function Loginpage() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert('이메일과 비밀번호를 입력하세요.');
      return;
    }
    // TODO: 로그인 API 연결
    router.push(ROUTES.HOMEPAGE);
  };

  return (
    <div className='flex min-h-screen flex-col items-center px-6 py-8'>
      <LoginHeader />

      <main className='flex w-full flex-1 flex-col justify-center gap-10'>
        <form
          className='flex w-full flex-col gap-4'
          onSubmit={handleLoginSubmit}>
          <InputField
            label='EMAIL'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label='PASSWORD'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <AuthButton label='LOGIN' />
        </form>
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
