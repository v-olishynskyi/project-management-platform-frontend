import React from 'react';
import { authorizedRouter, unauthorizedRouter } from './routers';

export const useRouter = () => {
  const isAuth = false;

  const router = React.useMemo(
    () => (isAuth ? authorizedRouter : unauthorizedRouter),
    [isAuth]
  );

  return unauthorizedRouter;
};
