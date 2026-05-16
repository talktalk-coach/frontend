export interface FindIdResult {
  maskedId: string;
  joinedAt: string;
}

export const mockFindIdSuccess: FindIdResult = {
  maskedId: 'snow**42',
  joinedAt: '2024.05.12',
};

export interface FindPasswordSent {
  email: string;
}

export const mockFindPasswordSent: FindPasswordSent = {
  email: 'example@email.com',
};
