'use client';

import {useEffect} from 'react';
import {Header} from '@/components/layout/Header';
import {NavBar} from '@/components/layout/NavBar';
import {ProfileSection} from '@/components/mypage/ProfileSection';
import {StatsButton} from '@/components/mypage/StatsButton';
import {SpeechCountCard} from '@/components/mypage/SpeechCountCard';
import {SpeechHistorySection} from '@/components/mypage/SpeechHistorySection';
import {DifficultySection} from '@/components/mypage/DifficultySection';
import {AccountSection} from '@/components/mypage/AccountSection';
import {Spinner} from '@/components/common/Spinner';
import {ErrorScreen} from '@/components/common/ErrorScreen';
import {useUserInfo, useSpeechList} from '@/hooks/queries/useUser';
import {useUserStore} from '@/stores/userStore';
import {GRADE_CODE_TO_LABEL} from '@/constants/difficulty';

export default function MyPage() {
  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useUserInfo();
  const {
    data: speechData,
    isLoading: isSpeechLoading,
    isError: isSpeechError,
  } = useSpeechList({sort: 'date_desc'});
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (!user) return;
    setUser({nickname: user.nickname, profileImage: user.profileImageUrl});
  }, [user, setUser]);

  const isLoading = isUserLoading || isSpeechLoading;
  const isError = isUserError || isSpeechError;

  return (
    <>
      <Header />
      <main className='bg-background flex min-h-screen flex-col items-center px-6 pt-10 pb-30'>
        {isLoading ? (
          <Spinner />
        ) : isError || !user || !speechData ? (
          <ErrorScreen />
        ) : (
          <>
            <ProfileSection
              profile={{name: user.nickname, imageUrl: user.profileImageUrl}}
            />

            <div className='mt-9 w-full max-w-[342px]'>
              <StatsButton />
            </div>

            <div className='mt-9 w-full max-w-[342px]'>
              <SpeechCountCard count={speechData.totalCount} />
            </div>

            <div className='mt-9 w-full max-w-[342px]'>
              <SpeechHistorySection speeches={speechData.speeches} />
            </div>

            <div className='mt-9 w-full max-w-[342px]'>
              <DifficultySection
                currentLevel={GRADE_CODE_TO_LABEL[user.targetLevel]}
              />
            </div>

            <div className='mt-9 w-full max-w-[342px]'>
              <AccountSection />
            </div>
          </>
        )}
      </main>
      <NavBar />
    </>
  );
}
