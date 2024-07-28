import React from 'react';
import s from './styles.module.scss';
import { Header, SidebarMenu } from '@components';
import { Outlet } from 'react-router-dom';

const AuthorizedLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.authorized_layout}>
      <Header />
      <main className={s.main_layout}>
        <SidebarMenu />
        {children || <Outlet />}
      </main>
    </div>
  );
};

export default AuthorizedLayout;
