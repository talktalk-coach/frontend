import type {DifficultyLevel} from '@/constants/difficulty';

export interface UserProfile {
  name: string;
  imageUrl: string;
}

export type SpeechGrade = 'Bad' | 'Normal' | 'Good' | 'Excellent' | 'Mastery';

export interface SpeechHistoryItem {
  id: number;
  title: string;
  date: string;
  score: number;
  grade: SpeechGrade;
}

export const mockUserProfile: UserProfile = {
  name: 'Julian Brooks',
  imageUrl: '/icons/profile-default.svg',
};

export const mockTotalSpeechCount = 128;

export const mockSpeechHistory: SpeechHistoryItem[] = [
  {
    id: 1,
    title: 'TED Talk Simulation',
    date: '2024.05.12',
    score: 94,
    grade: 'Excellent',
  },
  {
    id: 2,
    title: 'Product Launch Pitch',
    date: '2024.05.08',
    score: 82,
    grade: 'Good',
  },
  {
    id: 3,
    title: 'Informative Lecture',
    date: '2024.04.30',
    score: 99,
    grade: 'Mastery',
  },
];

export const mockDifficultyLevel: DifficultyLevel = '중학교 3학년';
