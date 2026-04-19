export type ImprovementPlanProps = {
  title: string;
  description: string;
};

export const ImprovementPlan = ({title, description}: ImprovementPlanProps) => {
  return (
    <div className='bg-surface flex flex-col gap-2 rounded-4xl p-6'>
      <h3 className='text-[15px] font-semibold text-black'>{title}</h3>
      <p className='text-primary2 text-sm font-semibold'>{description}</p>
    </div>
  );
};
