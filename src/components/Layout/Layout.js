import React from 'react';
import { Outlet } from 'react-router';
import './Layout.scss';

const Layout = ({children}) => {
  return (
    <div className="layout-container">
      <main className="layout-content">
        <Outlet/>
      </main>
      
    </div>
  )
}

export default Layout;