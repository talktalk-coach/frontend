import {DifficultySelectionList} from '@/components/difficulty/DifficultySelectionList';

export default function DifficultyPage() {
  return (
    <main className='bg-background flex min-h-screen flex-col items-center px-6 pt-8 pb-12'>
      <div className='flex w-full max-w-[342px] flex-col gap-8'>
        <header className='flex flex-col items-center gap-3 text-center'>
          <span className='text-primary text-sm font-bold tracking-[1.4px] uppercase opacity-70'>
            Talk Talk Coach
          </span>
          <h1 className='text-text text-4xl leading-[1.25] font-semibold'>
            학습 수준을
            <br />
            선택해 주세요
          </h1>
          <p className='text-base leading-relaxed font-semibold text-[#46483C]'>
            나에게 맞는 학습 수준을 선택해 주세요.
            <br />
            맞춤형 스피치 커리큘럼을 제공합니다.
          </p>
        </header>

        <DifficultySelectionList />
      </div>
    </main>
  );
}
