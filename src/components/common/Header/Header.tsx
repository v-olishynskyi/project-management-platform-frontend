import React from 'react';
import './styles.scss';
import { useAtomValue, useSetAtom } from 'jotai';
import { isDarkModeAtom } from '@store';
import { Input } from '@components';

const Header: React.FC = () => {
  const setIsDarkMode = useSetAtom(isDarkModeAtom);
  const isDark = useAtomValue(isDarkModeAtom);

  const toggleTheme = React.useCallback(() => setIsDarkMode(!isDark), [isDark]);

  return (
    <header className='header-container'>
      <div className='searchbar-container'>
        <Input />
      </div>
      <div className='theme-toggler' onClick={toggleTheme}>
        {
          <i
            className={`pi ${isDark ? 'pi-sun' : 'pi-moon'}`}
            style={{ fontSize: '2rem', color: isDark ? 'yellow' : 'cyan' }}
          />
        }
      </div>
    </header>
  );
};

export default Header;
