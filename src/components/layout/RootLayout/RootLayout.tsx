import React from 'react';
import s from './styles.module.scss';
import { Outlet } from 'react-router-dom';
import { storeGetter } from '@store';

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const theme = storeGetter.app._theme();

  return (
    <div className={`${s.root_layout} ${theme}-theme`}>
      {children || <Outlet />}
    </div>
  );
};

export default RootLayout;
