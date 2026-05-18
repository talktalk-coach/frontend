import {
  mockScore,
  mockPerformanceMetrics,
  mockImprovementPlans,
  mockOverallFeedback,
} from '@/mocks/result';
import {MetricBarList} from '@/components/result/MetricBarList';
import {Score} from '@/components/result/Score';
import {ImprovementPlanList} from '@/components/result/ImprovementPlanList';
import {ROUTES} from '@/constants/routes';
import {NavigationButton} from '@/components/common/buttons/NavigationButton';
import {OverallFeedback} from '@/components/result/OverallFeedback';

interface ResultPageProps {
  params: {
    id: string;
  };
}

export default function Resultpage({params}: ResultPageProps) {
  const {id} = params;

  return (
    <div className='flex flex-col gap-8 px-6 pt-10 pb-10'>
      <section className='gap-10 rounded-[40px] bg-[#606C38] p-6'>
        <h2 className='font-pretendard text-3xl font-bold text-[#DFEDAC]'>
          Excellent Progress!
        </h2>
        <p className='mt-2 font-bold text-[#DFEDAC]/80'>
          훌륭한 진전입니다! 이전보다 전반적인 완성도가 꾸준히 향상되고
          있습니다. 지금의 페이스를 유지하세요.
        </p>
      </section>

      <section>
        <Score score={mockScore} />
      </section>

      <section>
        <MetricBarList metrics={mockPerformanceMetrics} />
      </section>

      <section>
        <ImprovementPlanList plans={mockImprovementPlans} />
      </section>

      <section>
        <OverallFeedback text={mockOverallFeedback} />
      </section>

      <section className='flex flex-col gap-6 text-center font-semibold'>
        <NavigationButton
          href={ROUTES.RESULT_SHARE}
          variant='oatmeal'
          label='공유하기'
        />
        <NavigationButton href={ROUTES.RECORD} label='다시 연습하기' />
      </section>
    </div>
  );
}
