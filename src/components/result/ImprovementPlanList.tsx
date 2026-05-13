import {ImprovementPlan} from '@/components/result/ImprovementPlan';

type ImprovementPlanProps = {
  id: number;
  title: string;
  description: string;
};

type ImprovementPlanListProps = {
  plans: ImprovementPlanProps[];
};

export const ImprovementPlanList = ({plans}: ImprovementPlanListProps) => {
  return (
    <section className='flex flex-col gap-6'>
      <h2 className='text-primary text-lg font-extrabold'>세부 피드백</h2>
      <div className='flex flex-col gap-6'>
        {plans.map((plan) => (
          <ImprovementPlan
            key={plan.id}
            title={plan.title}
            description={plan.description}
          />
        ))}
      </div>
    </section>
  );
};
