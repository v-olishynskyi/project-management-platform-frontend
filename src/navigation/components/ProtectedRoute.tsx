import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export const ProtectedRoute: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const location = useLocation();

  const isAuth = true;

  if (!isAuth) <Navigate to='/login' state={{ from: location.pathname }} />;

  return children;
};
