import {ProfileSection} from '@/components/mypage/ProfileSection';
import {StatsButton} from '@/components/mypage/StatsButton';
import {SpeechCountCard} from '@/components/mypage/SpeechCountCard';
import {SpeechHistorySection} from '@/components/mypage/SpeechHistorySection';
import {DifficultySection} from '@/components/mypage/DifficultySection';
import {AccountSection} from '@/components/mypage/AccountSection';
import {
  mockUserProfile,
  mockTotalSpeechCount,
  mockSpeechHistory,
  mockDifficultyLevel,
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

      <div className='mt-9 w-full max-w-[342px]'>
        <SpeechHistorySection speeches={mockSpeechHistory} />
      </div>

      <div className='mt-9 w-full max-w-[342px]'>
        <DifficultySection currentLevel={mockDifficultyLevel} />
      </div>

      <div className='mt-9 w-full max-w-[342px]'>
        <AccountSection />
      </div>
    </main>
  );
}
