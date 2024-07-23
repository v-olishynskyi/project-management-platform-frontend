import React from 'react';
import './styles.scss';
import { useLocation, useNavigate } from 'react-router-dom';

const menuItems: Array<{ iconComponent: React.ReactNode; route: string }> = [
  {
    iconComponent: null,
    // <Avatar
    //   image={
    //     'https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp'
    //   }
    //   className='flex align-items-center justify-content-center mr-2'
    //   size='xlarge'
    //   shape='circle'
    // />
    route: '/profile',
  },
  {
    iconComponent: <i className='pi pi-home menu-icon' />,
    route: '/home',
  },
  {
    iconComponent: <i className='pi pi-folder menu-icon' />,
    route: '/projects',
  },
  {
    iconComponent: <i className='pi pi-users menu-icon' />,
    route: '/team',
  },
  {
    iconComponent: <i className='pi pi-calendar menu-icon' />,
    route: '/calendar',
  },
  {
    iconComponent: <i className='pi pi-file menu-icon' />,
    route: '/documents',
  },
  {
    iconComponent: <i className='pi pi-cog menu-icon' />,
    route: '/settings',
  },
  {
    iconComponent: <i className='pi pi-comments menu-icon' />,
    route: '/messages',
  },
  {
    iconComponent: <i className='pi pi-code menu-icon' />,
    route: '/components',
  },
];

const SidebarMenu: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className='sidebar-menu-container'>
      {menuItems.map(menuItem => {
        const isActive = location.pathname.includes(menuItem.route);

        return (
          <div
            key={menuItem.route}
            className={`menu-item ${isActive ? 'menu-item__active' : ''}`}
            onClick={() => navigate({ pathname: menuItem.route })}>
            {menuItem.iconComponent}
          </div>
        );
      })}
    </div>
  );
};
export default SidebarMenu;
