import KaKaoIcon from '@/assets/auth/kakao.svg';
import GoogleIcon from '@/assets/auth/google.svg';
import NewIcon from '@/assets/auth/new.svg';
import ExistingIcon from '@/assets/auth/entry.svg';
import EmailIcon from '@/assets/auth/email.svg';
import PassWordIcon from '@/assets/auth/password.svg';
import SecurityIcon from '@/assets/auth/security.svg';
import NicknameIcon from '@/assets/auth/nickname.svg';
import ComfirmPasswordIcon from '@/assets/auth/confirmpassword.svg';
import {ROUTES} from '@/constants/routes';

export type InputType =
  | 'EMAIL'
  | 'VERIFICATION_CODE'
  | 'NICKNAME'
  | 'PASSWORD'
  | 'CONFIRM_PASSWORD'
  | 'PARENT_EMAIL'
  | 'PARENT_VERIFICATION_CODE';

type FieldConfig = {
  displayLabel: string;
  type: string;
  placeholder: string;
  icon: React.ElementType;
  buttonLabel?: string;
};

export const INPUT_FIELD_MAP: Record<InputType, FieldConfig> = {
  EMAIL: {
    displayLabel: 'EMAIL',
    type: 'email',
    placeholder: '이메일 주소를 입력해주세요',
    icon: EmailIcon,
    buttonLabel: '인증하기',
  },
  VERIFICATION_CODE: {
    displayLabel: 'VERIFICATION CODE',
    type: 'text',
    placeholder: '인증 코드를 입력해주세요',
    icon: SecurityIcon,
    buttonLabel: '코드 확인',
  },
  NICKNAME: {
    displayLabel: 'NICKNAME',
    type: 'text',
    placeholder: '닉네임을 입력해주세요',
    icon: NicknameIcon,
  },
  PASSWORD: {
    displayLabel: 'PASSWORD',
    type: 'password',
    placeholder: '비밀번호를 입력해주세요',
    icon: PassWordIcon,
  },
  CONFIRM_PASSWORD: {
    displayLabel: 'CONFIRM PASSWORD',
    type: 'password',
    placeholder: '비밀번호를 한 번 더 입력해주세요',
    icon: ComfirmPasswordIcon,
  },
  PARENT_EMAIL: {
    displayLabel: 'EMAIL',
    type: 'email',
    placeholder: '보호자 이메일 주소를 입력해주세요',
    icon: EmailIcon,
    buttonLabel: '인증하기',
  },
  PARENT_VERIFICATION_CODE: {
    displayLabel: 'VERIFICATION CODE',
    type: 'text',
    placeholder: '보호자 인증 코드를 입력해주세요',
    icon: SecurityIcon,
    buttonLabel: '코드 확인',
  },
};

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

export const BUTTON_TYPE = {
  LOGIN: 'LOGIN',
  SIGNUP: 'SIGNUP',
} as const;

export type ButtonType = (typeof BUTTON_TYPE)[keyof typeof BUTTON_TYPE];

export const SOCIAL_TYPE = {
  KAKAO: 'KAKAO',
  GOOGLE: 'GOOGLE',
} as const;

export const SOCIAL_MAP = {
  KAKAO: {
    text: '카카오로 시작하기',
    icon: KaKaoIcon,
    style: 'bg-[#FEE500]',
  },
  GOOGLE: {
    text: '구글로 시작하기',
    icon: GoogleIcon,
    style: 'border border-gray-300 bg-white',
  },
} as const;

export type SocialType = (typeof SOCIAL_TYPE)[keyof typeof SOCIAL_TYPE];

export const LANDING_MAP = {
  primary: {
    text: '신규 회원',
    icon: NewIcon,
    href: ROUTES.SIGNUP,
    style: 'bg-primary text-white',
  },
  gray: {
    text: '기존 회원',
    icon: ExistingIcon,
    href: ROUTES.LOGIN,
    style: 'bg-[#E9E9E0] text-[#B0B1A6]',
  },
} as const;
