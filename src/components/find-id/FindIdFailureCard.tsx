'use client';

import Link from 'next/link';
import SearchNotFound from '@/assets/find-id/search-not-found.svg';
import {ROUTES} from '@/constants/routes';

interface FindIdFailureCardProps {
  onRetry: () => void;
}

/**
 * 아이디 찾기 실패 화면.
 * 일치하는 아이디가 없을 때 표시되며, 회원가입 또는 다시 시도 옵션을 제공한다.
 */
export const FindIdFailureCard = ({onRetry}: FindIdFailureCardProps) => {
  return (
    <section className='flex w-full flex-col items-center gap-8'>
      <div className='relative flex h-52 w-52 items-center justify-center'>
        <span
          className='border-divider absolute inset-0 rounded-full border-2 border-dashed opacity-30'
          aria-hidden='true'
        />
        <div className='bg-background flex h-40 w-40 items-center justify-center rounded-full shadow-md'>
          <SearchNotFound className='h-20 w-20' />
        </div>
      </div>

      <header className='flex flex-col items-center gap-3'>
        <h1 className='text-text text-3xl font-bold tracking-[-0.75px]'>
          일치하는 아이디가 없습니다
        </h1>
        <p className='text-primary2 text-center text-base font-medium'>
          입력하신 이메일로 가입된 계정을
          <br />
          찾을 수 없어요
        </p>
      </header>

      <div className='flex w-full flex-col gap-4'>
        <Link
          href={ROUTES.SIGNUP}
          className='bg-primary hover:bg-primary-gradient flex w-full items-center justify-center rounded-full py-4 text-base font-bold text-white shadow-md transition-all'>
          회원가입하기
        </Link>

        <button
          type='button'
          onClick={onRetry}
          className='bg-accent text-brown flex w-full items-center justify-center rounded-full py-4 text-base font-bold shadow-md transition-all hover:opacity-90'>
          다시 시도하기
        </button>
      </div>
    </section>
  );
};
