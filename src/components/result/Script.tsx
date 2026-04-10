'use client';

import {useState} from 'react';
import CopyTextButton from '@/assets/result/copytextbutton.svg';
import {mockScript} from '@/mocks/result';

export const Script = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopyButtonClick = () => {
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <section className='flex flex-col gap-6'>
      <div className='flex justify-between'>
        <h2 className='text-primary text-lg font-extrabold'>스크립트 분석</h2>
        <button onClick={handleCopyButtonClick}>
          <CopyTextButton alt='텍스트 복사 버튼' />
        </button>
      </div>

      <p className='bg-gray font-pretendard flex rounded-4xl p-6 whitespace-pre-line'>
        {mockScript}
      </p>

      {isCopied && (
        <div className='bg-accent/90 fixed bottom-10 left-1/2 -translate-x-1/2 rounded-4xl px-3 py-1.5 text-xs text-black shadow'>
          복사되었습니다!
        </div>
      )}
    </section>
  );
};
