export const Divider = () => {
  return (
    <div className='flex w-full items-center'>
      <div className='bg-divider/40 h-px flex-grow'></div>
      <span className='text-muted mx-4 text-[10px] font-bold tracking-widest'>
        OR CONTINUE WITH
      </span>
      <div className='bg-divider/40 h-px flex-grow'></div>
    </div>
  );
};
