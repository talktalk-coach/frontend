'use client';

import {ROUTES} from '@/constants/routes';
import {useParams} from 'next/navigation';
import {MetricBarList} from '@/components/result/MetricBarList';
import {Score} from '@/components/result/Score';
import {ImprovementPlanList} from '@/components/result/ImprovementPlanList';
import {NavigationButton} from '@/components/common/buttons/NavigationButton';
import {OverallFeedback} from '@/components/result/OverallFeedback';
import {ErrorScreen} from '@/components/common/ErrorScreen.';
import {Spinner} from '@/components/common/Spinner';
import {mapScoreLabel, mapGradeLabel} from '@/utils/labelMapping';
import {mapImprovementPlanLabel} from '@/utils/labelMapping';
import {useSpeechResult} from '@/hooks/queries/useSpeech';

export default function Resultpage() {
  const params = useParams();
  const speechId = Number(params.speechId);

  const {data, isLoading, isError} = useSpeechResult(speechId);

  if (isLoading) return <Spinner />;

  if (isError || !data) return <ErrorScreen />;

  return (
    <div className='flex flex-col gap-8 px-6 pt-10 pb-10'>
      <section className='gap-10 rounded-[40px] bg-[#606C38] p-6'>
        <h2 className='font-pretendard text-3xl font-bold text-[#DFEDAC]'>
          {mapGradeLabel(data.averageScore)} Progress!
        </h2>
        <p className='mt-2 font-bold text-[#DFEDAC]/80'>{data.progress}</p>
      </section>

      <section>
        <Score score={Math.round(data.averageScore)} />
      </section>

      <section>
        <MetricBarList metrics={mapScoreLabel(data)} />
      </section>

      <section>
        <ImprovementPlanList plans={mapImprovementPlanLabel(data)} />
      </section>

      <section>
        <OverallFeedback text={data.overallFeedback} />
      </section>

      <section className='flex flex-col gap-6 text-center font-semibold'>
        <NavigationButton
          href={ROUTES.RESULT_SHARE(speechId)}
          variant='oatmeal'
          label='공유하기'
        />
        <NavigationButton href={ROUTES.RECORD} label='다시 연습하기' />
      </section>
    </div>
  );
}
