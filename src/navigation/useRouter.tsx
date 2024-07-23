import React from 'react';
import { ProtectedRoute } from './components';
import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from '@components';
import {
  Calendar,
  Documents,
  Home,
  Messages,
  Profile,
  Projects,
  Settings,
  Team,
} from '@pages';

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
          element: <Profile />,
        },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/projects',
          element: <Projects />,
        },
        {
          path: '/team',
          element: <Team />,
        },
        {
          path: '/calendar',
          element: <Calendar />,
        },
        {
          path: '/documents',
          element: <Documents />,
        },
        {
          path: '/settings',
          element: <Settings />,
        },
        {
          path: '/messages',
          element: <Messages />,
        },
      ],
    },
  ]);

  return router;
};

export default useRouter;
