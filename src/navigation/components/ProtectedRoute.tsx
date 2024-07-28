import { useTrackedStore } from '@store';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ children }: { children: any }) => {
  const location = useLocation();

  const isAuth = useTrackedStore().auth.isAuth();

  if (!isAuth)
    return <Navigate to='/login' state={{ from: location.pathname }} />;

  return children;
};
