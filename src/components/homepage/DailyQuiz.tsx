import {useState} from 'react';
import CheckedIcon from '@/assets/homepage/checkedicon.svg';
import UnCheckedIcon from '@/assets/homepage/uncheckedicon.svg';
import SuccessIcon from '@/assets/homepage/partypopper.svg';
import Toast from '@/components/common/Toast';

export type DailyQuizProps = {
  question: string;
  options: string[];
  answer: string;
  currentIndex: number;
  isFinished: boolean;
  totalIndex: number;
  onNext?: () => void;
};

export const DailyQuiz = ({
  question,
  options,
  answer,
  currentIndex,
  totalIndex,
  isFinished,
  onNext,
}: DailyQuizProps) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showToast, setShowToast] = useState(false);

  const handleOptionClick = (option: string) => {
    if (isCorrect) return;

    setSelected(option);
    const correct = option === answer;
    setIsCorrect(correct);

    if (correct) {
      setTimeout(() => {
        setSelected(null);
        setIsCorrect(null);

        onNext?.();
      }, 1000);
    } else {
      setShowToast(true);
    }
  };

  return (
    <div className='flex flex-col'>
      <h3 className='text-xs font-extrabold tracking-widest text-[#77786B] opacity-50'>
        {"TODAY'S CHALLENGE"}
      </h3>
      <div className='mt-1 flex justify-between'>
        <h2 className='text-xl font-extrabold text-black'>오늘의 어휘 퀴즈</h2>
        <div className='bg-primary/20 text-primary flex items-center rounded-4xl px-3 py-1 text-center text-sm font-extrabold'>
          {currentIndex + 1} / {totalIndex}
        </div>
      </div>

      <div className='relative mt-4 flex flex-col gap-4 rounded-4xl bg-[#EEEEE5] p-6'>
        {isFinished && (
          <div className='bg-surface absolute inset-0 flex items-center justify-center rounded-4xl shadow-md'>
            <div className='flex items-center justify-center gap-1.5 text-lg font-bold text-black'>
              <span> 오늘의 퀴즈를 마쳤습니다</span>
              <SuccessIcon className='h-5 w-5' />
            </div>
          </div>
        )}

        <p className='text-lg font-bold'>{question}</p>

        <div className='flex flex-col gap-2'>
          {options.map((option, index) => {
            const label = String.fromCharCode(65 + index);

            return (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`flex items-center justify-between rounded-[48px] bg-white p-4 text-black transition ${
                  selected === option
                    ? isCorrect
                      ? 'border-2 border-green-400 font-bold'
                      : 'border-2 border-red-400 font-bold'
                    : ''
                }`}>
                <div className='flex items-center gap-2'>
                  <span>{label}.</span>
                  <span>{option}</span>
                </div>

                {selected === option ? <CheckedIcon /> : <UnCheckedIcon />}
              </button>
            );
          })}
        </div>
        <Toast
          message='오답입니다 다시 시도해보세요'
          isVisible={showToast}
          variant='error'
          position='container-bottom'
          onClose={() => setShowToast(false)}
        />
      </div>
    </div>
  );
};
