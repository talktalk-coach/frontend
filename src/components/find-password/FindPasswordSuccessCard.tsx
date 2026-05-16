import Link from 'next/link';
import MailSentIcon from '@/assets/find-password/mail-sent.svg';
import MailInfoIcon from '@/assets/find-password/mail-info.svg';
import {ROUTES} from '@/constants/routes';
import type {FindPasswordSent} from '@/mocks/find-account';

interface FindPasswordSuccessCardProps {
  result: FindPasswordSent;
}

export const FindPasswordSuccessCard = ({
  result,
}: FindPasswordSuccessCardProps) => {
  return (
    <section className='flex w-full flex-col items-center gap-10'>
      <div className='relative flex h-52 w-52 items-center justify-center'>
        <span
          className='border-divider absolute inset-0 rounded-full border-2 border-dashed opacity-30'
          aria-hidden='true'
        />
        <div className='bg-background flex h-40 w-40 items-center justify-center rounded-full shadow-md'>
          <MailInfoIcon width={80} height={80} />
        </div>
      </div>

      <header className='flex flex-col items-center gap-2'>
        <h1 className='text-primary text-xl font-bold tracking-[-0.4px]'>
          이메일을 확인해 주세요
        </h1>
        <p className='text-primary2 text-center text-base font-medium'>
          비밀번호 재설정 링크를
          <br />
          {result.email} 으로 보냈어요
        </p>
      </header>

      <div className='bg-surface flex w-full items-start gap-4 rounded-[32px] p-6'>
        <div className='bg-accent flex h-8 w-8 shrink-0 items-center justify-center rounded-full'>
          <MailSentIcon width={17} height={13} />
        </div>
        <p className='text-primary2 text-base leading-relaxed font-medium'>
          메일이 도착하지 않았나요?
          <br />
          스팸함을 확인해 보세요
        </p>
      </div>

      <div className='flex w-full flex-col gap-8'>
        <Link
          href={ROUTES.LOGIN}
          className='bg-primary hover:bg-primary-gradient flex w-full items-center justify-center rounded-full py-4 text-base font-bold text-white shadow-md transition-all'>
          로그인 페이지로
        </Link>
      </div>
    </section>
  );
};
