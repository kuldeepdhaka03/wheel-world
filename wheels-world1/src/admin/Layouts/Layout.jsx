import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNav from './TopNav';

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <TopNav/>
      <Sidebar/>
      <main className='flex-grow bg-gray-100'>
        <Outlet />
      </main>
      
      
    </div>
  );
};

export default Layout;
