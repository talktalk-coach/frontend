import {LandingButton} from '@/components/common/buttons/LandingButton';
import {FeatureItemList} from '@/components/landing/FeatureItemList';
import {MainSection} from '@/components/landing/MainSection';
import {TopSection} from '@/components/landing/TopSection';

export default function page() {
  return (
    <div className='flex flex-col items-center px-6 pt-9'>
      <TopSection />
      <div className='mt-8 flex w-full flex-col items-center gap-10'>
        <MainSection />
        <div className='flex w-full flex-col gap-4'>
          <LandingButton variant='primary' />
          <LandingButton variant='gray' />
        </div>
      </div>
      <div className='mt-5 mb-10 w-full'>
        <FeatureItemList />
      </div>
    </div>
  );
}
