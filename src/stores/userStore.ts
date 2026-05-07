import {create} from 'zustand';
import {persist} from 'zustand/middleware';

type UserState = {
  profileImage: string | null;
  nickname: string | null;
  setProfileImage: (image: string) => void;
  setNickname: (nickname: string) => void;
  setUser: (
    user: Partial<Pick<UserState, 'profileImage' | 'nickname'>>
  ) => void;
  resetUser: () => void;
};

const initialState: Pick<UserState, 'profileImage' | 'nickname'> = {
  profileImage: null,
  nickname: null,
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      ...initialState,
      setProfileImage: (image) => set({profileImage: image}),
      setNickname: (nickname) => set({nickname}),
      setUser: (user) => set(user),
      resetUser: () => set(initialState),
    }),
    {
      name: 'user-storage',
    }
  )
);
