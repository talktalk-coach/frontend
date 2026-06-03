'use client';

import {useState, useRef, ChangeEvent} from 'react';
import Image from 'next/image';
import EditIcon from '@/assets/mypage/edit-profile.svg';
import type {UserProfile} from '@/types/mypage';
import {useUserStore} from '@/stores/userStore';

interface ProfileSectionProps {
  profile: UserProfile;
}

const NAME_MAX_LENGTH = 20;

/**
 * 마이페이지 상단의 프로필 섹션.
 * - 편집 버튼 클릭 시 바텀시트 메뉴가 열려 "사진 변경" 또는 "닉네임 변경"을 선택한다.
 * - 사진 변경: 파일 선택 창을 열어 이미지를 업로드한다.
 * - 닉네임 변경: 인라인 편집 모드로 전환되어 이름을 수정할 수 있다.
 * - TODO: 실제 저장 로직(API 연동)은 추후 구현 예정.
 */
export const ProfileSection = ({profile}: ProfileSectionProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isEditingName, setIsEditingName] = useState<boolean>(false);
  const [name, setName] = useState<string>(profile.name);
  const [imageUrl, setImageUrl] = useState<string>(profile.imageUrl);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const setUser = useUserStore((state) => state.setUser);

  const handleEditMenuOpenClick = (): void => {
    setIsMenuOpen(true);
  };

  const handleEditMenuCloseClick = (): void => {
    setIsMenuOpen(false);
  };

  const handleImageMenuClick = (): void => {
    setIsMenuOpen(false);
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (!file) return;

    /* TODO: 프로필 이미지 업로드 API 연동 필요 (POST /api/users/me/image) */
    console.log('이미지 업로드:', file);

    const previewUrl = URL.createObjectURL(file);
    setImageUrl(previewUrl);
  };

  const handleNameMenuClick = (): void => {
    setIsMenuOpen(false);
    setIsEditingName(true);
  };

  const handleNameEditCancelClick = (): void => {
    setName(profile.name);
    setIsEditingName(false);
  };

  const handleNameEditSaveClick = (): void => {
    /* TODO: 닉네임 수정 API 연동 필요 (PATCH /api/users/me/nickname) */
    console.log('닉네임 저장:', {name});
    setUser({nickname: name});
    setIsEditingName(false);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  /* Enter 키로 저장, Escape 키로 취소 */
  const handleNameKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (e.key === 'Enter') handleNameEditSaveClick();
    if (e.key === 'Escape') handleNameEditCancelClick();
  };

  return (
    <>
      <section className='flex flex-col items-center'>
        <div className='relative h-40 w-40'>
          <div className='h-full w-full overflow-hidden rounded-full bg-[#EEEEE5] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]'>
            <Image
              src={imageUrl}
              alt={`${name} 프로필 이미지`}
              width={160}
              height={160}
              className='h-full w-full object-cover'
            />
          </div>

          <button
            type='button'
            onClick={handleEditMenuOpenClick}
            aria-label='프로필 편집'
            className='bg-primary absolute right-2 bottom-2 flex h-[30px] w-[30px] items-center justify-center rounded-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]'>
            <EditIcon className='h-[10px] w-[10px]' />
          </button>

          <input
            ref={fileInputRef}
            type='file'
            accept='image/*'
            onChange={handleFileChange}
            aria-hidden='true'
            className='hidden'
          />
        </div>

        <div className='mt-6 flex w-full flex-col items-center'>
          {isEditingName ? (
            <>
              <input
                type='text'
                value={name}
                onChange={handleNameChange}
                onKeyDown={handleNameKeyDown}
                maxLength={NAME_MAX_LENGTH}
                aria-label='닉네임 입력'
                autoFocus
                className='text-text focus:border-primary w-full max-w-[220px] border-b border-[#C7C8B9] text-center text-3xl font-extrabold tracking-tight outline-none'
              />

              <div className='mt-4 flex w-full max-w-[220px] gap-2'>
                <button
                  type='button'
                  onClick={handleNameEditCancelClick}
                  className='bg-surface text-text flex-1 rounded-full py-2 text-sm font-semibold'>
                  취소
                </button>
                <button
                  type='button'
                  onClick={handleNameEditSaveClick}
                  className='bg-primary flex-1 rounded-full py-2 text-sm font-semibold text-white'>
                  수정 완료
                </button>
              </div>
            </>
          ) : (
            <h1 className='text-text text-3xl font-extrabold tracking-tight'>
              {name}
            </h1>
          )}
        </div>
      </section>

      {isMenuOpen && (
        <div
          role='dialog'
          aria-modal='true'
          aria-label='프로필 편집 메뉴'
          className='animate-fadeIn fixed inset-0 z-50'>
          <div
            className='absolute inset-0 bg-black/25 backdrop-blur-sm'
            onClick={handleEditMenuCloseClick}
          />

          <div className='animate-slideUp absolute right-0 bottom-0 left-0 p-3'>
            <div className='bg-background mb-3 overflow-hidden rounded-3xl shadow-xl'>
              <button
                type='button'
                onClick={handleImageMenuClick}
                className='text-primary hover:bg-surface w-full border-b border-[#E9E9E0] py-4 text-base font-semibold transition'>
                프로필 사진 변경
              </button>
              <button
                type='button'
                onClick={handleNameMenuClick}
                className='text-primary hover:bg-surface w-full py-4 text-base font-semibold transition'>
                닉네임 변경
              </button>
            </div>

            <button
              type='button'
              onClick={handleEditMenuCloseClick}
              className='bg-background text-text hover:bg-surface w-full rounded-3xl py-4 text-base font-bold shadow-xl transition'>
              취소
            </button>
          </div>
        </div>
      )}
    </>
  );
};
