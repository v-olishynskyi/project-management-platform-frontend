import { storeActions, useStore } from '@store';
import { MutationKey, useMutation } from '@tanstack/react-query';
import { BaseApiResponse } from '@types';
import { notify } from '@utils';
import { MutationKeys } from 'api/MutationKeys';
import { LoginData, LoginResponse } from 'api/services/auth';
import AuthService from 'api/services/auth/Auth.service';

export const useLogin = () => {
  const mutationKey: MutationKey = [MutationKeys.login];
  const setIsAuth = storeActions.auth.isAuth;

  return useMutation<
    BaseApiResponse<LoginResponse>,
    BaseApiResponse,
    LoginData
  >({
    mutationKey,
    mutationFn: AuthService.login,
    onSuccess: ({ message }) => {
      notify.success(message);
      setIsAuth(true);
    },
    onError: ({ message }) => {
      notify.error(message);
    },
  });
};
