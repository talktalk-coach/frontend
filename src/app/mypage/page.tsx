import {GradeBadge} from '@/components/mypage/GradeBadge';
import {SpeechHistoryCard} from '@/components/mypage/SpeechHistoryCard';
import {ProfileSection} from '@/components/mypage/ProfileSection';
import {StatsButton} from '@/components/mypage/StatsButton';
import {SpeechCountCard} from '@/components/mypage/SpeechCountCard';
import {
  mockUserProfile,
  mockTotalSpeechCount,
  mockSpeechHistory,
} from '@/mocks/mypage';

export default function MyPage() {
  return (
    <main className='bg-background flex min-h-screen flex-col items-center px-6 pt-10 pb-32'>
      <ProfileSection profile={mockUserProfile} />

      <div className='mt-9 w-full max-w-[342px]'>
        <StatsButton />
      </div>

      <div className='mt-9 w-full max-w-[342px]'>
        <SpeechCountCard count={mockTotalSpeechCount} />
      </div>

      {/* 임시 테스트용 - 스피치 카드 3개 */}
      <div className='mt-6 flex w-full max-w-[342px] flex-col gap-3'>
        {mockSpeechHistory.map((speech) => (
          <SpeechHistoryCard key={speech.id} speech={speech} />
        ))}
      </div>
    </main>
  );
}
