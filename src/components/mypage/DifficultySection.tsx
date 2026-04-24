import Link from 'next/link';
import WarningIcon from '@/assets/mypage/warning.svg';
import {ROUTES} from '@/constants/routes';
import type {DifficultyLevel} from '@/mocks/mypage';

interface DifficultySectionProps {
  currentLevel: DifficultyLevel;
}

export const DifficultySection = ({currentLevel}: DifficultySectionProps) => {
  return (
    <section className='flex w-full flex-col gap-4'>
      <Link
        href={ROUTES.MYPAGE_DIFFICULTY}
        className='flex items-center justify-between rounded-[48px] bg-[#E9E9E0] px-6 py-4'>
        <span className='text-text text-base font-extrabold'>
          난이도(학년) 변경
        </span>
        <div className='flex items-center gap-2'>
          <span className='text-primary text-base font-semibold'>
            {currentLevel}
          </span>
          <span className='text-primary text-xs'>›</span>
        </div>
      </Link>

      <div className='flex items-center gap-3 rounded-[48px] border border-[#BA1A1A]/10 bg-[#FFDAD6]/30 px-5 py-4'>
        <WarningIcon className='h-5 w-5 shrink-0 text-[#BA1A1A]' />
        <p className='text-xs leading-relaxed font-semibold text-[#93000A]'>
          난이도를 변경하시면 기존의 학습 데이터와 진행도가 초기화될 수
          있습니다. 신중하게 선택해 주세요.
        </p>
      </div>
    </section>
  );
};
