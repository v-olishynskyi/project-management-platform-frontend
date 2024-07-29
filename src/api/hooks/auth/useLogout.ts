import { MutationKeys } from 'api/MutationKeys';
import AuthService from 'api/services/auth';
import { useMutation } from '@tanstack/react-query';
import { BaseApiResponse } from '@types';
import { storeActions } from '@store';

export const useLogout = () => {
  const mutationKey = [MutationKeys.logout];
  const setIsAuth = storeActions.auth.isAuth;

  return useMutation<BaseApiResponse, BaseApiResponse>({
    mutationKey,
    mutationFn: AuthService.logout,
    onSuccess: () => {
      setIsAuth(false);
    },
  });
};
