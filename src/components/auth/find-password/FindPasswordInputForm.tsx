'use client';

import {ChangeEvent, FormEvent} from 'react';
import Link from 'next/link';
import Typewriter from '@/assets/auth/find-id/typewriter.svg';
import {ROUTES} from '@/constants/routes';

interface FindPasswordInputFormProps {
  id: string;
  email: string;
  emailError: string;
  onIdChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onSubmit: (e: FormEvent) => void;
}

export const FindPasswordInputForm = ({
  id,
  email,
  emailError,
  onIdChange,
  onEmailChange,
  onSubmit,
}: FindPasswordInputFormProps) => {
  const isDisabled = !id || !email || !!emailError;

  return (
    <section className='flex w-full flex-col gap-8'>
      <header className='flex flex-col gap-3'>
        <h1 className='text-primary text-3xl font-extrabold tracking-[-0.9px]'>
          비밀번호를
          <br />
          잊으셨나요?
        </h1>
        <p className='text-primary2 text-base font-medium'>
          아이디와 가입 시 등록한 이메일을 입력해 주세요.
        </p>
      </header>

      <form onSubmit={onSubmit} className='flex flex-col gap-8'>
        <div className='bg-surface flex flex-col gap-5 rounded-[32px] p-8 shadow-sm'>
          <div className='flex flex-col gap-2'>
            <label
              htmlFor='find-pw-id'
              className='text-primary text-sm font-semibold tracking-[0.8px] uppercase'>
              아이디
            </label>
            <input
              id='find-pw-id'
              type='text'
              value={id}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onIdChange(e.target.value)
              }
              placeholder='snow7942'
              className='bg-input text-text placeholder:text-muted/50 rounded-[20px] px-5 py-4 text-base outline-none'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label
              htmlFor='find-pw-email'
              className='text-primary text-sm font-semibold tracking-[0.8px] uppercase'>
              이메일 주소
            </label>
            <input
              id='find-pw-email'
              type='email'
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onEmailChange(e.target.value)
              }
              placeholder='example@email.com'
              className='bg-input text-text placeholder:text-muted/50 rounded-[20px] px-5 py-4 text-base outline-none'
            />
            {emailError && (
              <span className='text-bad-text text-xs font-medium'>
                {emailError}
              </span>
            )}
          </div>

          <button
            type='submit'
            disabled={isDisabled}
            className='bg-primary hover:bg-primary-gradient disabled:bg-primary/40 disabled:hover:bg-primary/40 mt-2 flex w-full items-center justify-center rounded-full py-4 text-base font-bold text-white shadow-md transition-all disabled:cursor-not-allowed'>
            재설정 메일 받기
          </button>
        </div>

        <div className='flex items-center justify-center gap-3 text-sm'>
          <span className='text-primary2'>아이디를 잊으셨나요?</span>
          <span className='text-divider' aria-hidden='true'>
            •
          </span>
          <Link
            href={ROUTES.FIND_ID}
            className='text-primary font-bold underline'>
            아이디 찾기
          </Link>
        </div>

        <Typewriter
          className='h-auto w-full opacity-80'
          preserveAspectRatio='xMidYMid meet'
          aria-hidden='true'
        />
      </form>
    </section>
  );
};
