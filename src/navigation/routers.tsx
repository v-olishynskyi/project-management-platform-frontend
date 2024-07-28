import React from 'react';
import { Navigate, createBrowserRouter, redirect } from 'react-router-dom';
import { ProtectedRoute } from './components';
import { AuthorizedLayout } from '@components';
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

export const authorizedRouter = createBrowserRouter([
  { path: '/components', element: <Components /> },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AuthorizedLayout />
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

export const unauthorizedRouter = createBrowserRouter([
  { path: '/login', element: <Login /> },
  { path: '/registration', element: <Registration /> },
]);
