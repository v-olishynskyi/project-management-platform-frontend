import React from 'react';
import './styles.scss';
import { storeActions, useStore } from '@store';

const Header: React.FC = () => {
  const setIsDarkMode = storeActions.app.isDark;
  const isDarkMode = useStore().app.isDark();

  const toggleTheme = React.useCallback(
    () => setIsDarkMode(!isDarkMode),
    [isDarkMode, setIsDarkMode]
  );

  return (
    <header className='header-container'>
      <div className='searchbar-container'></div>
      <div className='theme-toggler' onClick={toggleTheme}>
        {
          <i
            className={`pi ${isDarkMode ? 'pi-sun' : 'pi-moon'}`}
            style={{ fontSize: '2rem', color: isDarkMode ? 'yellow' : 'cyan' }}
          />
        }
      </div>
    </header>
  );
};

export default Header;
