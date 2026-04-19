'use client';

import {useState} from 'react';
import CopyTextButton from '@/assets/result/copytextbutton.svg';

type ScriptProps = {
  text: string;
};

export const Script = ({text}: ScriptProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopyButtonClick = async () => {
    try {
      await navigator.clipboard.writeText(text);

      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    } catch (e) {
      console.error('복사 실패', e);
    }
  };

  return (
    <section className='flex flex-col gap-6'>
      <div className='flex justify-between'>
        <h2 className='text-primary text-lg font-extrabold'>스크립트 분석</h2>
        <button onClick={handleCopyButtonClick}>
          <CopyTextButton alt='텍스트 복사 버튼' />
        </button>
      </div>

      <p className='bg-surface font-pretendard flex rounded-4xl p-6 whitespace-pre-line'>
        {text}
      </p>

      {isCopied && (
        <div className='fixed bottom-10 left-1/2 z-50 -translate-x-1/2'>
          <div className='flex items-center gap-2 rounded-full bg-black/80 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md'>
            <span className='text-sm'>✓</span>
            <span>복사되었습니다!</span>
          </div>
        </div>
      )}
    </section>
  );
};
