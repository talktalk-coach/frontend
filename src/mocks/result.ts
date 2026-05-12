export const mockScore = 84;

export interface PerformanceMetric {
  label: string;
  value: number;
}

export const mockPerformanceMetrics = [
  {label: '정확도', value: 92},
  {label: '유창성', value: 50},
  {label: '발음', value: 88},
  {label: '어휘력', value: 95},
  {label: '논리성', value: 85},
  {label: '표현력', value: 90},
];

export const mockImprovementPlans = [
  {
    id: 1,
    title: '논리적 연결어 강화',
    description:
      '"따라서", "더불어"와 같은 전환어를 활용하여 문장 간의 흐름을 부드럽게 개선하세요.',
  },
  {
    id: 2,
    title: '속도 조절 (Pacing)',
    description:
      '강조하고 싶은 핵심 키워드 앞에서는 0.5초의 일시정지를 두어 긴장감을 조성하세요.',
  },
  {
    id: 3,
    title: '불필요한 추임새 제거',
    description:
      '"어...", "음..."과 같은 습관적인 추임새가 3회 발견되었습니다. 침묵을 두려워하지 마세요.',
  },
];

export const mockScript = `안녕하세요. 이번 발표에서는 저희 서비스의 핵심 기능과 개선 방향에 대해 설명드리겠습니다.
먼저, 사용자 경험을 향상시키기 위해 음성 분석 기능을 도입했습니다.
이를 통해 발음, 속도, 표현력 등을 종합적으로 평가할 수 있습니다.
또한, 사용자에게 맞춤형 피드백을 제공하여 지속적인 개선이 가능하도록 설계했습니다.
이상으로 발표를 마치겠습니다. 감사합니다.
`;
