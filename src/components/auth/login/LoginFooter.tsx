import {useRouter} from 'next/navigation';
import {ROUTES} from '@/constants/routes';

export const LoginFooter = () => {
  const router = useRouter();

  return (
    <div className='mt-9 flex flex-col items-center gap-6'>
      <div className='text-primary2/60 flex gap-2 text-xs font-bold'>
        <button>아이디 찾기</button>
        <span className='bg-divider/40 h-3 w-px self-center' aria-hidden />
        <button>비밀번호 찾기</button>
      </div>
      <div className='flex gap-4 text-xs font-bold'>
        <span className='text-primary2'>아직 회원이 아니신가요?</span>
        <button
          className='text-primary'
          onClick={() => router.push(ROUTES.SIGNUP)}>
          회원가입
        </button>
      </div>
    </div>
  );
};
