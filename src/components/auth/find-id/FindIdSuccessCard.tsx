import Link from 'next/link';
import {NavigationButton} from '@/components/common/buttons/NavigationButton';
import ParrotIcon from '@/assets/icons/Speech-off.svg';
import CheckCircle from '@/assets/auth/find-id/check-circle.svg';
import {ROUTES} from '@/constants/routes';
import type {FindIdResult} from '@/mocks/find-account';

interface FindIdSuccessCardProps {
  result: FindIdResult;
}

/**
 * 아이디 찾기 성공 화면.
 * 마스킹된 아이디와 가입일을 카드로 표시한다.
 */
export const FindIdSuccessCard = ({result}: FindIdSuccessCardProps) => {
  return (
    <section className='flex w-full flex-col items-center gap-10'>
      <div className='bg-background flex h-40 w-40 items-center justify-center rounded-full border-4 border-[#5B6734] shadow-sm'>
        <ParrotIcon className='h-32 w-32' />
      </div>

      <header className='flex flex-col items-center gap-2'>
        <h1 className='text-primary text-3xl font-bold tracking-[-0.75px]'>
          아이디를 찾았습니다
        </h1>
        <p className='text-primary2 text-base font-medium'>
          요청하신 정보와 일치하는 계정입니다.
        </p>
      </header>

      <div className='bg-surface relative w-full overflow-hidden rounded-[32px] p-10 shadow-sm'>
        <span
          className='bg-primary-gradient absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-5'
          aria-hidden='true'
        />

        <div className='flex flex-col gap-8'>
          <div className='flex flex-col gap-1'>
            <span className='text-muted text-base font-bold tracking-[0.8px] uppercase'>
              아이디
            </span>
            <div className='flex items-center gap-2'>
              <span className='font-pretendard text-text text-base font-extrabold tracking-[-0.4px]'>
                {result.maskedId}
              </span>
              <CheckCircle className='h-4 w-4' aria-hidden='true' />
            </div>
          </div>

          <div className='flex flex-col gap-1'>
            <span className='text-muted text-base font-bold tracking-[0.8px] uppercase'>
              가입일
            </span>
            <span className='font-pretendard text-primary2 text-base font-medium'>
              {result.joinedAt}
            </span>
          </div>
        </div>
      </div>

      <div className='flex w-full flex-col gap-8'>
        <NavigationButton
          href={ROUTES.LOGIN}
          label='로그인하러 가기'
          variant='primary'
        />

        <p className='text-primary2 text-center text-sm'>
          비밀번호가 기억나지 않으시나요?{' '}
          <Link
            href={ROUTES.FIND_PASSWORD}
            className='text-primary font-bold underline'>
            비밀번호 찾기
          </Link>
        </p>
      </div>
    </section>
  );
};
