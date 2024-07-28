import React from 'react';
import s from './styles.module.scss';
import { Outlet } from 'react-router-dom';

const UnauthorizedLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <div className={s.unauthorized_layout}>{children || <Outlet />}</div>;
};

export default UnauthorizedLayout;
