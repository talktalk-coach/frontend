import {LandingButton} from '@/components/common/buttons/LandingButton';
import {FeatureItemList} from '@/components/landing/FeatureItemList';
import {MainSection} from '@/components/landing/MainSection';
import {TopSection} from '@/components/landing/TopSection';

export default function page() {
  return (
    <div className='flex flex-col items-center px-6 pt-15'>
      <div className='flex w-full flex-col items-center gap-10'>
        <TopSection />
        <MainSection />
        <div className='flex w-full flex-col gap-4'>
          <LandingButton variant='primary' />
          <LandingButton variant='gray' />
        </div>
        <FeatureItemList />
      </div>
    </div>
  );
}
