import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './components';
import { AppLayout } from '@components';
import {
  Calendar,
  Components,
  Documents,
  Home,
  Login,
  Messages,
  Profile,
  Projects,
  Registration,
  Settings,
  Team,
} from '@pages';

export const router = createBrowserRouter([
  { path: '/components', element: <Components /> },
  { path: '/login', element: <Login /> },
  { path: '/registration', element: <Registration /> },
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
