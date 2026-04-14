import {
  mockScore,
  mockPerformanceMetrics,
  mockImprovementPlans,
  mockScript,
} from '@/mocks/result';
import {MetricBarList} from '@/components/result/MetricBarList';
import {Score} from '@/components/result/Score';
import {ImprovementPlanList} from '@/components/result/ImprovementPlanList';
import {Script} from '@/components/result/Script';
import Link from 'next/link';
import {ROUTES} from '@/constants/routes';

export default function Resultpage() {
  return (
    <div className='flex flex-col gap-10 p-6'>
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
        <Script text={mockScript} />
      </section>

      <section className='flex flex-col gap-6 text-center font-semibold'>
        <Link href={ROUTES.RESULT_SHARE}>
          <button className='text-brown w-full rounded-4xl bg-[#EAEAD1] p-3 shadow-xl'>
            공유하기
          </button>
        </Link>
        <Link href={ROUTES.RECORD}>
          <button className='bg-primary w-full rounded-4xl p-3 text-white shadow-xl'>
            다시 연습하기
          </button>
        </Link>
      </section>
    </div>
  );
}
