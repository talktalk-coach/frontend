'use client';
import {useState, useMemo} from 'react';
import {QuizItem} from '@/services/api/quiz/quizTodayApi';

export const useQuizProgress = (quizData: QuizItem[] | undefined) => {
  const [offset, setOffset] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const startIndex = useMemo(() => {
    if (!quizData) return 0;
    const firstUnanswered = quizData.findIndex(
      (q) => !q.answered || q.isCorrect === false
    );
    return firstUnanswered === -1 ? quizData.length - 1 : firstUnanswered;
  }, [quizData]);

  const index = startIndex + offset;

  const isFinishedFromData =
    !!quizData && quizData.every((q) => q.answered && q.isCorrect === true);
  const quizFinished = isFinished || isFinishedFromData;

  const handleQuizNext = (todayCorrectCount: number) => {
    if (!quizData) return;
    if (todayCorrectCount >= quizData.length) {
      setIsFinished(true);
      return;
    }
    const nextIndex = quizData.findIndex(
      (q, i) => i > index && (!q.answered || q.isCorrect === false)
    );
    if (nextIndex !== -1) {
      setOffset(nextIndex - startIndex);
    }
  };

  return {index, quizFinished, handleQuizNext};
};
