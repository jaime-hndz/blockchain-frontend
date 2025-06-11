import React from 'react'
import { Outlet } from "react-router";

export const PrivateLayout = () => {
  return (
    <>
    <div>PrivateLayout         
        <button onClick={() => {
          localStorage.removeItem('user');
          window.location.href = '/login';
        }}>Logout</button></div>
    <Outlet />
    <div>Footer</div>
    </>
  )
}
