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
    date: '2026.05.07',
    score: 98,
    grade: 'Mastery',
  },
  {
    id: 2,
    title: 'Product Launch Pitch',
    date: '2026.04.28',
    score: 41,
    grade: 'Bad',
  },
  {
    id: 3,
    title: 'Informative Lecture',
    date: '2026.04.14',
    score: 87,
    grade: 'Excellent',
  },
  {
    id: 4,
    title: 'Team Meeting Brief',
    date: '2026.03.30',
    score: 72,
    grade: 'Normal',
  },
  {
    id: 5,
    title: 'Debate Practice',
    date: '2026.02.18',
    score: 29,
    grade: 'Bad',
  },
  {
    id: 6,
    title: 'Customer Support Roleplay',
    date: '2025.12.25',
    score: 91,
    grade: 'Excellent',
  },
  {
    id: 7,
    title: 'Conference Presentation',
    date: '2025.10.11',
    score: 64,
    grade: 'Normal',
  },
  {
    id: 8,
    title: 'Interview Self Introduction',
    date: '2025.08.03',
    score: 78,
    grade: 'Good',
  },
  {
    id: 9,
    title: 'Persuasive Speech',
    date: '2025.05.21',
    score: 100,
    grade: 'Mastery',
  },
  {
    id: 10,
    title: 'Practice',
    date: '2025.01.09',
    score: 53,
    grade: 'Bad',
  },
];
export const mockDifficultyLevel: DifficultyLevel = '중학교 3학년';
