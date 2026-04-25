'use client';

import {useState} from 'react';
import Toast from '@/components/common/Toast';
import CopyTextButton from '@/assets/result/copytextbutton.svg';

type ScriptProps = {
  text: string;
};

export const Script = ({text}: ScriptProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopyButtonClick = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
  };

  return (
    <section className='relative flex flex-col gap-6'>
      <div className='flex justify-between'>
        <h2 className='text-primary text-lg font-extrabold'>스크립트 분석</h2>
        <button onClick={handleCopyButtonClick}>
          <CopyTextButton alt='텍스트 복사 버튼' />
        </button>
      </div>

      <p className='bg-surface font-pretendard flex rounded-4xl p-6 whitespace-pre-line'>
        {text}
      </p>

      <Toast
        message='복사되었습니다!'
        isVisible={isCopied}
        variant='success'
        position='container-bottom'
        onClose={() => setIsCopied(false)}
      />
    </section>
  );
};
