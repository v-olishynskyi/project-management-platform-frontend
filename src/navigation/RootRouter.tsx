import React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from 'react-router-dom';
import { AuthorizedLayout, UnauthorizedLayout } from '@components';
import {
  Login,
  Registration,
  Calendar,
  Documents,
  Home,
  Messages,
  Profile,
  Projects,
  Settings,
  Team,
} from '@pages';
import { ProtectedRoute } from './components';
import { useTrackedStore } from '@store';

export const RootRouter = () => {
  const isAuth = useTrackedStore().auth.isAuth();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AuthorizedLayout />,
      children: [
        {
          path: '/dashboard',
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: '/profile',
          element: (
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          ),
        },
        {
          path: '/projects',
          element: (
            <ProtectedRoute>
              <Projects />
            </ProtectedRoute>
          ),
        },
        {
          path: '/team',
          element: (
            <ProtectedRoute>
              <Team />
            </ProtectedRoute>
          ),
        },
        {
          path: '/calendar',
          element: (
            <ProtectedRoute>
              <Calendar />
            </ProtectedRoute>
          ),
        },
        {
          path: '/documents',
          element: (
            <ProtectedRoute>
              <Documents />
            </ProtectedRoute>
          ),
        },
        {
          path: '/settings',
          element: (
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          ),
        },
        {
          path: '/messages',
          element: (
            <ProtectedRoute>
              <Messages />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      Component: UnauthorizedLayout,
      loader: () => {
        if (isAuth) return redirect('/dashboard');
        return null;
      },
      children: [
        {
          path: '/login',
          Component: Login,
        },
        {
          path: '/registration',
          Component: Registration,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
