import {mockPerformanceMetrics} from '@/mocks/result';

export {mockPerformanceMetrics};

export interface Highlight {
  title: string;
  description: string;
}

export const mockHighlight: Highlight = {
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
  key:
    | 'elementaryLow'
    | 'elementaryMid'
    | 'elementaryHigh'
    | 'middleLow'
    | 'middleHigh';
  label: string;
  color: string;
}

export const HISTORY_GROUPS: HistoryGroup[] = [
  {key: 'elementaryLow', label: '초등학교 1-2학년', color: '#D4C28A'},
  {key: 'elementaryMid', label: '초등학교 3-4학년', color: '#BFCD8F'},
  {key: 'elementaryHigh', label: '초등학교 5-6학년', color: '#8A9A5B'},
  {key: 'middleLow', label: '중학교 1-2학년', color: '#606C38'},
  {key: 'middleHigh', label: '중학교 3학년', color: '#485422'},
];

export interface MonthlyScoreItem {
  month: string;
  elementaryLow: number;
  elementaryMid: number;
  elementaryHigh: number;
  middleLow: number;
  middleHigh: number;
}

export const mockMonthlyScores: MonthlyScoreItem[] = [
  {
    month: '1월',
    elementaryLow: 25,
    elementaryMid: 30,
    elementaryHigh: 50,
    middleLow: 65,
    middleHigh: 80,
  },
  {
    month: '2월',
    elementaryLow: 28,
    elementaryMid: 38,
    elementaryHigh: 60,
    middleLow: 75,
    middleHigh: 85,
  },
  {
    month: '3월',
    elementaryLow: 30,
    elementaryMid: 50,
    elementaryHigh: 72,
    middleLow: 82,
    middleHigh: 88,
  },
  {
    month: '4월',
    elementaryLow: 32,
    elementaryMid: 58,
    elementaryHigh: 80,
    middleLow: 87,
    middleHigh: 90,
  },
  {
    month: '5월',
    elementaryLow: 33,
    elementaryMid: 62,
    elementaryHigh: 85,
    middleLow: 90,
    middleHigh: 93,
  },
  {
    month: '6월',
    elementaryLow: 33,
    elementaryMid: 64,
    elementaryHigh: 87,
    middleLow: 92,
    middleHigh: 95,
  },
];
