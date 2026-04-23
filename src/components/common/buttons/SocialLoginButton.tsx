'use client';
import {SOCIAL_MAP, SocialType} from '@/constants/auth';

type SocialLoginButtonProps = {
  label: SocialType;
};

export const SocialLoginButton = ({label}: SocialLoginButtonProps) => {
  const {text, icon: Icon, style} = SOCIAL_MAP[label];

  return (
    <button
      className={`relative flex items-center rounded-full px-5 py-4 text-center text-sm font-bold shadow-lg ${style}`}>
      <span className='absolute left-7'>
        <Icon />
      </span>
      <span className='flex-1 text-center'>{text}</span>
    </button>
  );
};
