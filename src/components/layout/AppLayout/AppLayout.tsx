import React from 'react';
import './styles.scss';
import { Header, SidebarMenu } from '@components';
import { Outlet } from 'react-router-dom';

const AppLayout: React.FC = () => {
  return (
    <div style={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main className='main-layout'>
        <SidebarMenu />
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
