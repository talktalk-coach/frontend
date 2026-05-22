import {mockPerformanceMetrics} from '@/mocks/result';

export {mockPerformanceMetrics};
export type {PerformanceMetric} from '@/mocks/result';

export interface Highlight {
  title: string;
  description: string;
}

export const mockHighlight: Highlight = {
  title: '유창성과 부음이\n눈에 띄게 성장했어요!',
  description: '지난주 대비 유창성 점수가 12% 향상되었습니다.',
};

export interface GrowthRate {
  label: string;
  value: number;
}

export const mockGrowthRate: GrowthRate = {
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
  {key: 'elementaryLow', label: '초 1-2', color: '#D4C28A'},
  {key: 'elementaryMid', label: '초 3-4', color: '#BFCD8F'},
  {key: 'elementaryHigh', label: '초 5-6', color: '#8A9A5B'},
  {key: 'middleLow', label: '중 1-2', color: '#606C38'},
  {key: 'middleHigh', label: '중 3', color: '#485422'},
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
    month: '2월',
    elementaryLow: 12,
    elementaryMid: 18,
    elementaryHigh: 25,
    middleLow: 32,
    middleHigh: 40,
  },
  {
    month: '4월',
    elementaryLow: 18,
    elementaryMid: 30,
    elementaryHigh: 42,
    middleLow: 50,
    middleHigh: 58,
  },
  {
    month: '6월',
    elementaryLow: 24,
    elementaryMid: 42,
    elementaryHigh: 58,
    middleLow: 67,
    middleHigh: 73,
  },
  {
    month: '8월',
    elementaryLow: 28,
    elementaryMid: 52,
    elementaryHigh: 70,
    middleLow: 80,
    middleHigh: 84,
  },
  {
    month: '10월',
    elementaryLow: 31,
    elementaryMid: 60,
    elementaryHigh: 78,
    middleLow: 88,
    middleHigh: 91,
  },
  {
    month: '12월',
    elementaryLow: 33,
    elementaryMid: 64,
    elementaryHigh: 83,
    middleLow: 92,
    middleHigh: 95,
  },
];
