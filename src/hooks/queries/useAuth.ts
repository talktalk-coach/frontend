/** 인증 관련 React Query 훅 모음(로딩중인지, 성공했는지, 실패했는지 상태관리) */
'use client';
import {useMutation} from '@tanstack/react-query';
import {login} from '@/services/api/auth/authLogin';
import {signup} from '@/services/api/auth/authSignup';
import {refresh} from '@/services/api/auth/authRefresh';
import {sendEmailCode} from '@/services/api/auth/authSendEmailCode';
import {verifyEmailCode} from '@/services/api/auth/authVerifyEmailCode';
import {sendParentEmailCode} from '@/services/api/auth/authSendParentEmailCode';
import {verifyParentEmailCode} from '@/services/api/auth/authVerifyParentEmailCode';

export const useLogin = () =>
  useMutation({
    mutationFn: login,
  });

export const useSignup = () =>
  useMutation({
    mutationFn: signup,
  });

export const useRefresh = () =>
  useMutation({
    mutationFn: refresh,
  });

export const useSendEmailCode = () =>
  useMutation({
    mutationFn: sendEmailCode,
  });

export const useVerifyEmailCode = () =>
  useMutation({
    mutationFn: verifyEmailCode,
  });

export const useSendParentEmailCode = () =>
  useMutation({
    mutationFn: sendParentEmailCode,
  });

export const useVerifyParentEmailCode = () =>
  useMutation({
    mutationFn: verifyParentEmailCode,
  });
