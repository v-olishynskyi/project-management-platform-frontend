import React from 'react';
import './styles.scss';
import { Header, Sidebar } from '@components';

const AppLayout: React.FC = () => {
  return (
    <div style={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main className='main-layout'>
        <Sidebar />
      </main>
    </div>
  );
};

export default AppLayout;
