import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/1.jpg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex items-center justify-between bg-white h-auto md:h-16 shadow-xl p-4 md:p-2 sticky top-0 z-50">
      <nav className="flex font-sans text-sm font-semibold tracking-wider space-x-4 md:space-x-6">
        {['HOME', 'ABOUT', 'VEHICLES', 'CONTACT'].map((label, index) => (
          <Link 
            key={index} 
            to={`/${label.toLowerCase()}`} 
            className="nav-link text-zinc-800 hover:text-gray-300" 
            aria-label={label}
          >
            {label}
          </Link>
        ))}
      </nav>
      <div className="flex justify-center items-center font-semibold text-lg md:text-xl">
        WHEELS WORLD
      </div>
      <div className="relative">
        <img 
          src= {img1} 
          alt="User Avatar" 
          className="w-8 h-8 rounded-full cursor-pointer" 
          onClick={toggleDropdown} 
        />
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50">
            <ul>
              {['Login', 'Sign Up'].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '')}`} 
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={closeDropdown}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
