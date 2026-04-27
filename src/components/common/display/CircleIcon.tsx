import Icon from '@/assets/icons/Speech-off.svg';

type CircleIconVariant = 'landing' | 'auth';

type CircleIconProps = {
  variant: CircleIconVariant;
};

export const CircleIcon = ({variant}: CircleIconProps) => {
  const styles = {
    landing:
      'w-[170px] border-8 shadow-[0_20px_48px_-12px_rgba(26,28,23,0.04)] bg-surface',
    auth: 'w-[112px] border-4 shadow-[0_1px_2px_rgba(0,0,0,0.05)] bg-surface',
  }[variant];

  return (
    <div className={`border-primary aspect-square rounded-full ${styles}`}>
      <Icon className='w-full' />
    </div>
  );
};
