'use client';

import {MetricBarList} from '@/components/result/MetricBarList';
import {Score} from '@/components/result/Score';
import {ImprovementPlanList} from '@/components/result/ImprovementPlanList';
import {ROUTES} from '@/constants/routes';
import {NavigationButton} from '@/components/common/buttons/NavigationButton';
import {OverallFeedback} from '@/components/result/OverallFeedback';
import {useParams} from 'next/navigation';
import {useSpeechResult} from '@/hooks/queries/useSpeech';
import {round1} from '@/utils/number';
import {ErrorScreen} from '@/components/common/ErrorScreen.';
import {Spinner} from '@/components/common/Spinner';

export default function Resultpage() {
  const params = useParams();
  const speechId = Number(params.speechId);

  const {data, isLoading, isError} = useSpeechResult(speechId);

  if (isLoading) return <Spinner />;

  if (isError || !data) return <ErrorScreen />;

  const performanceMetrics = [
    {label: '정확도', value: round1(data.accuracyScore)},
    {label: '유창성', value: round1(data.fluencyScore)},
    {label: '운율', value: round1(data.prosodyScore)},
    {label: '어휘력', value: round1(data.vocabularyScore)},
    {label: '논리성', value: round1(data.logicScore)},
    {label: '구조', value: round1(data.structureScore)},
  ];

  const improvementPlans = [
    {id: 1, title: '어휘', description: data.vocabularyFeedback},
    {id: 2, title: '논리', description: data.logicFeedback},
    {id: 3, title: '문장 구조', description: data.sentenceStructureFeedback},
  ];

  return (
    <div className='flex flex-col gap-8 px-6 pt-10 pb-10'>
      <section className='gap-10 rounded-[40px] bg-[#606C38] p-6'>
        <h2 className='font-pretendard text-3xl font-bold text-[#DFEDAC]'>
          Excellent Progress!
        </h2>
        <p className='mt-2 font-bold text-[#DFEDAC]/80'>
          {/* api 수정 뒤 변경 예정*/}
          훌륭한 진전입니다! 이전보다 전반적인 완성도가 꾸준히 향상되고
          있습니다. 지금의 페이스를 유지하세요.
        </p>
      </section>

      <section>
        <Score score={Math.round(data.averageScore)} />
      </section>

      <section>
        <MetricBarList metrics={performanceMetrics} />
      </section>

      <section>
        <ImprovementPlanList plans={improvementPlans} />
      </section>

      <section>
        <OverallFeedback text={data.overallFeedback} />
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
