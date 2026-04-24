export const LoginFooter = () => {
  return (
    <div className='mt-5 flex flex-col items-center gap-4'>
      <div className='text-primary2/60 flex gap-2 text-xs font-bold'>
        <button className='text-shadow'>아이디 찾기</button>
        <span>|</span>
        <button className='text-shadow'>비밀번호 찾기</button>
      </div>
      <div className='flex gap-4 text-xs font-bold'>
        <span className='text-primary2'> 아직 회원이 아니신가요?</span>
        <button className='text-primary text-shadow'>회원가입</button>
      </div>
    </div>
  );
};
