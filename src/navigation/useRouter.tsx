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
      children: [
        {
          path: '/profile',
          element: <div>profile</div>,
        },
        {
          path: '/home',
          element: <div>home</div>,
        },
        {
          path: '/projects',
          element: <div>projects</div>,
        },
        {
          path: '/team',
          element: <div>team</div>,
        },
        {
          path: '/calendar',
          element: <div>calendar</div>,
        },
        {
          path: '/documents',
          element: <div>documentation</div>,
        },
        {
          path: '/settings',
          element: <div>settings</div>,
        },
        {
          path: '/messages',
          element: <div>messages</div>,
        },
      ],
    },
  ]);

  return router;
};

export default useRouter;
