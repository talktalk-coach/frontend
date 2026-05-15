'use client';

import {ChangeEvent, FormEvent} from 'react';
import Link from 'next/link';
import Typewriter from '@/assets/find-id/typewriter.svg';
import {ROUTES} from '@/constants/routes';

interface FindIdInputFormProps {
  email: string;
  emailError: string;
  onEmailChange: (value: string) => void;
  onSubmit: (e: FormEvent) => void;
}

/**
 * 아이디 찾기 입력 화면.
 * 이메일을 입력받아 제출하는 폼.
 */
export const FindIdInputForm = ({
  email,
  emailError,
  onEmailChange,
  onSubmit,
}: FindIdInputFormProps) => {
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    onEmailChange(e.target.value);
  };

  const isDisabled = !email || !!emailError;

  return (
    <section className='flex w-full flex-col gap-8'>
      <header className='flex flex-col gap-3'>
        <h1 className='text-text text-4xl font-extrabold tracking-[-0.9px]'>
          아이디 찾기
        </h1>
        <p className='text-primary2 text-base font-medium'>
          가입 시 등록한 이메일을 입력해 주세요.
        </p>
      </header>

      <form onSubmit={onSubmit} className='flex flex-col gap-8'>
        <div className='bg-surface flex flex-col gap-4 rounded-[32px] p-8 shadow-sm'>
          <div className='flex flex-col gap-2'>
            <label
              htmlFor='find-id-email'
              className='text-primary text-sm font-semibold'>
              이메일 주소
            </label>
            <input
              id='find-id-email'
              type='email'
              value={email}
              onChange={handleEmailChange}
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
            아이디 찾기
          </button>
        </div>

        <div className='flex items-center justify-center gap-3 text-sm'>
          <span className='text-primary2'>비밀번호를 잊으셨나요?</span>
          <span className='text-divider' aria-hidden='true'>
            •
          </span>
          <Link
            href={ROUTES.FIND_PASSWORD}
            className='text-primary font-bold underline'>
            비밀번호 찾기
          </Link>
        </div>

        <Typewriter
          className='h-auto w-full'
          preserveAspectRatio='xMidYMid meet'
          aria-hidden='true'
        />
      </form>
    </section>
  );
};
