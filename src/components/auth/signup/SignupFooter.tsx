import {useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';

export const SignupFooter = () => {
  const router = useRouter();

  return (
    <div className='mt-7 flex gap-4 text-xs font-bold'>
      <span className='text-primary2'>이미 계정이 있으신가요?</span>
      <button
        className='text-primary'
        onClick={() => router.push(ROUTES.LOGIN)}>
        로그인하기
      </button>
    </div>
  );
};
