'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import ConfirmModal from '@/components/common/ConfirmModal';
import LogoutIcon from '@/assets/mypage/logout.svg';
import {ROUTES} from '@/constants/routes';
import {useLogout} from '@/hooks/queries/useAuth';
import {useDeleteUserMutation} from '@/hooks/queries/useUser';

type ModalType = 'logout' | 'withdraw' | null;

/**
 * - 로그아웃: 클릭 시 확인 모달을 띄운다.
 * - 회원탈퇴: 클릭 시 위험 경고 모달을 띄운다.
 * - 각 액션 확인 시 해당 API를 호출하고 루트 페이지로 이동한다.
 * - TODO: 실제 API 연동은 추후 구현 예정.
 */
export const AccountSection = () => {
  const router = useRouter();
  const [modalType, setModalType] = useState<ModalType>(null);

  const {mutate: logout} = useLogout();
  const {mutate: withdraw} = useDeleteUserMutation();

  const handleLogoutClick = (): void => {
    setModalType('logout');
  };

  const handleWithdrawClick = (): void => {
    setModalType('withdraw');
  };

  const handleModalCancel = (): void => {
    setModalType(null);
  };

  const handleLogoutConfirm = (): void => {
    setModalType(null);
    logout(undefined, {
      onSettled: () => router.push(ROUTES.LANDING),
    });
  };

  const handleWithdrawConfirm = (): void => {
    setModalType(null);
    withdraw(undefined, {
      onSuccess: () => router.push(ROUTES.ROOT),
    });
  };

  return (
    <>
      <section className='flex w-full flex-col items-center gap-7'>
        {/* 로그아웃 */}
        <button
          type='button'
          onClick={handleLogoutClick}
          className='flex w-full items-center justify-between rounded-full border border-[#D4C3BA]/30 bg-[#EAEAD1] px-6 py-4'>
          <span className='text-base font-semibold text-[#613200]'>
            로그아웃
          </span>
          <LogoutIcon className='h-[10px] w-[10px] text-[#613200]' />
        </button>

        {/* 회원탈퇴 */}
        <button
          type='button'
          onClick={handleWithdrawClick}
          className='text-xs font-semibold text-[#82746D]'>
          회원탈퇴
        </button>
      </section>

      {/* 로그아웃 확인 모달 */}
      <ConfirmModal
        isOpen={modalType === 'logout'}
        title='로그아웃'
        message='로그아웃하시겠습니까?'
        confirmText='로그아웃'
        cancelText='취소'
        onConfirm={handleLogoutConfirm}
        onCancel={handleModalCancel}
      />

      {/* 회원탈퇴 확인 모달 */}
      <ConfirmModal
        isOpen={modalType === 'withdraw'}
        title='정말 탈퇴하시겠습니까?'
        message={`회원 탈퇴 시 다음 데이터가 즉시 삭제되며, 복구할 수 없습니다.\n\n• 프로필 정보\n• 학습 기록\n• 스피치 결과`}
        confirmText='탈퇴하기'
        cancelText='취소'
        variant='danger'
        onConfirm={handleWithdrawConfirm}
        onCancel={handleModalCancel}
      />
    </>
  );
};
