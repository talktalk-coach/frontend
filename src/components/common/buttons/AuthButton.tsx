import {BUTTON_TYPE, ButtonType} from '@/constants/auth';

type AuthButtonProps = {
  label: ButtonType;
  disabled?: boolean;
};

export const AuthButton = ({label, disabled = false}: AuthButtonProps) => {
  return (
    <button
      type='submit'
      disabled={disabled}
      className={`bg-primary flex w-full items-center justify-center rounded-full p-3 font-bold text-white shadow-xl disabled:cursor-not-allowed`}>
      {label === BUTTON_TYPE.LOGIN ? '로그인' : '회원가입'}
    </button>
  );
};
