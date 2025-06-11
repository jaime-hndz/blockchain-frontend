import {Outlet, Navigate } from 'react-router';
import { user } from '../helpers/UserProvider';
export const PublicRoutes = () => {  
  return !user ? (
      <Outlet />
  ) : (
    <Navigate to="/" />
  );
}