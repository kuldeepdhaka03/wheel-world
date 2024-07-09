import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../../assets/car/32.jpg';

const TopNav = () => {
  return (
    <div className="fixed top-0 left-0 lg:left-64 z-50 bg-[rgb(196,195,240)] w-full lg:w-[calc(100%-16rem)] h-16 flex items-center justify-between px-4 lg:px-8">
      <div className="flex items-center justify-between px-2.5 bg-[hsl(226,40%,25%)] rounded-md cursor-pointer h-10 w-full lg:w-auto lg:mr-auto">
        <input 
          type="text" 
          placeholder="search or type" 
          className="bg-transparent border-none outline-none text-[rgb(165,165,187)] placeholder-[rgb(165,165,187)] w-full lg:w-auto" 
        />
        <span><i className="ri-search-line text-[rgb(165,165,187)]"></i></span>
      </div>
      <div className="flex items-center justify-end gap-4 lg:gap-8">
        <span className="relative">
          <i className="ri-notification-3-fill text-midnightblue text-xl cursor-pointer"></i>
          <span className="absolute top-1/4 right-[-10%] w-3 h-3 flex items-center justify-center bg-secondary-color rounded-full text-white text-xs">1</span>
        </span>
        <div className="flex items-center justify-end">
          <Link to="/Settings">
            <img src={profileImg} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
