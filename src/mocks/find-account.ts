export interface FindIdResult {
  maskedId: string;
  joinedAt: string;
}

export const mockFindIdSuccess: FindIdResult = {
  maskedId: 'snow**42',
  joinedAt: '2024.05.12',
};
