import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { path: "/dashboard", icon: "ri-apps-2-line", display: "Dashboard" },
        { path: "/upload", icon: "ri-upload-line", display: "Upload" },
        { path: "/settings", icon: "ri-settings-2-line", display: "Settings" },
    ];

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-4 focus:outline-none">
                <i className="ri-menu-line text-2xl text-white"></i>
            </button>
            <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
                <div className="p-4 text-2xl font-semibold">Car Rental</div>
                <nav className="mt-4">
                    <ul>
                        {navLinks.map((item, index) => (
                            <li key={index} className="mb-4">
                                <NavLink
                                    to={item.path}
                                    className="flex items-center p-2 hover:bg-gray-700 rounded transition-colors duration-200"
                                    activeClassName="bg-gray-700">
                                    <i className={`${item.icon} mr-2`}></i>
                                    {item.display}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
