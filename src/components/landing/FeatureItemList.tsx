import PrecisionIcon from '@/assets/auth/precision.svg';
import RealtimeIcon from '@/assets/auth/realtime.svg';
import AiIcon from '@/assets/auth/aicoach.svg';
import {FeatureItem} from '@/components/landing/FeatureItem';

const FEATURES = [
  {icon: PrecisionIcon, label: 'PRECISION'},
  {icon: RealtimeIcon, label: 'REAL-TIME'},
  {icon: AiIcon, label: 'AI COACH'},
];

export const FeatureItemList = () => {
  return (
    <div className='mt-7 flex justify-center gap-10 [@media(max-height:740px)]:mt-0'>
      {FEATURES.map(({icon, label}) => (
        <FeatureItem key={label} icon={icon} label={label} />
      ))}
    </div>
  );
};
