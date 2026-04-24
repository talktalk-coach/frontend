type FeatureItemProps = {
  icon: React.ElementType;
  label: string;
};

export const FeatureItem = ({icon: Icon, label}: FeatureItemProps) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <Icon className='opacity-60' />
      <span className='text-primary2/60 text-[10px] font-bold tracking-widest'>
        {label}
      </span>
    </div>
  );
};
