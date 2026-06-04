/** 학습 통계 상세 컴포넌트 prop 타입 */
export interface Highlight {
  title: string;
  description: string;
}

export interface GrowthRate {
  label: string;
  value: number;
}

export interface DailyScoreItem {
  date: string;
  score: number;
}

export interface PerformanceMetric {
  label: string;
  value: number;
}
