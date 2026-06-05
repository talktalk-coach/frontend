export const SPEECH_CATEGORIES = [
  {value: 'PRESENTATION', label: '발표'},
  {value: 'SPEECH', label: '연설'},
  {value: 'DEBATE', label: '토론'},
] as const;

export type SpeechCategory = (typeof SPEECH_CATEGORIES)[number]['value'];
