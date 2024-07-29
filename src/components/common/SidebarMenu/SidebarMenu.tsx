import React from 'react';
import s from './styles.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { Avatar, CircularProgress } from '@mui/material';
import { useLogout } from 'api/hooks/auth';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FolderIcon from '@mui/icons-material/Folder';
import FolderOutlined from '@mui/icons-material/FolderOutlined';
import PeopleIcon from '@mui/icons-material/People';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArticleIcon from '@mui/icons-material/Article';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import LogoutIcon from '@mui/icons-material/Logout';

const menuItems: Array<{
  iconComponent: {
    default: React.ReactNode;
    active: React.ReactNode;
  };
  route: string;
}> = [
  {
    iconComponent: {
      default: (
        <Avatar
          src={
            'https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp'
          }
          variant='circular'
        />
      ),
      active: (
        <Avatar
          src={
            'https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp'
          }
          variant='circular'
        />
      ),
    },
    route: '/profile',
  },
  {
    iconComponent: {
      active: <DashboardIcon sx={{ fontSize: 32 }} />,
      default: <DashboardOutlinedIcon sx={{ fontSize: 32 }} />,
    },
    route: '/dashboard',
  },
  {
    iconComponent: {
      active: <FolderIcon sx={{ fontSize: 32 }} />,
      default: <FolderOutlined sx={{ fontSize: 32 }} />,
    },
    route: '/projects',
  },
  {
    iconComponent: {
      active: <PeopleIcon sx={{ fontSize: 32 }} />,
      default: <PeopleAltOutlinedIcon sx={{ fontSize: 32 }} />,
    },
    route: '/team',
  },
  {
    iconComponent: {
      active: <CalendarMonthIcon sx={{ fontSize: 32 }} />,
      default: <CalendarMonthOutlinedIcon sx={{ fontSize: 32 }} />,
    },
    route: '/calendar',
  },
  {
    iconComponent: {
      active: <ArticleIcon sx={{ fontSize: 32 }} />,
      default: <ArticleOutlinedIcon sx={{ fontSize: 32 }} />,
    },
    route: '/documents',
  },
  {
    iconComponent: {
      active: <ChatIcon sx={{ fontSize: 32 }} />,
      default: <ChatOutlinedIcon sx={{ fontSize: 32 }} />,
    },
    route: '/messages',
  },
  {
    iconComponent: {
      active: <SettingsIcon sx={{ fontSize: 32 }} />,
      default: <SettingsOutlinedIcon sx={{ fontSize: 32 }} />,
    },
    route: '/settings',
  },
];

const SidebarMenu: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { isPending: isLogouting, mutateAsync: logoutMutation } = useLogout();

  const logout = async () => {
    await logoutMutation();
    navigate('/login');
  };

  return (
    <aside className={s.sidebar_menu_container}>
      {menuItems.map(menuItem => {
        const isActive = location.pathname.includes(menuItem.route);

        return (
          <div
            key={menuItem.route}
            className={`${s.menu_item} ${isActive ? s.menu_item__active : ''}`}
            onClick={() => navigate({ pathname: menuItem.route })}>
            {isActive
              ? menuItem.iconComponent.active
              : menuItem.iconComponent.default}
          </div>
        );
      })}

      <div className={s.menu_item} onClick={logout}>
        {isLogouting ? (
          <CircularProgress size={32} />
        ) : (
          <LogoutIcon sx={{ fontSize: 32 }} />
        )}
      </div>
    </aside>
  );
};
export default SidebarMenu;
