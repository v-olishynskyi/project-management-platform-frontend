import React from 'react';
import '@styles/variables.css';
import './App.scss';
import { RouterProvider } from 'react-router-dom';
import { useRouter } from '@navigation';

function App() {
  const theme = 'light';

  const router = useRouter();

  return (
    <div className={`${theme}-theme app`}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
