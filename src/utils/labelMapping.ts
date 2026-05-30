import {round1} from '@/utils/number';
import type {SpeechGrade} from '@/types/common';

// 점수 레이블 매핑 함수
type ScoreLabel = {
  accuracyScore: number;
  fluencyScore: number;
  prosodyScore: number;
  vocabularyScore: number;
  logicScore: number;
  structureScore: number;
};
export const mapScoreLabel = (data: ScoreLabel) => [
  {label: '정확도', value: round1(data.accuracyScore)},
  {label: '유창성', value: round1(data.fluencyScore)},
  {label: '운율감', value: round1(data.prosodyScore)},
  {label: '어휘력', value: round1(data.vocabularyScore)},
  {label: '논리성', value: round1(data.logicScore)},
  {label: '구조력', value: round1(data.structureScore)},
];

// 세부 피드백 레이블 매핑 함수
type ImprovementPlanLabel = {
  vocabularyFeedback: string;
  logicFeedback: string;
  sentenceStructureFeedback: string;
};

export const mapImprovementPlanLabel = (data: ImprovementPlanLabel) => [
  {id: 1, title: '어휘', description: data.vocabularyFeedback},
  {id: 2, title: '논리', description: data.logicFeedback},
  {id: 3, title: '문장 구조', description: data.sentenceStructureFeedback},
];

// 스피치 등급 매핑 함수
export const mapGradeLabel = (score: number): SpeechGrade => {
  if (score <= 40) return 'Bad';
  if (score <= 60) return 'Normal';
  if (score <= 85) return 'Good';
  if (score <= 95) return 'Excellent';
  return 'Mastery';
};
