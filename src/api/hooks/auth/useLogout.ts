import { MutationKeys } from '@api/MutationKeys';
import AuthService from '@api/services/auth';
import { useMutation } from '@tanstack/react-query';
import { BaseApiResponse } from '@types';

export const useLogout = () => {
  const mutationKey = [MutationKeys.logout];

  return useMutation<BaseApiResponse, BaseApiResponse>({
    mutationKey,
    mutationFn: AuthService.logout,
  });
};
