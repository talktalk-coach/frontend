import Link from 'next/link';
import {LANDING_MAP} from '@/constants/auth';

type LandingButtonVariant = 'primary' | 'gray';

type LandingButtonProps = {
  variant: LandingButtonVariant;
};

export const LandingButton = ({variant}: LandingButtonProps) => {
  const {text, icon: Icon, href, style} = LANDING_MAP[variant];
  return (
    <Link
      href={href}
      className={`flex w-full items-center justify-center gap-2 rounded-full p-5 font-bold shadow-lg ${style}`}>
      {text}
      <Icon />
    </Link>
  );
};
