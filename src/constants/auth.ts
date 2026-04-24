import KaKaoIcon from '@/assets/auth/kakao.svg';
import GoogleIcon from '@/assets/auth/google.svg';
import NewIcon from '@/assets/auth/new.svg';
import ExistingIcon from '@/assets/auth/entry.svg';
import EmailIcon from '@/assets/auth/email.svg';
import PassWordIcon from '@/assets/auth/password.svg';
import {ROUTES} from '@/constants/routes';

export const INPUT_TYPE = {
  EMAIL: 'EMAIL',
  PASSWORD: 'PASSWORD',
} as const;

export type InputType = (typeof INPUT_TYPE)[keyof typeof INPUT_TYPE];

export const INPUT_FIELD_MAP = {
  EMAIL: {
    type: 'email',
    placeholder: '이메일 주소를 입력해주세요',
    icon: EmailIcon,
  },
  PASSWORD: {
    type: 'password',
    placeholder: '비밀번호를 입력해주세요',
    icon: PassWordIcon,
  },
} as const;

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
