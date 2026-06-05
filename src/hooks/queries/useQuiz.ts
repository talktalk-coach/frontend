'use client';
import {useQuery, useMutation} from '@tanstack/react-query';
import {getTodayQuiz} from '@/services/api/quiz/quizTodayApi';
import {submitQuiz} from '@/services/api/quiz/quizSubmitApi';
import type {SubmitQuizRequest} from '@/services/api/quiz/quizSubmitApi';

export const useTodayQuiz = () => {
  return useQuery({
    queryKey: ['todayQuiz'],
    queryFn: getTodayQuiz,
    staleTime: 0,
    refetchOnMount: 'always',
  });
};

export const useSubmitQuiz = () => {
  return useMutation({
    mutationFn: (body: SubmitQuizRequest) => submitQuiz(body),
  });
};
