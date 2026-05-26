import {BookText, Workflow, AlignLeft} from 'lucide-react';

export type ImprovementPlanProps = {
  title: string;
  description: string;
};

const TITLE_ICONS = {
  어휘: BookText,
  논리: Workflow,
  '문장 구조': AlignLeft,
};

export const ImprovementPlan = ({title, description}: ImprovementPlanProps) => {
  const Icon = TITLE_ICONS[title as keyof typeof TITLE_ICONS];

  return (
    <div className='bg-surface flex flex-col gap-2 rounded-4xl p-6'>
      <div className='flex items-center gap-2'>
        {Icon && <Icon size={17} className='text-primary mb-0.5' />}
        <h3 className='text-[15px] font-semibold text-black'>{title}</h3>
      </div>

      <p className='text-primary2 text-sm leading-relaxed font-semibold'>
        {description}
      </p>
    </div>
  );
};
