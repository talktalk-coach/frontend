import Icon from '@/assets/icons/Speech-off.svg';

type CircleIconVariant = 'large' | 'medium';

type CircleIconProps = {
  variant?: CircleIconVariant;
};

export const CircleIcon = ({variant = 'large'}: CircleIconProps) => {
  const styles = variant === 'large' ? 'w-1/2 border-6' : 'w-2/5 border-4';

  return (
    <div
      className={`border-primary aspect-square rounded-full shadow-2xl ${styles}`}>
      <Icon className='w-full' />
    </div>
  );
};
