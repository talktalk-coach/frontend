import Icon from '@/assets/icons/Speech-off.svg';

type CircleIconVariant = 'large' | 'medium' | 'landing';

type CircleIconProps = {
  variant?: CircleIconVariant;
};

export const CircleIcon = ({variant = 'large'}: CircleIconProps) => {
  const styles = {
    large: 'w-1/2 border-6 shadow-2xl',
    medium: 'w-2/5 border-4 shadow-2xl',
    landing:
      'w-[170px] border-8 shadow-[0_20px_48px_-12px_rgba(26,28,23,0.04)] bg-surface',
  }[variant];

  return (
    <div className={`border-primary aspect-square rounded-full ${styles}`}>
      <Icon className='w-full' />
    </div>
  );
};
