import SparkleIcon from '@/assets/stats/sparkle.svg';
import type {Highlight} from '@/mocks/stats';

interface HighlightMessageProps {
  highlight: Highlight;
}

export const HighlightMessage = ({highlight}: HighlightMessageProps) => {
  return (
    <section className='flex w-full items-start gap-4'>
      <div className='bg-primary-gradient flex h-12 w-12 shrink-0 items-center justify-center rounded-full'>
        <SparkleIcon className='h-[22px] w-[22px]' />
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='text-primary text-2xl leading-[1.25] font-extrabold tracking-[-0.6px] whitespace-pre-line'>
          {highlight.title}
        </h3>
        <p className='text-primary2 text-base font-bold tracking-[-0.32px]'>
          {highlight.description}
        </p>
      </div>
    </section>
  );
};
