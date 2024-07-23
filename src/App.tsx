import React from 'react';
import '@styles/variables.css';
import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from '@navigation';
import { useAtomValue } from 'jotai';
import { themeAtom } from '@store';

function App() {
  const theme = useAtomValue(themeAtom);

  return (
    <div className={`${theme}-theme app`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
