import React from 'react';
import { ProtectedRoute } from './components';
import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '@components';

const useRouter = () => {
  const router = createBrowserRouter([
    { path: '/login', element: null },
    { path: '/registration', element: null },
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      ),
      children: [{}],
    },
  ]);

  return router;
};

export default useRouter;
