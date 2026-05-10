import {mockPerformanceMetrics} from '@/mocks/result';

export {mockPerformanceMetrics};

export const mockHighlight = {
  title: '유창성과 부음이\n눈에 띄게 성장했어요!',
  description: '지난주 대비 유창성 점수가 12% 향상되었습니다.',
};

export const mockGrowthRate = {
  label: '전체 성장률',
  value: 24.8,
};

export const mockOverallAverage = 88.5;

export interface DailyScoreItem {
  date: string;
  score: number;
}

export const mockDailyScores: DailyScoreItem[] = [
  {date: '10/24', score: 78},
  {date: '10/25', score: 82},
  {date: '10/26', score: 87},
  {date: '10/27', score: 89},
  {date: '10/28', score: 91},
  {date: '10/29', score: 90},
  {date: '오늘', score: 92},
];

export const mockDailyAverage = 88.5;

export interface HistoryGroup {
  key: 'foreigner' | 'elementaryLow' | 'elementaryHigh' | 'middle';
  label: string;
  color: string;
}

export const HISTORY_GROUPS: HistoryGroup[] = [
  {key: 'foreigner', label: '외국인', color: '#835418'},
  {key: 'elementaryLow', label: '초등 저학년', color: '#BFCD8F'},
  {key: 'elementaryHigh', label: '초등 고학년', color: '#606C38'},
  {key: 'middle', label: '중학생', color: '#485422'},
];

export interface MonthlyScoreItem {
  month: string;
  foreigner: number;
  elementaryLow: number;
  elementaryHigh: number;
  middle: number;
}

export const mockMonthlyScores: MonthlyScoreItem[] = [
  {
    month: '1월',
    foreigner: 25,
    elementaryLow: 30,
    elementaryHigh: 50,
    middle: 65,
  },
  {
    month: '2월',
    foreigner: 28,
    elementaryLow: 38,
    elementaryHigh: 60,
    middle: 75,
  },
  {
    month: '3월',
    foreigner: 30,
    elementaryLow: 50,
    elementaryHigh: 72,
    middle: 82,
  },
  {
    month: '4월',
    foreigner: 32,
    elementaryLow: 58,
    elementaryHigh: 80,
    middle: 87,
  },
  {
    month: '5월',
    foreigner: 33,
    elementaryLow: 62,
    elementaryHigh: 85,
    middle: 90,
  },
  {
    month: '6월',
    foreigner: 33,
    elementaryLow: 64,
    elementaryHigh: 87,
    middle: 92,
  },
];
